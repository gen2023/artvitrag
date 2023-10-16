import { combineReducers } from "redux";
import {createReducer} from '@reduxjs/toolkit';
import * as actions from "./language-actions";

const languageReducer=createReducer('Ua',{
    [actions.languageRu.type]:(value,{payload})=> value='Ru',
    [actions.languageEn.type]:(value,{payload})=> value='En',
    [actions.languageUa.type]:(value,{payload})=> value='Ua',
});

export default combineReducers({language:languageReducer,})