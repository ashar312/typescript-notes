"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var UsersP = /** @class */ (function () {
    function UsersP() {
        this.teacher = new Teacher_1.default();
        this.student = new Student_1.default();
    }
    UsersP.prototype.getTeacherStudent = function () {
        return {
            teacher: this.teacher.data, student: this.student.data
        };
    };
    return UsersP;
}());
exports.default = UsersP;
