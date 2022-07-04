import type { Components, JSX } from "../types/components";

interface MrvlButton extends Components.MrvlButton, HTMLElement {}
export const MrvlButton: {
  prototype: MrvlButton;
  new (): MrvlButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
