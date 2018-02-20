const errors = {}

errors['OAUTH2_001'] = { statusCode: 401, name: 'InvalidPassword', msg: 'The password did not match.' }

errors['OAUTH2_002'] = { statusCode: 404, name: 'NotFound', msg: 'Not Found.' }

errors['OAUTH2_003'] = { statusCode: 500, name: 'HashFailed', msg: 'Failed to generate hash.' }

errors['OAUTH2_004'] = { statusCode: 500, name: 'Internal', msg: 'Internal Server Error.' }

errors['OAUTH2_005'] = { statusCode: 401, name: 'ExpiredToken', msg: 'Token has expired.' }

errors['OAUTH2_006'] = { statusCode: 500, name: 'TokensNotGenerated', msg: 'Failed to generate tokens.' }

errors['OAUTH2_007'] = { statusCode: 500, name: 'ExchangeFailed', msg: 'Failed to exchage for a token.' }

errors['OAUTH2_008'] = { statusCode: 400, name: 'InvalidGrant', msg: 'Invalid grant for the request.' }

errors['OAUTH2_009'] = { statusCode: 400, name: 'InvalidRedirectURI', msg: 'The redirect URI did not match.' }

errors['OAUTH2_010'] = { statusCode: 400, name: 'InvalidSecret', msg: 'The secret did not match the client.' }

errors['OAUTH2_011'] = { statusCode: 500, name: 'SaveFailed', msg: 'Failed to save the data.' }

errors['OAUTH2_012'] = { statusCode: 400, name: 'InvalidResponseType', msg: 'Invalid response type for the request.' }

errors['OAUTH2_013'] = { statusCode: 400, name: 'ExpiredCode', msg: 'Code token has expired.' }

errors['OAUTH2_014'] = { statusCode :401, name: 'Unauthorized', msg: 'Authentication failed or not provided.' }

errors['OAUTH2_015'] = { statusCode :400, name: 'BadRequest', msg: 'the request contains malformed syntax.' }

module.exports = errors
