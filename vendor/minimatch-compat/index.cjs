// Older ESLint plugins call require('minimatch') directly; current versions use
// named exports. Both interfaces delegate matching to the patched implementation.
const implementation = require('minimatch-patched');
module.exports = Object.assign(implementation.minimatch, implementation);
