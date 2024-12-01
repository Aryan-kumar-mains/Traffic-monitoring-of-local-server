const autocannon = require('autocannon')

const instance = autocannon({
  url: 'http://localhost:3000',
  connections: 1000,
  duration: 30,
  pipelining: 1,
  headers: {
    'Content-Type': 'application/json'
  },
  requests: [
    {
      method: 'GET'
    }
  ]
}, (err, results) => {
  if (err) {
    console.error(err)
    return
  }
//   console.log(results) // results object
  console.log('Number of requests: ', results.requests.total);
  console.log('Duration (seconds): ', results.duration);
})

// Track progress
autocannon.track(instance)

// Log results to console
process.once('SIGINT', () => {
  instance.stop()
})
