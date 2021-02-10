"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Post = require("./entity/Post");

var _User = require("./entity/User");

var _Comment = require("./entity/Comment");

require("reflect-metadata");

var _typeorm = require("typeorm");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manager, user, post, comment;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manager = connection.manager;
            user = new _User.User();
            user.username = 'gqq';
            user.password = 'gqq';
            user.email = '12345@qq.com';
            _context.next = 7;
            return manager.save(user);

          case 7:
            post = new _Post.Post();
            post.user = user;
            post.title = '第一篇博客';
            post.content = '第一篇博客的内容';
            _context.next = 13;
            return manager.save(post);

          case 13:
            comment = new _Comment.Comment();
            comment.content = '第一篇博客的第一条评论';
            comment.post = post;
            comment.user = user;
            _context.next = 19;
            return manager.save(comment);

          case 19:
            connection.close();

          case 20:
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