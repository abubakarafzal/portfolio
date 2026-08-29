import {useEffect, useState} from "react";

/**
 * True only for devices with a precise pointer (mouse/trackpad). Gates the
 * custom cursor so touch devices never pay for it.
 */
export default function usePointerFine() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (hover: hover)");
    const update = () => setFine(query.matches);

    update();

    // Safari < 14 only supports the deprecated listener API.
    if (query.addEventListener) {
      query.addEventListener("change", update);
      return () => query.removeEventListener("change", update);
    }
    query.addListener(update);
    return () => query.removeListener(update);
  }, []);

  return fine;
}
