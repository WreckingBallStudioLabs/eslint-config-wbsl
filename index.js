module.exports = {
  'extends': 'eslint:recommended',
  'parserOptions': {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'rules': {
    // eslint:recommended overrides
    'no-console': 0,
    'no-debugger': 0,
    // best practices
    'array-callback-return': 2,
    'default-case': 2,
    'eqeqeq': 2,
    'no-else-return': 2,
    'no-eval': 2,
    'no-extra-bind': 2,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-multi-spaces': 2,
    'no-new': 2,
    'no-new-wrappers': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-useless-call': 2,
    'no-useless-return': 2,
    'radix': 2,
    'vars-on-top': 2,
    'wrap-iife': 2,
    // node.js and commonjs
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    // stylistic issues
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': 2,
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'camelcase': 2,
    'comma-dangle': 2,
    'comma-style': 2,
    'consistent-this': [2, 'self'],
    'func-call-spacing': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'max-depth': 2,
    'max-len': [2, 120],
    'new-cap': 2,
    'new-parens': 2,
    'newline-after-var': 2,
    'no-bitwise': 2,
    'no-lonely-if': 2,
    'no-mixed-operators': 2,
    'no-multiple-empty-lines': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'one-var-declaration-per-line': 2,
    'quotes': [2, 'single', {'allowTemplateLiterals': true}],
    'semi': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    // ecmascript 6
    'arrow-body-style': [2, 'always'],
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-template': 2
  }
};
