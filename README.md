# React Redux Webpack Generator

## Installation

```
npm install
```

## Serve

**Open browser to [http://localhost:3100](http://localhost:3100)**

```
npm start
```

## Build

**Places output in `./dist`**

```
npm run build
```

## Tests

**Mocha, Chai, Enzyme**

```
npm test
```

The above command will find all `*.spec.js` files and run Mocha on them. Supports Babel in test files.

To make `npm test` work you first have to copy the snippet below into a new `test/credentials.json` file.

```
{
  "url": "https://api.github.com",
  "user": "tylerbuchea",
  "email": "",
  "password": "",
  "filter": "You can put optional parameters here to use in the pretest script."
}
```
