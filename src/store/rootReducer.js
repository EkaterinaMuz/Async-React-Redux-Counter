import { configureStore} from "@reduxjs/toolkit";
import { devToolsEnhancer } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from "./countReducer";
import { buttonsReducer } from "./buttonsReducer";

const rootReducer = combineReducers(
    {count: countReducer,
    buttons: buttonsReducer}
);

export const store = configureStore({reducer: rootReducer}, devToolsEnhancer(applyMiddleware(thunk)));