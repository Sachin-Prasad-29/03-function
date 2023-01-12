//typeAlias

type User = {
    name: string
    email: string
    isActive: boolean
}

function createUser(user: User): User {
    return { name: '', email: '', isActive: true }
}

createUser({ name: 'sachin', email: 'Sachin@gmail.com', isActive: true })
