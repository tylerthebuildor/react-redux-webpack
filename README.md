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

**Still need to make this**

```
npm build
```

## Tests

**Mocha, Chai, Enzyme**

```
npm test
```

The above command will find all `*.spec.js` files and run Mocha on them. Supports Babel in test files.

Modify `test/pretest.js` to update the `tests/model.json` you'll be using for testing.

Create `test/credentials.json` file. It should look something like the snippet below but may differ depending on how your `test/pretest.js` file is setup.

Copy the snippet below into a new `test/credentials.json` file and run `npm test` for an example of how testing is setup.

```
{
  "url": "https://api.github.com",
  "user": "tylerbuchea",
  "email": "",
  "password": "",
  "filter": "You can put optional parameters here to use in the pretest script."
}
```
