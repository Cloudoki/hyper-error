'use strict'

const Boom = require('boom');
const dictionary = require('../dictionary');

function HyperError(opts, msg) {

    if (!opts || !opts.code) throw new Error('Hyper error code could not be found on dictionary');
    if (!opts.statusCode) throw new Error('Hyper error has no httpCode');

    for (let key in opts) {
        this[key] = opts[key];
    }

    if (msg) this.msg = msg;
}

HyperError.prototype.toString = function() {
    return JSON.stringify(this);
};

HyperError.prototype.toBoom = function() {
    console.log(typeof parseInt(this.statusCode), typeof this.msg);
    return Boom.create(parseInt(this.statusCode), this.msg, this);
};

HyperError.isHyperError = function(errObj) {
    return !!(errObj.code && errObj.statusCode && dictionary[errObj.code]);
};

module.exports = HyperError;