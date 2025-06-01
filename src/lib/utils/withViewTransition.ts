"use client";

export function withViewTransition(callback: () => void) {
  if (document.startViewTransition) {
    document.startViewTransition(callback);
  } else {
    callback();
  }
}
