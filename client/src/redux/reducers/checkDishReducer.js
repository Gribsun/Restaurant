export function checkDishReducer(state = [], action) {
    switch (action.type) {
        case "CHECK_DISH":
            return action.payload;
        default:
            return state;
    }
}
