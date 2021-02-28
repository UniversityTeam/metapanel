({
  host: '0.0.0.0',
  balancer: 0,
  protocol: 'https',
  ports: [this.process.env.PORT || 8000],
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
