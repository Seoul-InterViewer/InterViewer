"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { withViewTransition } from "@/lib/utils/withViewTransition";

export function useRouterModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    withViewTransition(() => setIsOpen(true));
  }, []);
  const close = useCallback(() => {
    withViewTransition(() => {
      setIsOpen(false);
      router.back();
    });
  }, [router]);

  return { isOpen, open, close };
}
