class ViewDataController {
    #div
    constructor() {
        this.#div = document.createElement('div')
        this.#div.innerText = "Loading..."
        document.body.appendChild(this.#div)
    }
    renderData(array) {
        this.#div.innerHTML = ""
        for (const i of array) {
            const div = document.createElement('div')
            div.textContent = i.name + "-" + i.age + "-" + i.sex
            this.#div.appendChild(div)
        }
    }
}