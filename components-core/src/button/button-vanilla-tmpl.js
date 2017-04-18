export const ButtonRender = (el, state, props, dispatch, bindings) => {
    let newDiv = document.createElement('div');
    newDiv.style.borderWidth = '1px';
    newDiv.style.borderStyle = 'solid';

    let borderColorBinding = {
        check: function(state, props) {
            if(this._clicked === undefined || this._clicked !== state.clicked) {
                newDiv.style.borderColor = state.clicked ? 'green' : 'red';
                this._clicked = state.clicked;
            }
        }
    }

    bindings.push(borderColorBinding);
    borderColorBinding.check(state, props);
    
    newDiv.addEventListener('click', nativeArgs => {
        dispatch("click", {}, nativeArgs);
    });

    var newContent = document.createTextNode(props.text);
    newDiv.appendChild(newContent);

    let textBinding = {
        check: function(state, props) {
            if(this._text === undefined || this._text !== props.text) {
                newContent.nodeValue = props.text;
                this._text = props.text;
            }
        }
    }
    bindings.push(textBinding);

    el.appendChild(newDiv);
}
