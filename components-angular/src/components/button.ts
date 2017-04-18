import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularWidget } from './core';

let redUI = require('@red-ui/components-core'),
    definition = redUI.ButtonDefinition;

@Component({
  selector: 'red-ui-button',
  template: `
    <div style="border: solid 1px" 
         [style.border-color]="_state.clicked ? 'green' : 'red'" 
         (click)="_dispatch('click', {}, $event)">
      {{text}} {{_state.clicked ? 'Clicked' : ''}}
    </div>
  `,
})
export class Button extends AngularWidget {
  @Input()
  text: string;

  @Output()
  onClick = new EventEmitter();
  @Output()
  onClickedChanged = new EventEmitter();

  constructor() {
    super(definition);
  }
}
