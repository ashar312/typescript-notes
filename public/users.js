"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
const Teacher_1 = __importDefault(require("./Teacher"));
class UsersP {
    constructor() {
        this.teacher = new Teacher_1.default();
        this.student = new Student_1.default();
    }
    getTeacherStudent() {
        return {
            teacher: this.teacher.data, student: this.student.data
        };
    }
}
exports.default = UsersP;
