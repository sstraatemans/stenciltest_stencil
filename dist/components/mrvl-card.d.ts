import type { Components, JSX } from "../types/components";

interface MrvlCard extends Components.MrvlCard, HTMLElement {}
export const MrvlCard: {
  prototype: MrvlCard;
  new (): MrvlCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
