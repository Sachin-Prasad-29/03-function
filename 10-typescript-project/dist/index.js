"use strict";
// class User {
//     email: string
//     private name: string
//     readonly age: number = 24
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name // private userId: number
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.age = 24;
    }
    deleteToken() {
        console.log('The token is deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
class Subuser extends User {
    constructor() {
        super(...arguments);
        this.ifFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const sachin = new User('sachin@gmail.com', 'sachin');
