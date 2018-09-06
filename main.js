'use strict';

/*
 * HASH NINJA
 * Quick methods for creating hashes using the native Node crypto module.
 */

const crypto = require(`crypto`);

/*
 * Returns a hash of the payload using the given algorithm and encoding.
 */
function hashNinja (payload, algorithm = `sha512`, encoding = `hex`) {

	const algo = crypto.createHash(algorithm);

	algo.update(payload);
	return algo.digest(encoding);

}

/*
 * Returns an MD5 hash of the payload.
 */
hashNinja.md5 = function md5 (payload, encoding = void (0)) {
	return hashNinja(payload, `md5`, encoding);
};

/*
 * Returns an SHA256 hash of the payload.
 */
hashNinja.sha256 = function sha256 (payload, encoding = void (0)) {
	return hashNinja(payload, `sha256`, encoding);
};

/*
 * Returns an SHA512 hash of the payload.
 */
hashNinja.sha512 = function sha512 (payload, encoding = void (0)) {
	return hashNinja(payload, `sha512`, encoding);
};

/*
 * Exported methods.
 */
module.exports = hashNinja;
