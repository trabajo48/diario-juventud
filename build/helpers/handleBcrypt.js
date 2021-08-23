"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcrypt = require('bcryptjs');

var encrypt = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(textPlain) {
    var hash;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bcrypt.hash(textPlain, 10);

          case 2:
            hash = _context.sent;
            return _context.abrupt("return", hash);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function encrypt(_x) {
    return _ref.apply(this, arguments);
  };
}();

var compare = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(passwordPlain, hashPassword) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return bcrypt.compare(passwordPlain, hashPassword);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function compare(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  encrypt: encrypt,
  compare: compare
}; // {} [] || \\