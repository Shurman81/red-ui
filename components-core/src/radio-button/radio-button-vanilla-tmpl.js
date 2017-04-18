import { Button } from '../button/button-vanilla';

export const RadioButtonRender = (el, state, props, dispatch, bindings) => {

    let newDiv = document.createElement('div');
    newDiv.style.borderWidth = '1px';
    newDiv.style.borderStyle = 'solid';
    newDiv.style.borderColor = 'blue';
    el.appendChild(newDiv);

    let buttons = [];

    props.buttons.forEach((btnText, index) => {
        let btn = new Button({
            text: btnText,
            onClick: (args) => { 
                dispatch("buttonClick", index);
            }
        });
        btn.render(newDiv);
        buttons.push(btn);
    });

    let selectedIndexBinding = {
        check: function(state, props) {
            if(this._selectedIndex === undefined || this._selectedIndex !== state.selectedIndex) {
                buttons.forEach((btn, index) => {
                    buttons[index].setProps({ text: 'Radio Button ' + index + (state.selectedIndex === index ? ' Selected' : '') });
                });
                this._selectedIndex = state.selectedIndex;
            }
        }
    }

    bindings.push(selectedIndexBinding);
    selectedIndexBinding.check(state, props);    
}
