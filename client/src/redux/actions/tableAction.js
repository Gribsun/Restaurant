import axios from "axios";

export const getTables = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3010/tables',{ withCredentials: true })

        if (response.data) {
            dispatch({
                type: "GET_TABLES",
                payload: response.data,
            })
        }
    } catch (err) {
        console.log(err);
    }
};
