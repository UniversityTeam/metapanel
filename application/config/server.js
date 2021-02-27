({
  host: '127.0.0.1',
  balancer: this.process.env.PORT,
  protocol: 'http',
  ports: [],
  timeout: 5000,
  concurrency: 1000,
  queue: {
    size: 2000,
    timeout: 3000,
  },
  workers: {
    pool: 3,
    timeout: 3000,
  }
});
