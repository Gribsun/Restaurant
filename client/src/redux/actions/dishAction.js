import axios from "axios";

export const getDishes = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3010/dishes',{ withCredentials: true })

        if (response.data) {
            dispatch({
                type: "GET_DISHES",
                payload: response.data,
            })
        }
    } catch (err) {
        console.log(err);
    }
};
