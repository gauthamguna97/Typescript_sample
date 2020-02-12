import { languageReducer } from "./appReducers/languageReducer";
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  language: languageReducer
})
export type RootState = ReturnType<typeof rootReducer>