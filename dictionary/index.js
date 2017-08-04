'use strict'

const assignIn = require('lodash.assignin')

module.exports = assignIn({},
  require('./errorsDatabase'),
  require('./errorsService'),
  require('./errorsUser'),
  require('./errorsOAuth2')
)
