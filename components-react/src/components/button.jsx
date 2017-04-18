import React from 'react';
import { ButtonDefinition, dispatch } from '@red-ui/components-core';
import { ReactWidget } from './core';

export const ButtonPure = (props) => {
    return <div style={ {border: 'solid 1px', borderColor: props.clicked ? 'green' : 'red' } } onClick={props.onClick}>
        {props.text} { props.clicked ? 'Clicked' : ''}
    </div>
}

export class Button extends ReactWidget {
    constructor(props) {
        super(props, ButtonDefinition)
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(nativeArgs) {
        this._dispatch('click', {}, nativeArgs);
    }
    render() {
        return <ButtonPure text={this.props.text} clicked={this.state.clicked} onClick={this.onClickHandler}></ButtonPure>
    }
}

Button.defaultProps = ButtonDefinition.defaultProps;