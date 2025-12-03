"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top instantly when pathname changes (works better with page transitions)
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    useEffect(() => {
        // Scroll to top on page load/refresh
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return null;
}
