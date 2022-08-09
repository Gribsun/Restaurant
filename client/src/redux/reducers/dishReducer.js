export function dishReducer(state = [], action) {
    switch (action.type) {
        case "GET_DISHES":
            return action.payload;
        default:
            return state;
    }
}
