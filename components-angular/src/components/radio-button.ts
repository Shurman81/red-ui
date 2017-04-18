import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularWidget } from './core';

let redUI = require('@red-ui/components-core'),
    definition = redUI.RadioButtonDefinition;

@Component({
  selector: 'red-ui-radio-button',
  template: `
    <div style="border: solid 1px blue">
      <red-ui-button 
        *ngFor="let button of buttons; let i = index" 
        [text]="button + (i === _state.selectedIndex ? ' Selected' : '')" 
        (onClick)="_dispatch('buttonClick', i)">
      </red-ui-button>
    </div>
  `,
})
export class RadioButton extends AngularWidget {
  @Input()
  selectedIndex = 0;

  @Output()
  onSelectedIndexChanged = new EventEmitter();

  constructor() {
    super(definition);
  }
}
