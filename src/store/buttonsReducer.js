import { DISABLE, ENABLE } from "./boilerplate";

export const buttonsReducer = (state = {disabled: false}, action) => {
    switch(action.type) {
      case DISABLE:
        return {...state, disabled: true}
      case ENABLE:
        return {...state, disabled: false}
      default:
        return state
        
    }
  };