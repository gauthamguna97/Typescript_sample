export const GET_LANGUAGES = 'GET_LANGUAGES'

interface data {
    lang: string
}
export interface LanguageData {
    data: data[]
}
interface GetLanguagesAction {
    type: typeof GET_LANGUAGES,
    payload: LanguageData,
}
export type LanguageTypes = GetLanguagesAction;