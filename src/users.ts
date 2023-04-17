

import S_Login from './Student';
import T_Login from './Teacher';

export default class UsersP {
    teacher: T_Login = new T_Login()
    student: S_Login = new S_Login()

    getTeacherStudent(): { teacher: string, student: string } {
        return {
            teacher: this.teacher.data, student: this.student.data
        }
    }
}

