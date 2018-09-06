# Hash-Ninja
Quick methods for creating hashes using the native Node crypto module.

## Quick Start

```javascript
const hasher = require('hash-ninja');

const quickHash = hasher(`some-value-to-hash`); // By default, uses SHA512 and 'hex' output.
const advancedHash = hasher(`some-value-to-hash`, `sha1`, `utf8`); // Specify a specific algorithm and 'hex' digest encoding.

const hexOutput = hasher.sha256(`some-value-to-hash`); // Quick helper methods for specific algorithms, defaults to 'hex' digest encoding.
const base64Output = hasher.md5(`some-value-to-hash`, `base64`); // Use any Node digest encoding.
```

## Useful methods

### hasher.sha512(payload[, digestEncoding]);
Output an SHA512 hash of the given payload, with optional digest encoding (defaults to 'hex').

### hasher.sha256(payload[, digestEncoding]);
Output an SHA256 hash of the given payload, with optional digest encoding (defaults to 'hex').

### hasher.sha1(payload[, digestEncoding]);
Output an SHA1 hash of the given payload, with optional digest encoding (defaults to 'hex').

### hasher.md5(payload[, digestEncoding]);
Output an MD5 hash of the given payload, with optional digest encoding (defaults to 'hex').

## Full API

### hasher(payload[, algorithm[, digestEncoding]]);
Output a hash of the given payload, with the algorithm and digest encoding optionally specified (defaults to 'sha512' and 'hex' respectively).
