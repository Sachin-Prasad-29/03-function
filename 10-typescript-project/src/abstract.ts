abstract class TakePhoto {
    constructor(public cameramode: string, public filter: string) {}
    abstract getSepia(): void
}

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst?: string) {
        super(cameraMode, filter)
    }

    getSepia(): void {}
}

const person = new Instagram('take', 'test')

const getMoreData = <T>(products: T[]): T => {
    return products[3]
}
