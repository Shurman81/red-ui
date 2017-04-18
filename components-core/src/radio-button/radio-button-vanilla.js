import { VanillaWidget } from '../core/core-vanilla';

import { RadioButtonDefinition } from './radio-button-core';
import { RadioButtonRender } from './radio-button-vanilla-tmpl';

export class RadioButton extends VanillaWidget {
    constructor(props, handlers) {
        super(RadioButtonDefinition, props, handlers)
    }
    _renderCore(el, state, props, dispatch, bindings) {
        RadioButtonRender(el, state, props, dispatch, bindings);
    }
}
