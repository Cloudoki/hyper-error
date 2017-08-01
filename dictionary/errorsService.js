const errors = {};

errors['SERV_001'] = { statusCode: 400, name: 'BadReference', msg: 'Reference does not exist' };

errors['SERV_002'] = { statusCode: 404, name: 'NotFound', msg: 'Not Found' };

errors['SERV_003'] = { statusCode: 409, name: 'Conflict', msg: 'This entity already exists' };

errors['SERV_004'] = { statusCode: 500, name: 'ServiceNotAvailable', msg: 'This message can be overrided' };

module.exports = errors;
