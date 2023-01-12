let score: number | string = 33

score = 44
score = '55'

type User = {
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}

let hitesh: User | Admin = { name: 'hitesh', id: 334 }

hitesh = { username: 'sahcin', id: 432 }

function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`)
}
function getDbId2(id: number | string) {
    if (typeof id === 'string') id.toUpperCase()
}

// Array

const data: Array<number | string | boolean> = [1, '2', 4, true]

let pi: 3.14 = 3.14

let seatAllotment: 'left' | 'right' | 'window'

export {}
