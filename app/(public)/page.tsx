"use client";

import { useState, useRef } from "react";
import { heroContent } from "../../constants/heroContent";

export default function HeroSection() {
  const [locale, setLocale] = useState<"bg" | "en">("bg");
  const [videoOpen, setVideoOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const t = heroContent[locale];

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* VIDEO BACKGROUND (z-0) */}
        <video
          src="/videos/video1.mp4"
          poster="/images/image1.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* CONTENT (z-10) */}
        <div className="relative z-10 flex h-full flex-col">
          {/* GLASS NAV */}
          <header className="mx-4 mt-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 text-white flex items-center justify-between">
            <div className="font-bold text-lg">LOGO</div>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6">
              <a href="#mission">{t.mission}</a>
              <a href="#vision">{t.vision}</a>
              <a href="#dna">{t.dna}</a>
              <a href="#history">{t.history}</a>
            </nav>

            <div className="flex items-center gap-3">
              {/* Language switch */}
              <button
                onClick={() => setLocale(locale === "bg" ? "en" : "bg")}
                className="rounded-md border border-white/40 px-3 py-1 text-sm"
              >
                {locale === "bg" ? "EN" : "BG"}
              </button>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileNav(true)}
                className="md:hidden text-xl"
              >
                ☰
              </button>

              {/* Play button (desktop) */}
              <button
                onClick={() => {
                  setVideoOpen(true);
                  setTimeout(() => modalVideoRef.current?.play(), 100);
                }}
                className="md:block rounded-full border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                ▶ Play
              </button>
            </div>
          </header>

          {/* HERO CONTENT */}
          <main className="flex flex-1 items-center justify-center px-6 text-center text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t.title}
                <span className="block">{t.subtitle}</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl">
                {t.description}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/visit"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
                >
                  {t.ctaPrimary}
                </a>
                <a
                  href="/events"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* MOBILE NAV */}
      {mobileNav && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl">
          <button
            onClick={() => setMobileNav(false)}
            className="absolute top-6 right-6 text-3xl"
          >
            ✕
          </button>

          <a onClick={() => setMobileNav(false)} href="#mission">{t.mission}</a>
          <a onClick={() => setMobileNav(false)} href="#vision">{t.vision}</a>
          <a onClick={() => setMobileNav(false)} href="#dna">{t.dna}</a>
          <a onClick={() => setMobileNav(false)} href="#history">{t.history}</a>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <button
            onClick={() => {
              modalVideoRef.current?.pause();
              setVideoOpen(false);
            }}
            className="absolute top-26 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <video
            ref={modalVideoRef}
            src="/videos/video1.mp4"
            controls
            className="w-full max-w-5xl"
          />
        </div>
      )}
    </>
  );
}
