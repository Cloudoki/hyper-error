const errors = {};

errors['USR_003'] = { statusCode: 403, name: 'UserInvalidCredentials', msg: 'This message can be overrided' };

errors['USR_004'] = { statusCode: 401, name: 'ExpiredToken', msg: 'Recovery token has expired.' };

module.exports = errors;
