import {getUserData} from "../ActionType";

const initialState = {
    numOfData : 0
};

export const userReducer = (state = initialState,actions) => { // default asian & argument
    switch(actions.type){
        case getUserData.GET_USERINFO:
            return{
                ...state,
                fetchData:actions.payload
            }
            default:
                return state

    }
     
}