> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

## Installation

```
$ npm install --save-dev eslint eslint-config-wbsl
```


## Usage

Once the `eslint-config-wbsl` package is installed, you can use it by specifying `wbsl` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "wbsl",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

MIT © Wrecking Ball Studio + Labs
