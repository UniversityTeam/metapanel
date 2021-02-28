({
  host: '0.0.0.0',
  balancer: this.process.env.PORT || 8000,
  protocol: 'https',
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
