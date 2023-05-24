import {getUserData} from "../ActionType"
import axios from "axios";


// function getUserAction() {
//     return function(dispatch) {
//         return axios.get('https://jsonplaceholder.typicode.com/users').then(data=>{
//             dispatch({
//                 type:getUserData.GET_USERINFO,
//                payload:data.data
//             });
//         });
//     };
// }

// function getUserAction() {
//     return async function(dispatch) {
//         try {
//             const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//             dispatch({
//                 type: getUserData.GET_USERINFO,
//                 payload: response.data
//             });
//         } catch (error) {
//             return error;
//         }
//     };
// }

function getUserAction() {
    return async function(dispatch) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (response) {
                const data = await response.json();
                dispatch({
                    type: getUserData.GET_USERINFO,
                    payload: data
                });
            } else {
                throw new Error('Error fetching user data');
            }
        } catch (error) {
            return error;
        }
    };
}



export {getUserAction}