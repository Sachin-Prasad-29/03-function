type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credCard?: cardDetails //optional
}

type cardNumber = {
    cardNum: string
}

type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber &
    cardDate & {
        cvv: number
    }

let myUser: User = {
    _id: '1244',
    name: 'sacin',
    email: 's2GMAIL.COM',
    isActive: false,
}
myUser.name = 'SACHIN'
// myUser._id = "234"

export {}
