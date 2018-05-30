# BasicAuth

Middleware for Calvin which provides a simple basicauth login prompt on requests.

## Install

`npm install @calvin/basicauth`

## Usage

``` js
const basicauth = require('@calvin/basicauth');
app.use(basicauth('John Calvin', 'WCF'));
```
