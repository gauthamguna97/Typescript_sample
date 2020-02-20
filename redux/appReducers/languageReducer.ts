import { LanguageTypes, GET_LANGUAGES, LanguageData } from './../actionTypes/language';

export function languageReducer(state: LanguageData = { data: [] } , action: LanguageTypes) {
  switch (action.type) {
    case GET_LANGUAGES:
      return action.payload || state
    default:
      return state
  }
}