const defaultProps = {
    buttons: ['Radio Button','Radio Button 2']
};

const initialState = {
    selectedIndex: 0
};

const actionCreators = {
    buttonClick: (selectedIndex) => {
        return {
            selectedIndex: selectedIndex
        };
    }
};

const eventCreators = {
    onSelectedIndexChanged: (selectedIndex) => {
        return {
            name: 'onSelectedIndexChanged',
            args: {
                selectedIndex: selectedIndex
            }
        };
    }
};

const reducers = {
    buttonClick: (state, action) => {
        let newState = state,
            events = [];

        if(state.selectedIndex !== action.selectedIndex) {
            newState = Object.assign({}, state, { selectedIndex: action.selectedIndex });
            events.push(eventCreators.onSelectedIndexChanged(newState.selectedIndex));
        };

        return {
            state: newState,
            events: events
        };        
    }
};

export const RadioButtonDefinition = {
    defaultProps: defaultProps,
    initialState: initialState,
    actionCreators: actionCreators,
    reducers: reducers
}
