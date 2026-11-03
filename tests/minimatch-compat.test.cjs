const test = require('node:test');
const assert = require('node:assert/strict');
const { Linter } = require('eslint');
const react = require('eslint-plugin-react');
const match = require('../vendor/minimatch-compat');

test('minimatch bridge supports callable and named APIs with glob patterns', () => {
  assert.equal(match('src/components/App.tsx', 'src/**/*.tsx'), true);
  assert.equal(match('src/App.test.tsx', '!**/*.test.tsx'), false);
  assert.equal(match('src/App.jsx', '**/*.{ts,tsx}'), false);
  assert.equal(new match.Minimatch('**/*.tsx').match('src/App.tsx'), true);
});

test('legacy React lint rule accepts a glob ignore without crashing', () => {
  const linter = new Linter();
  const results = linter.verify('const x = <Bad_name />;', [{
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { react },
    rules: { 'react/jsx-pascal-case': ['error', { ignore: ['Foo*'] }] },
  }]);
  assert.equal(results.length, 1);
  assert.equal(results[0].ruleId, 'react/jsx-pascal-case');
});
