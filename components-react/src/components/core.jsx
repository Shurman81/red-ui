import React from 'react';
import { dispatch } from '@red-ui/components-core';

export class ReactWidget extends React.Component {
    constructor(props, definition) {
        super(props)
        this._definition = definition;
        this.state = definition.initialState;
    }
    _emitEvents(events, nativeArgs) {
        if(events) {
            events.forEach(event => {
                let handler = this.props[event.name];
                if(handler) {
                    handler(event.args, nativeArgs);
                }
            });
        }
    }
    _dispatch(actionName, actionArgs, nativeArgs) {
        let reducerResult = dispatch(this.state, this._definition, actionName, actionArgs);
        this.setState(reducerResult.state);
        this._emitEvents(reducerResult.events, nativeArgs);
    }
}
