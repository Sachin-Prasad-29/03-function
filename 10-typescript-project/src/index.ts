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
    protected _courseCount = 1
    readonly age: number = 24
    constructor(
        public email: string,
        public name: string // private userId: number
    ) {}

    private deleteToken(): void {
        console.log('The token is deleted')
    }
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than 1')
        }
        this._courseCount = courseNum
    }
}

class Subuser extends User{
    ifFamily : boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const sachin = new User('sachin@gmail.com', 'sachin')
