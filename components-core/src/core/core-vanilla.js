import { dispatch } from './core';

export class VanillaWidget {
    constructor(definition, props = {}, handlers = {}) {
        this._definition = definition;
        this._state = Object.assign({}, definition.initialState);
        this._props = Object.assign({}, definition.defaultProps, props);
        this._dispatch = this._dispatch.bind(this);
        this._update = this._update.bind(this);
        this._bindings = [];
    }
    _emitEvents(events, nativeArgs) {
        if(events) {
            events.forEach(event => {
                let handler = this._props[event.name];
                if(handler) {
                    handler(event.args, nativeArgs);
                }
            });
        }
    }
    _dispatch(actionName, actionArgs, nativeArgs) {
        let reducerResult = dispatch(this._state, this._definition, actionName, actionArgs);
        this._state = reducerResult.state;
        this._emitEvents(reducerResult.events, nativeArgs);
        this._update();
    }
    _update() {
        this._bindings.forEach(binding => {
            binding.check(this._state, this._props);
        });
    }
    setProps(props) {
        Object.assign(this._props, props);
        this._update();
    }
    render(el) {
        this._renderCore(el, this._state, this._props, this._dispatch, this._bindings);
    }
}
