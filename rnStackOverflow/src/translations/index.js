import en from './app/en/texts.json';
import ru from './app/ru/texts.json';

const languages = {
    ru: { ...ru },
    en: { ...en }
};

const prepareTranslations = (languagesStack = [ 'ru', 'en' ]) => {
    const translations = {};

    languagesStack.map(lng => {
        if (languages.hasOwnProperty(lng)) {
            translations[lng] = languages[lng];
        }
    });

    return translations;
};

export const defaultTexts = prepareTranslations();
export const defaultLocale = 'en';
