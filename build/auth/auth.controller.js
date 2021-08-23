"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authCtrl = {};

var User = require("../users/user.model");

var jwt = require("jsonwebtoken");

var config = require("../config");

var Role = require("../models/Role");

authCtrl.createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, password, roles, newUser, foundRoles, role, savedUser, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            _context.t0 = User;
            _context.t1 = name;
            _context.t2 = email;
            _context.next = 7;
            return User.encryptPassword(password);

          case 7:
            _context.t3 = _context.sent;
            _context.t4 = {
              name: _context.t1,
              email: _context.t2,
              password: _context.t3
            };
            newUser = new _context.t0(_context.t4);

            if (!roles) {
              _context.next = 17;
              break;
            }

            _context.next = 13;
            return Role.find({
              name: {
                $in: roles
              }
            });

          case 13:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 21;
            break;

          case 17:
            _context.next = 19;
            return Role.findOne({
              name: "moderator"
            });

          case 19:
            role = _context.sent;
            newUser.roles = [role._id];

          case 21:
            _context.next = 23;
            return newUser.save();

          case 23:
            savedUser = _context.sent;
            console.log(savedUser);
            token = jwt.sign({
              id: savedUser._id
            }, config.SECRET, {
              expiresIn: 86400 //24hrs

            });
            res.status(200).json({
              token: token
            });
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t5 = _context["catch"](0);
            console.log(_context.t5);
            return _context.abrupt("return", res.status(500).json(_context.t5));

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 29]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

authCtrl.loginUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return User.findOne({
              email: req.body.email
            }).populate("roles");

          case 3:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "User not found"
            }));

          case 6:
            _context2.next = 8;
            return User.comparePassword(req.body.password, userFound.password);

          case 8:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "Invalid password"
            }));

          case 11:
            token = jwt.sign({
              id: userFound._id
            }, config.SECRET, {
              expiresIn: 86400
            });
            res.json({
              token: token
            });
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = authCtrl; // {} [] || \\