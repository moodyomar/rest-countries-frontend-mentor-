import React, {createContext,useReducer} from 'react';
import AppReducer from './Reducer';

// InitialState
const initialState = {
  theme:'light'
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider 
export const GlobalProvider = ({children}) => {
const [state,dispatch] = useReducer(AppReducer,initialState);

const switchToDark = () => {
  dispatch({
    type:'DARK_MODE_ON',
    payload:'dark'
  })
}

const switchToLight = () => {
  dispatch({
    type:'LIGHT_MODE_ON',
    payload:'light'
  })
}


return (<GlobalContext.Provider value={{
  theme:state.theme,
  switchToDark,
  switchToLight
}}>
  {children}
</GlobalContext.Provider>)
}