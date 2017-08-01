'use strict'

const dictionary = require('../dictionary');
const HyperError = require('./HyperError');


const errors = HyperError;

for (let error in dictionary) {
    if (dictionary[error].name) {
        dictionary[error].code = error;
        errors[dictionary[error].name] = HyperError.bind(null, dictionary[error]);
    }
}

module.exports = errors;