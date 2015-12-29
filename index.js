'use strict';

module.exports = function (arr, options) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array');
	}

	options = options || {};
	options.flags = options.flags || 'gi';

	var str = '';
	arr.map((item, index) => {
		const hash = item.substring(0, 1) === '#' ? '' : '#';
		str += `${hash}${item}`;

		if (index !== arr.length - 1) {
			str += '|';
		}
	});

	return new RegExp(str, options.flags);
};
