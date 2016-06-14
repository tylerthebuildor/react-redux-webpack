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

```
npm test
```

To find all `*.spec.js` files and run Mocha on them supports Babel in test files.

Modify `test/pretest.js` to update the `tests/model.json` you'll be using for testing.

Create `test/credentials.json` file. It should look something like this but may differ depending on how your `test/pretest.js` file is setup.

```
{
  "email": "admin@example.com",
  "password": "mobydick",
  "filter": "You can put optional parameters here to use in the pretest script."
}
```
