import React from 'react';
import { RadioButtonDefinition, dispatch } from '@red-ui/components-core';
import { ReactWidget } from './core';
import { ButtonPure, Button } from './button';

export class RadioButton extends ReactWidget {
    constructor(props) {
        super(props, RadioButtonDefinition)
        this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
    }
    onButtonClickHandler(i, nativeArgs) {
        this._dispatch('buttonClick', i, nativeArgs);
    }
    render() {
        return <div style={{ border: 'solid 1px blue' }}>
        {this.props.buttons.map((button, i) => {
            return <Button key={i} text={button + (i === this.state.selectedIndex ? ' Selected' : '')} onClick={(args) => this.onButtonClickHandler(i, args)}></Button>
        })}
    </div>

    }
}

RadioButton.defaultProps = RadioButtonDefinition.defaultProps;