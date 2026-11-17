import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * False on the server and during hydration, true once the component is
 * mounted in the browser. Components that animate or change layout on the
 * client render their static, server-identical version until this is true,
 * so the HTML React hydrates always matches what the server sent.
 */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
