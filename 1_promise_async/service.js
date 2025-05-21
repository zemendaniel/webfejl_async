class Service {
    #data
    constructor() {
        this.#data = people
    }
    init() {
        return new Promise(resolve => {
            setTimeout(() => {resolve(this.#data)}, 600)
        })
    }
    initInvalid() {
        return new Promise(reject => {
            setTimeout(() => {reject("Nem, nem...")}, 600)
        })
    }
}