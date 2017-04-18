const defaultProps = {
    text: ''
};

const initialState = {
    clicked: false
};

const actionCreators = {
    click: () => {
        return;
    }
};

const eventCreators = {
    onClick: () => {
        return {
            name: 'onClick',
            args: undefined
        };
    },
    onClickedChanged: (clicked) => {
        return {
            name: 'onClickedChanged',
            args: {
                clicked: clicked
            }
        };
    }
};

const reducers = {
    click: (state, action) => {
        let newState = Object.assign({}, state, { clicked: true }),
            events = [];

        events.push(eventCreators.onClick());
        if(state.clicked !== newState.clicked) {
            events.push(eventCreators.onClickedChanged(newState.clicked));
        }
        
        return {
            state: newState,
            events: events
        };
    }
};

export const ButtonDefinition = {
    defaultProps: defaultProps,
    initialState: initialState,
    actionCreators: actionCreators,
    reducers: reducers
}
