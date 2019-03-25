
// stockpricecomponent: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './stockpricecomponent.core.js';
import { COMPONENTS } from './stockpricecomponent.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
