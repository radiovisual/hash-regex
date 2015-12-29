import test from 'ava';
import fn from './index.js';

test('expect an array', t => {
	t.throws(() => {
		fn('string');
	}, 'Expected an array');
});

test('should convert an array to a RegExp', t => {
	var reg = fn(['1', '2']);
	t.true(reg.test && true);
	t.is(reg.toString(), '/#1|#2/gi');
});

test('should allow hashtags', t => {
	var reg = fn(['#tag1', '#tag2', 'tag3']);
	t.is(reg.toString(), '/#tag1|#tag2|#tag3/gi');
});

test('allow override flags', t => {
	var reg = fn(['#tag1', '#tag2', 'tag3'], {flags: 'im'});
	t.is(reg.toString(), '/#tag1|#tag2|#tag3/im');
});
