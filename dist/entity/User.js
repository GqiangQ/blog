"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

// import {getDatabaseConnection} from '../../lib/getDatabaseConnection';
// import md5 from 'md5';
// import _ from 'lodash';
var User = (_dec = (0, _typeorm.Entity)('users'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('increment'), _dec3 = (0, _typeorm.Column)('varchar'), _dec4 = (0, _typeorm.Column)('varchar'), _dec5 = (0, _typeorm.Column)('varchar'), _dec6 = (0, _typeorm.CreateDateColumn)(), _dec7 = (0, _typeorm.UpdateDateColumn)(), _dec8 = (0, _typeorm.OneToMany)('Post', 'user'), _dec9 = (0, _typeorm.OneToMany)('Comment', 'user'), _dec(_class = (_class2 = (_temp = function User() {
  (0, _classCallCheck2["default"])(this, User);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "username", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "password", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "email", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "createdAt", _descriptor5, this);
  (0, _initializerDefineProperty2["default"])(this, "updatedAt", _descriptor6, this);
  (0, _initializerDefineProperty2["default"])(this, "posts", _descriptor7, this);
  (0, _initializerDefineProperty2["default"])(this, "comments", _descriptor8, this);
} // errors = {
//   username: [] as string[],
//   password: [] as string[],
//   passwordConfirmation: [] as string[]
// };
// password: string;
// passwordConfirmation: string;
// async validate() {
//   if (this.username.trim() === '') {
//     this.errors.username.push('不能为空');
//   }
//   if (!/[a-zA-Z0-9]/.test(this.username.trim())) {
//     this.errors.username.push('格式不合法');
//   }
//   if (this.username.trim().length > 42) {
//     this.errors.username.push('太长');
//   }
//   if (this.username.trim().length <= 3) {
//     this.errors.username.push('太短');
//   }
//   const found = await (await getDatabaseConnection()).manager.find(
//     User, {username: this.username});
//   if (found.length > 0) {
//     this.errors.username.push('已存在，不能重复注册');
//   }
//   if (this.password === '') {
//     this.errors.password.push('不能为空');
//   }
//   if (this.password !== this.passwordConfirmation) {
//     this.errors.passwordConfirmation.push('密码不匹配');
//   }
// }
// hasErrors() {
//   return !!Object.values(this.errors).find(v => v.length > 0);
// }
// @BeforeInsert()
// generatePasswordDigest() {
//   this.passwordDigest = md5(this.password);
// }
// toJSON() {
//   return _.omit(this, ['password', 'passwordConfirmation', 'passwordDigest', 'errors']);
// }
, _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "email", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createdAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "updatedAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "posts", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "comments", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.User = User;