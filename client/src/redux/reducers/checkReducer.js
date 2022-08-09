export function checkReducer(state = [], action) {
    switch (action.type) {
        case "GET_CHECK":
            return action.payload;
        case "ADD_DISH":
            return [action.payload, ...state];
        case "EDIT_DISH":
            return state.map(item => item.id === action.payload.id ? action.payload : item);
        case "DELETE_DISH":
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}
