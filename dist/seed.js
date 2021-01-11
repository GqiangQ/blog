"use strict";

var _interopRequireDefault = require("F:/blog/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var p, a, post;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log(connection)
            // find
            console.log('造');
            p = new _Post.Post({
              title: 'post',
              content: 'content'
            });
            _context.next = 4;
            return connection.manager.save(p);

          case 4:
            a = _context.sent;
            _context.next = 7;
            return connection.manager.find(_Post.Post);

          case 7:
            post = _context.sent;
            console.log('post:', post); // create
            // const p = new Post()
            // console.log('p:', p)
            // p.title = 'post 1'
            // p.content = '我的第一篇文章'
            // const a = await connection.manager.save(p)
            // console.log('a:', a)
            // const post2 = await connection.manager.find(Post)
            // console.log("post2:",post2)

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

          case 10:
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