import devConfig from "./dev.babel"

Object.assign(devConfig.entry, {
  "swagger-yml": "./dev-helpers/swagger.yaml"
})

devConfig.watchOptions = {
  aggregateTimeout: 300,
  poll: true,
  ignored: [ 'node_modules' ]
}

export default devConfig
