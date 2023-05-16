import { useEffect, RefObject } from "react";

const useCommandShortcut = (ref: RefObject<HTMLInputElement | null>) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ref.current!.focus();
      }
    };
    const node = ref.current;
    if (node) {
      ref.current.focus();
      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      if (node) {
        document.removeEventListener("keydown", onKeyDown);
      }
    };
  }, [ref]);
};

export default useCommandShortcut;
