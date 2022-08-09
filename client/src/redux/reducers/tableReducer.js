export function tableReducer(state = [], action) {
    switch (action.type) {
        case "GET_TABLES":
            return action.payload;
        default:
            return state;
    }
}
