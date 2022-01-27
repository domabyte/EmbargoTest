import React,{Children, createContext,useContext,useReducer} from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer,initialState})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>{Children}</StateContext.Provider>
);
export const useStateValue = ()=> useContext(StateContext);