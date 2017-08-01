const Boom = require('boom');
const dictionary = require('../dictionary');

function HyperError(opts, msg) {
    if (msg) this.msg = msg;

    if (!opts || !opts.code) throw new Error('Hyper error code could not be found on dictionary');
    if (!opts.statusCode) throw new Error('Hyper error has no httpCode');

    for (let key in opts) {
        this[key] = opts[key];
    }
}

HyperError.prototype.toString = function() {
    return JSON.stringify(this);
};

HyperError.prototype.toBoom = function() {
    return Boom.create(this.statusCode, this.message);
};

HyperError.isHyperError = function(errObj) {
    return !!(errObj.code && errObj.statusCode && dictionary[errObj.code]);
};

module.exports = HyperError;