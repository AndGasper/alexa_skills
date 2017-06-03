/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/


'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            HOROSCOPE: {
                "Aries": "You will be angry",
                "Taurus": "Toroids",
                "Gemini": "Something punny about gems",
                "Cancer": "Well, that's just morbid",
                "Leo": "The lion",
                "Pisces": "You're feeling like seafood",
                "Virgo": "You will experience vertigo",
                "Libra": "You mean library",
                "Scorpio": "Scorpions",
                "Sagittarius": "Hmmm",
                "Capricorn": "Unicorn?",
                "Aquarius": "Aquaman"
            },
            SKILL_NAME: 'Sarcastic Horoscope',
            GET_HOROSCOPE_MESSAGE: "Here is your horoscope- ",
            HELP_MESSAGE: 'You can say',
            HELP_REPROMPT: 'Still does not matter',
            STOP_MESSAGE: 'See ya.'
        },

    }
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('HELP_MESSAGE');
    },
    'GetHoroscope': function () {
        // Respond to someone asking for his/her horoscope
        const requestInfo = this.event.request.intent.slots;
        const sign = requestInfo.Sign.value;
        const date =  (!requestInfo.Date.value) ? ('today') : (requestInfo.Date.value); // If the Date value is undefined, just make it today, else make it when they said
        const horoscope = this.t(`HOROSCOPE.${sign}`);
        const speechOutput = this.t('GET_HOROSCOPE_MESSAGE') + `for ${date}: ${sign} -  ${horoscope} ` ; // assuming t = minified version of translation
        this.emit(':tell', speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
