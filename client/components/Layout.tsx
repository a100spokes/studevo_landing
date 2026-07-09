import { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { SmoothScroll } from "@/components/ui/SmoothScroll/SmoothScroll";
import ScrollTop from "@/components/ui/ScrollToTop/ScrollToTop";

export default function Layout({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashLink = useCallback((e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  }, [location.pathname, navigate]);

  // Scroll to hash after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHeaderVisible(currentY < lastScrollY.current || currentY < 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-chalk font-sans text-ink">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 pt-4 px-4 transition-transform duration-300 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="max-w-content mx-auto bg-white rounded-pill px-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.08)]">
            <div className="flex justify-between items-center h-14">
              <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-all duration-300 origin-left">
                <img
                  src="/logo/studevo_logo.png"
                  alt="Studevo"
                  className="w-8 h-8 rounded-lg"
                />
                <span
                  className="text-xl tracking-tight text-ink"
                  style={{
                    fontFamily:
                      "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}
                >
                  Studevo
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-8" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <a
                  href="/#about"
                  onClick={(e) => handleHashLink(e, "#about")}
                  className="text-sm text-ink/80 hover:text-ink hover:scale-105 transition-all duration-300 origin-center"
                >
                  About
                </a>
                <a
                  href="/#features"
                  onClick={(e) => handleHashLink(e, "#features")}
                  className="text-sm text-ink/80 hover:text-ink hover:scale-105 transition-all duration-300 origin-center"
                >
                  Features
                </a>
                <a
                  href="/#tutorials"
                  onClick={(e) => handleHashLink(e, "#tutorials")}
                  className="text-sm text-ink/80 hover:text-ink hover:scale-105 transition-all duration-300 origin-center"
                >
                  Tutorials
                </a>
                <Link
                  to="/contact"
                  className="text-sm text-ink/80 hover:text-ink hover:scale-105 transition-all duration-300 origin-center"
                >
                  Contact
                </Link>
              </nav>
              <button
                className="md:hidden text-ink"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <HiOutlineX className="w-5 h-5" />
                ) : (
                  <HiOutlineMenuAlt3 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden max-w-content mx-auto mt-2 bg-white border-2 border-ink/[0.06] rounded-[1.25rem] px-2 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
              <nav className="flex flex-col" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <a
                  href="/#about"
                  onClick={(e) => handleHashLink(e, "#about")}
                  className="text-sm text-ink/70 hover:text-ink hover:bg-chalk rounded-xl px-4 py-3 transition-colors"
                >
                  About
                </a>
                <a
                  href="/#features"
                  onClick={(e) => handleHashLink(e, "#features")}
                  className="text-sm text-ink/70 hover:text-ink hover:bg-chalk rounded-xl px-4 py-3 transition-colors"
                >
                  Features
                </a>
                <a
                  href="/#tutorials"
                  onClick={(e) => handleHashLink(e, "#tutorials")}
                  className="text-sm text-ink/70 hover:text-ink hover:bg-chalk rounded-xl px-4 py-3 transition-colors"
                >
                  Tutorials
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-ink/70 hover:text-ink hover:bg-chalk rounded-xl px-4 py-3 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </header>

        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="relative bg-ink text-white overflow-hidden">
          {/* Background vector logo */}
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-[0.04]"
            aria-hidden
          >
            <img
              src="/logo/Vector 1.png"
              alt=""
              className="w-[400px] select-none"
            />
          </div>

          <div className="max-w-content mx-auto px-6 pt-16 pb-8 relative z-10">
            <div className="grid md:grid-cols-[1fr_auto_auto] gap-10 md:gap-20 mb-14">
              <div className="space-y-5">
                <Link to="/" className="flex items-center gap-3">
                  <img
                    src="/logo/studevo_logo.png"
                    alt="Studevo"
                    className="w-8 h-8 rounded-lg"
                  />
                  <span
                    className="text-xl tracking-tight text-white"
                    style={{
                      fontFamily:
                        "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    }}
                  >
                    Studevo
                  </span>
                </Link>
                <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
                  Learn AI tools and technologies with guided tutorials and
                  comprehensive resources.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-['DM_Mono'] text-xs text-white/30 uppercase tracking-widest">
                  Product
                </h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li>
                    <a
                      href="/#features"
                      className="hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#tutorials"
                      className="hover:text-white transition-colors"
                    >
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 md:text-right">
                <h3 className="font-['DM_Mono'] text-xs text-white/30 uppercase tracking-widest">
                  Company
                </h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li>
                    <a href="/#about" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
              <div className="font-['DM_Mono'] text-xs text-white/30">
                &copy; 2026 Studevo. All rights reserved.
              </div>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link
                  to="/terms"
                  className="text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  className="text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/subscription-terms"
                  className="text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  Subscription Terms
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <ScrollTop />
      </div>
    </SmoothScroll>
  );
}
