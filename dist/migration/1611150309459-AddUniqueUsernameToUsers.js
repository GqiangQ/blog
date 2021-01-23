"use strict";

var _interopRequireDefault = require("F:/blog/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddUniqueUsernameToUsers1611150309459 = void 0;

var _regenerator = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var AddUniqueUsernameToUsers1611150309459 = /*#__PURE__*/function () {
  function AddUniqueUsernameToUsers1611150309459() {
    (0, _classCallCheck2["default"])(this, AddUniqueUsernameToUsers1611150309459);
  }

  (0, _createClass2["default"])(AddUniqueUsernameToUsers1611150309459, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.createIndex("users", new _typeorm.TableIndex({
                  name: 'xxx',
                  columnNames: ['username'],
                  isUnique: true
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function up(_x) {
        return _up.apply(this, arguments);
      }

      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function down(_x2) {
        return _down.apply(this, arguments);
      }

      return down;
    }()
  }]);
  return AddUniqueUsernameToUsers1611150309459;
}();

exports.AddUniqueUsernameToUsers1611150309459 = AddUniqueUsernameToUsers1611150309459;