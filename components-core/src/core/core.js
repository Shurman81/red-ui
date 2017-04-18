export const dispatch = (state, definition, actionName, actionArgs) => {
    let reducer = definition.reducers[actionName],
        createAction = definition.actionCreators[actionName];

    return  reducer(state, createAction(actionArgs));
};