export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "set" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const pageview = (url: string) => {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;

  if (!("gtag" in window)) return;   // GA not ready yet

  window.gtag("config", GA_ID, {
    page_path: url,
  });
};