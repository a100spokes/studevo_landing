import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// TODO: ЗАМЕНИТЬ ССЫЛКИ !!!
const APP_STORE_URL = "https://apps.apple.com/app/studevo/id000000000";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.studevo.app";

type Platform = "ios" | "android" | "unknown";

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "unknown";
}

function getStoreUrl(platform: Platform): string {
  if (platform === "ios") return APP_STORE_URL;
  if (platform === "android") return GOOGLE_PLAY_URL;
  return "/";
}

function getStoreName(platform: Platform): string {
  if (platform === "ios") return "App Store";
  if (platform === "android") return "Google Play";
  return "Store";
}

export default function AppRedirect() {
  const [platform, setPlatform] = useState<Platform>("unknown");

  useEffect(() => {
    const detected = detectPlatform();
    setPlatform(detected);

    if (detected !== "unknown") {
      const timer = setTimeout(() => {
        window.location.href = getStoreUrl(detected);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ink px-4 relative overflow-hidden">
      {/* Background logo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.15]"
        aria-hidden
      >
        <img
          src="/logo/Vector 1.png"
          alt=""
          className="w-[30vw] max-w-[400px] rotate-[-15deg] select-none"
        />
      </div>

      <div className="text-center max-w-md mx-auto relative z-10">
        {/* Redirecting message */}
        {platform !== "unknown" ? (
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] mb-4">
            Redirecting to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{getStoreName(platform)}</span>
              <span className="absolute bottom-[0.05em] left-0 w-full h-[0.3em] bg-hi-yellow/60 -z-0 rounded-sm" />
            </span>
            ...
          </h1>
        ) : (
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] mb-4">
            Download{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Studevo</span>
              <span className="absolute bottom-[0.05em] left-0 w-full h-[0.3em] bg-hi-yellow/60 -z-0 rounded-sm" />
            </span>
          </h1>
        )}

        <p className="text-white/40 mb-10 text-sm sm:text-base leading-relaxed">
          {platform !== "unknown"
            ? "You should be redirected automatically. If nothing happens, please choose your platform below:"
            : "Choose your platform to download the app:"}
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={APP_STORE_URL}
            className="hover:translate-y-[-3px] hover:brightness-110 transition-all duration-300"
            aria-label="Download on the App Store"
          >
            <img
              src="/apple.png"
              alt="Download on the App Store"
              className="h-12 sm:h-14"
            />
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            className="hover:translate-y-[-3px] hover:brightness-110 transition-all duration-300"
            aria-label="Get it on Google Play"
          >
            <img
              src="/google.png"
              alt="Get it on Google Play"
              className="h-12 sm:h-14"
            />
          </a>
        </div>

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
