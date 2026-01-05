"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as ga from "@/lib/ga";

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    ga.pageview(pathname);
  }, [pathname]);

  return null;
}