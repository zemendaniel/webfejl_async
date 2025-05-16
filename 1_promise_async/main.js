const service = new Service()
const view = new ViewDataController()
service.init().then(data => {
    view.renderData(data)
})