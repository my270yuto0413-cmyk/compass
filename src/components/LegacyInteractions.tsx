"use client";

import { useEffect } from "react";

export function LegacyInteractions() {
  useEffect(() => {
    void import("../legacy-interactions");
  }, []);

  return null;
}
