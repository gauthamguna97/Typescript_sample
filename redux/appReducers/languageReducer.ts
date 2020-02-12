import { LanguageTypes, GET_LANGUAGES } from './../actionTypes/language';

export function languageReducer(state = {} , action: LanguageTypes) {
  switch (action.type) {
    case GET_LANGUAGES:
      return action.payload || state
    default:
      return state
  }
}