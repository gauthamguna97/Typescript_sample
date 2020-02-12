export const GET_LANGUAGES = 'GET_LANGUAGES'

interface GetLanguagesAction {
    type: typeof GET_LANGUAGES,
    payload: object,
}
export type LanguageTypes = GetLanguagesAction;