export default {
    txt_title: 'Hinzufügen',

    txt_name: 'Name',
    txt_email: 'Email',
    txt_url: 'Url',
    txt_comnt: 'Kommentar',

    txt_defaultName: '',
    txt_defaultEmail: '',
    txt_defaultUrl: 'https://',
    txt_defaultComnt: '',

    txt_commitBtn: 'Registrieren',
    txt_commitOk: 'Dein Vorschlag wurde registriert.',
    txt_commitFail: 'Es ist ein Fehler aufgetreten. Bitte versuche es erneut.',

    txt_wrongInput: 'Ungültige Eingabe bei:'
};

export const pattern = {
    pattern_name: "^[\\w'\\-,.]*[^_!¡?÷?¿\\/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]*$",
    pattern_email: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
    pattern_url: '^(https://)[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.chayns.net(/*)?'
};
