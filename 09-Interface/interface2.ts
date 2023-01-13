interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrial:() => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    // reopening of the interface
    githubToken: string
}

//inheritance
interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

const sachin: Admin = {
    dbId: 134,
    role:"ta",
    email: 'Sachin@gmail.com',
    userId: 132,
    githubToken: 'sdjf32',
    startTrial: () => {
        return 'trail started'
    },
    getCoupon: (name: 'Sachin', off: 34) => {
        return 10
    },
}

export {}
