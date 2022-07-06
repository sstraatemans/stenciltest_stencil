import type { Components, JSX } from "../types/components";

interface MrvlTypography extends Components.MrvlTypography, HTMLElement {}
export const MrvlTypography: {
  prototype: MrvlTypography;
  new (): MrvlTypography;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
