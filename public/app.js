"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let users = {
    name: 'ashar',
    age: 10,
    address: 2,
    getName: function () {
        return 'ashar';
    }
};
let arr = ['ashar', 'ashar', 'ashar'];
let a = 2;
let b = true;
let c = 'as';
//union - only string and number are allowed
let unionData;
unionData = 2;
unionData = 'ashar';
users.getName();
function add(num1, num2) {
    return num2 ? num1 + num2 : num1;
}
console.log(add(2));
let usersarr = [];
usersarr.push({
    name: 'ashar',
    age: 2,
    address: 2,
    getName: function () {
        return 'ashar';
    }
});
class Users {
    constructor(_name) {
        this.name = 'ashaq';
        if (_name) {
            this.name = _name;
        }
    }
    getName() {
        return 'ashar';
    }
    getNameVoid() {
        console.log('chal gaya');
    }
}
let a1 = new Users('ashar');
let a2 = new Users();
a1.getName();
const users_1 = __importDefault(require("./users"));
let usersP = new users_1.default();
console.log(usersP.getTeacherStudent());
function usersA(data) {
    return data;
}
var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thu"] = 3] = "thu";
    Days[Days["fri"] = 4] = "fri";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
let whichDay;
whichDay = Days.wed;
