"use strict";

var _interopRequireDefault = require("F:/blog/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(connection);
            connection.close(); // console.log("Inserting a new user into the database...");
            // const user = new User();
            // user.firstName = "Timber";
            // user.lastName = "Saw";
            // user.age = 25;
            // await connection.manager.save(user);
            // console.log("Saved a new user with id: " + user.id);
            //
            // console.log("Loading users from the database...");
            // const users = await connection.manager.find(User);
            // console.log("Loaded users: ", users);
            //
            // console.log("Here you can setup and run express/koa/any other framework.");

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});