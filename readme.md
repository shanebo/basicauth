# BasicAuth

Middleware for Dylan which provides a simple basicauth login prompt on requests.

## Install

`npm install @dylan/basicauth`

## Usage

``` js
const basicauth = require('@dylan/basicauth');

app.use(basicauth({
  user: 'John Calvin',
  password: 'WCF'
}));
```
