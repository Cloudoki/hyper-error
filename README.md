# hyper-error

An internal error dictionary that can also convert internal errors to HTTP errors.

"Errare humanum est"


### Populating the dictionary

Add entries to the dictionary in the format:


```
errors['key1'] = { statusCode: 500, name: 'DBConnectionLost', 'msg': 'Default msg that can be overrided' };

```

- `key1` refers to the error code.
- `name`refers to a default error name. Its optional, but if it exists, must be unique since its also an error constructor for that type.
- `msg`refers to the default error message, can be overrided while creating a new error.
- `statusCode` refers to the equivalent http status code.

### Installing

Run `npm install git+ssh://git@github.com:Cloudoki/hyper-error.git`


### Usage

```
const HyperError = require('hyper-error');

let error = new HyperError.DBConnectionLost('Connection to the database was lost');

HyperError {
    code: 'key1',
    httpCode: 500,
    msg: 'Connection to the database was lost'
}

let boomError = error.toBoom();
```

which results in the following error object:

```
{ Error: Internal Server Error
    at HyperError.toBoom (/Users/miguel/Projects/hyper-error/lib/HyperError.js:20:17)
    at repl:1:5
    at sigintHandlersWrap (vm.js:22:35)
    at sigintHandlersWrap (vm.js:73:12)
    at ContextifyScript.Script.runInThisContext (vm.js:21:12)
    at REPLServer.defaultEval (repl.js:340:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:538:10)
    at emitOne (events.js:101:20)
  data: null,
  isBoom: true,
  isServer: true,
  output:
   { statusCode: 500,
     payload:
      { statusCode: 500,
        error: 'Internal Server Error',
        message: 'Connection to the database was lost' },
     headers: {} },
  reformat: [Function],
  message: 'Connection to the database was lost',
  typeof: [Function] }
  ```


Generic error creation

```
let error = new HyperError({
    code: 'DB_001',
    statusCode: 500,
    msg: 'Optional message'
});
```



Cloudoki Team 2017