import {INC, DEC, RESET} from'./boilerplate'

export const countReducer = (state = 0, action) => {
    switch(action.type) {
      case INC:
        return state + 1
      case DEC:
        return state - 1
      case RESET:
        return 0
      default:
        return state
        
    }
  };



