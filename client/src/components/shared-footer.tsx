import { Link } from "wouter";

export function SharedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2332] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">
              &copy; {currentYear} Prestige Moving Vancouver. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              Website by{" "}
              <a 
                href="https://ottawaseo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C5A572] hover:text-[#D4B483] transition-colors"
                data-testid="link-ottawa-seo"
              >
                Ottawa SEO Inc.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
