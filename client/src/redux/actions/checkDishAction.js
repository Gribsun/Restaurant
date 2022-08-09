import axios from "axios";

export const checkDish = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:3010/check/${id}`,
            {},
            {withCredentials: true}
        );
        dispatch({
            type: 'CHECK_DISH',
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
}
