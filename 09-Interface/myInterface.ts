interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrial:() => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

const sachin: User = {
    dbId: 134,
    email: 'Sachin@gmail.com',
    userId: 132,
    startTrial: () => {
        return 'trail started'
    },
    getCoupon: (name: 'Sachin', off: 34) => {
        return 10
    },
}

export {}
