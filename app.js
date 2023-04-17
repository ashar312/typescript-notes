"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = {
    name: 'ashar',
    age: 10,
    address: 2,
    getName: function () {
        return 'ashar';
    }
};
var arr = ['ashar', 'ashar', 'ashar'];
var a = 2;
var b = true;
var c = 'as';
//union - only string and number are allowed
var unionData;
unionData = 2;
unionData = 'ashar';
users.getName();
function add(num1, num2) {
    return num2 ? num1 + num2 : num1;
}
console.log(add(2));
var usersarr = [];
usersarr.push({
    name: 'ashar',
    age: 2,
    address: 2,
    getName: function () {
        return 'ashar';
    }
});
var Users = /** @class */ (function () {
    function Users(_name) {
        this.name = 'ashaq';
        if (_name) {
            this.name = _name;
        }
    }
    Users.prototype.getName = function () {
        return 'ashar';
    };
    Users.prototype.getNameVoid = function () {
        console.log('chal gaya');
    };
    return Users;
}());
var a1 = new Users('ashar');
var a2 = new Users();
a1.getName();
var users_1 = require("./users");
var usersP = new users_1.default();
console.log(usersP.getTeacherStudent());
function usersA(data) {
    return data;
}
