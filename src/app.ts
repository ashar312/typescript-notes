export
    interface usersType {
    name: string,
    age: number,
    address: any,
    getName: () => string;
}

let users: usersType = {
    name: 'ashar',
    age: 10,
    address: 2,
    getName: function () {
        return 'ashar'
    }
}

let arr: string[] = ['ashar', 'ashar', 'ashar'];
let a: number = 2;
let b: boolean = true;
let c: string = 'as';

//union - only string and number are allowed
let unionData: string | number;
unionData = 2;
unionData = 'ashar'

users.getName();

function add(num1: number, num2?: number) {
    return num2 ? num1 + num2 : num1;
}

console.log(add(2));

let usersarr: usersType[] = [];

usersarr.push({
    name: 'ashar',
    age: 2,
    address: 2,
    getName: function () {
        return 'ashar'
    }
})

class Users {
    name: string = 'ashaq'
    constructor(_name?: string) {
        if (_name) {
            this.name = _name
        }
    }

    getName(): string {
        return 'ashar'
    }
    getNameVoid(): void {
        console.log('chal gaya')
    }
}

let a1 = new Users('ashar');
let a2 = new Users();
a1.getName();

import UsersP from './users';
let usersP = new UsersP();
console.log(usersP.getTeacherStudent());

function usersA<T>(data: T): T {
    return data;
}

enum Days {
    mon, tue, wed, thu, fri, sat, sun
}
let whichDay:Days;
whichDay=Days.wed;
