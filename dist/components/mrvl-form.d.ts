import type { Components, JSX } from "../types/components";

interface MrvlForm extends Components.MrvlForm, HTMLElement {}
export const MrvlForm: {
  prototype: MrvlForm;
  new (): MrvlForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
