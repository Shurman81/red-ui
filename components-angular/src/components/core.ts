let redUI = require('@red-ui/components-core'),
    dispatch = redUI.dispatch;

export class AngularWidget {
  _state: Object;
  _definition: Object;
  constructor(definition: any) {
    this._state = Object.assign({}, definition.initialState);
    Object.assign(this, definition.defaultProps);
    this._definition = definition;
    this._dispatch = this._dispatch.bind(this);
  }
  _emitEvents(events: [any], nativeArgs: any) {
      if(events) {
          events.forEach(event => {
            this[event.name].next(event.args, nativeArgs);
          });
      }
  }
  _dispatch(actionName: string, actionArgs: any, nativeArgs: any) {
      let reducerResult = dispatch(this._state, this._definition, actionName, actionArgs);
      this._state = reducerResult.state;
      this._emitEvents(reducerResult.events, nativeArgs);
  }  
}
