import type { Components, JSX } from "../types/components";

interface MrvlInput extends Components.MrvlInput, HTMLElement {}
export const MrvlInput: {
  prototype: MrvlInput;
  new (): MrvlInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
