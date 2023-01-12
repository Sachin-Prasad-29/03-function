function addTwo(num: number): number {
    return 2
}

function getUpper(val: string): string {
    return val.toUpperCase()
}

function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return '200 Ok'
}

const getHello = (s: string): string => {
    return ''
}

const heros = ['thor', 'spiderman', 'ironman']
// const heros = [1,2,3]

heros.map((hero) => {
    return `hero is${hero}`
})
heros.map((hero: string) => {
    return `hero is${hero}`
})
heros.map((hero: string): string => {
    return `hero is${hero}`
})

function consoleError(errMsg: string): void {
    console.log(errMsg)
}

function handleError(errMsg: string): never {
    throw new Error(errMsg)
}

let addVal = addTwo(5)
let upperStr = getUpper('sachin')

export {}
