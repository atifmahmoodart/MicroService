const gateway = require('fast-gateway')

const port = 5003
const server = gateway({
  routes: [
    {
    prefix: '/users',
    target: 'http://127.0.0.1:5000',
  },
  {
    prefix: '/orders',
    target: 'http://127.0.0.1:5001',
  }
]
})


server.get('/gateway', (req, res)=> res.send("gateway called"))

server.start(port).then(server=>{
    console.log("API Gateway is running")
})