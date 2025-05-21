const service = new Service()
const view = new ViewDataController()
service.init().then(data => {
    view.renderData(data)
}).catch(
    () => {
        service.initInvalid().then(view.renderError)
    }
)