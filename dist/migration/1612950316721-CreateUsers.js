"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsers1612950316721 = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var CreateUsers1612950316721 = /*#__PURE__*/function () {
  function CreateUsers1612950316721() {
    (0, _classCallCheck2["default"])(this, CreateUsers1612950316721);
  }

  (0, _createClass2["default"])(CreateUsers1612950316721, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryRunner.createTable(new _typeorm.Table({
                  name: 'users',
                  columns: [{
                    name: 'id',
                    isGenerated: true,
                    type: 'int',
                    generationStrategy: 'increment',
                    isUnique: true,
                    isPrimary: true
                  }, {
                    name: 'username',
                    type: 'varchar'
                  }, {
                    name: 'password',
                    type: 'varchar'
                  }, {
                    name: 'email',
                    type: 'varchar'
                  }, {
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: false,
                    "default": 'now()'
                  }, {
                    name: 'updatedAt',
                    type: 'timestamp',
                    isNullable: false,
                    "default": 'now()'
                  }]
                }));

              case 1:
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
                return _context2.abrupt("return", queryRunner.dropTable('users'));

              case 1:
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
  return CreateUsers1612950316721;
}();

exports.CreateUsers1612950316721 = CreateUsers1612950316721;