import { VanillaWidget } from '../core/core-vanilla';

import { ButtonDefinition } from './button-core';
import { ButtonRender } from './button-vanilla-tmpl';

export class Button extends VanillaWidget {
    constructor(props, handlers) {
        super(ButtonDefinition, props, handlers)
    }
    _renderCore(el, state, props, dispatch, bindings) {
        ButtonRender(el, state, props, dispatch, bindings);
    }
}