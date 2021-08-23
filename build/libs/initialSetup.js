"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdmin = exports.createRoles = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Role = require('../models/Role');

var User = require('../users/user.model');

var bcrypt = require('bcryptjs');

var createRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var count, values;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Role.estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new Role({
              name: "admin"
            }).save(), new Role({
              name: "moderator"
            }).save()]);

          case 8:
            values = _context.sent;
            console.log(values);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var user, roles;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return User.findOne({
              email: "admin@localhost"
            });

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return Role.find({
              name: {
                $in: ["admin", "moderator"]
              }
            });

          case 5:
            roles = _context2.sent;

            if (user) {
              _context2.next = 16;
              break;
            }

            _context2.t0 = User;
            _context2.next = 10;
            return bcrypt.hash("admin", 10);

          case 10:
            _context2.t1 = _context2.sent;
            _context2.t2 = roles.map(function (role) {
              return role._id;
            });
            _context2.t3 = {
              name: "admin",
              email: "admin@localhost",
              password: _context2.t1,
              roles: _context2.t2
            };
            _context2.next = 15;
            return _context2.t0.create.call(_context2.t0, _context2.t3);

          case 15:
            console.log("Admin User Created!");

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createAdmin() {
    return _ref2.apply(this, arguments);
  };
}(); // {} [] || \\


exports.createAdmin = createAdmin;