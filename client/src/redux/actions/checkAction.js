import axios from "axios";

export const getCheck = (tableId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3010/check/${tableId}`,
            { withCredentials: true })

        if (response.data) {
            dispatch({
                type: "GET_CHECK",
                payload: response.data,
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const addDish = (id, count, tableId) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3010/check',
            {id, count, tableId},
            {withCredentials: true}
        );
        dispatch({
            type: 'ADD_DISH',
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteDish = (tableId) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:3010/check/${tableId}`,
            {withCredentials: true}
        );
        dispatch({
            type: 'DELETE_DISH',
            payload: tableId,
        });
    } catch (err) {
        console.log(err);
    }
}
