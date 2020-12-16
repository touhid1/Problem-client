const { Update_FORM_DATA } = require("../actions/Action")
const { Delete_FORM_DATA } = require("../actions/Action")


const Reducers = (state = {}, action) => {
    switch (action.type) {
        case Update_FORM_DATA:
            return {
                ...state,
                data: action.payload
            }
            case Delete_FORM_DATA:
            return {
                ...state,
                data: action.payload
            }
            
        default:
            return state;
    }
}

export default Reducers;