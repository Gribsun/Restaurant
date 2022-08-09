import { configureStore } from "@reduxjs/toolkit";
import { checkReducer } from "./reducers/checkReducer";
import { tableReducer } from "./reducers/tableReducer";
import { dishReducer } from "./reducers/dishReducer";
import { checkDishReducer } from "./reducers/checkDishReducer"

// const initState = {
//     check: {
//         sLoading: false,
//         value: [],
//         error: null,
//     },
//     table: {
//         sLoading: false,
//         value: [],
//         error: null,
//     },
// };

const store = configureStore({
    reducer: {
        check: checkReducer,
        table: tableReducer,
        dish: dishReducer,
        checkDish: checkDishReducer
    },
});

export default store;
