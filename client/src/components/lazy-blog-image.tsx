import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyBlogImageProps {
  postId: string;
  title: string;
}

export function LazyBlogImage({ postId, title }: LazyBlogImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || loading || imageUrl || failed) return;
    setLoading(true);
    fetch(`/api/blog/posts/${postId}/image`, { credentials: "include" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (data?.featuredImage) {
          setImageUrl(data.featuredImage);
        } else {
          setFailed(true);
        }
      })
      .catch(() => setFailed(true))
      .finally(() => setLoading(false));
  }, [visible, postId, loading, imageUrl, failed]);

  return (
    <div ref={ref} className="h-48 overflow-hidden bg-gradient-to-br from-[#1A2332] to-[#2a3a52]">
      {loading && <Skeleton className="h-full w-full" />}
      {imageUrl && !failed && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setFailed(true)}
        />
      )}
      {!loading && (!imageUrl || failed) && (
        <div className="h-full flex items-center justify-center">
          <div className="w-12 h-12 bg-[#C5A572]/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-[#C5A572]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
