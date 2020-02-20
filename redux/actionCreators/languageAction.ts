import { LanguageTypes, GET_LANGUAGES } from './../actionTypes/language';

export function getLanguages(): LanguageTypes {
  console.log('called action creator');
  return {
    type: GET_LANGUAGES,
    payload: {
      data: [
        {lang: 'en'},
        {lang: 'tn'},
        {lang: 'ta'}
      ]
    }
  }
}