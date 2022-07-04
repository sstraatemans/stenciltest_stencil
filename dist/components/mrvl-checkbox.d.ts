import type { Components, JSX } from "../types/components";

interface MrvlCheckbox extends Components.MrvlCheckbox, HTMLElement {}
export const MrvlCheckbox: {
  prototype: MrvlCheckbox;
  new (): MrvlCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
