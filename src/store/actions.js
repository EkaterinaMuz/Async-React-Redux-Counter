import {INC, DEC, RESET, DISABLE, ENABLE} from './boilerplate';

export const inc = {type: INC};

export const dec = {type: DEC};

export const reset = {type: RESET};

export const disable = {type: DISABLE};

export const enable = {type: ENABLE};

export function asyncInc() {
    return function(dispatch) {
        dispatch(disable);
        setTimeout(() => {
            dispatch(inc)
            dispatch(enable)
        }, 1500);
    };
};


