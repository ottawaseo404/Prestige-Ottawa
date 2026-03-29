import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSet = new Set<string>();

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSet.add(id);
          } else {
            visibleSet.delete(id);
          }
          const first = items.find((i) => visibleSet.has(i.id));
          if (first) setActive(first.id);
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop sticky sidebar */}
      <aside className="hidden xl:block sticky top-24 self-start w-56 shrink-0" aria-label="Table of contents">
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">On this page</p>
          <nav>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors duration-150 ${
                      active === item.id
                        ? "bg-[#C5A572]/10 text-[#C5A572] font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href="/book"
              className="block w-full text-center bg-[#1A2332] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#2a3a52] transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile collapsible */}
      <div className="xl:hidden w-full mb-2 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800"
          aria-expanded={mobileOpen}
        >
          <span className="flex items-center gap-2">
            <List className="h-4 w-4 text-[#C5A572]" />
            Table of Contents
          </span>
          <span className={`transition-transform duration-200 ${mobileOpen ? "rotate-180" : ""}`}>▾</span>
        </button>
        {mobileOpen && (
          <nav className="border-t border-gray-100 px-5 pb-4">
            <ul className="mt-3 space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      active === item.id
                        ? "text-[#C5A572] font-semibold bg-[#C5A572]/10"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
