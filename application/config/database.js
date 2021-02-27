({
  connectionString: this.process.env.DATABASE_URL || 'postgresql://marcus:marcus@localhost:5432/application',
  ssl: !!this.process.env.DATABASE_URL
});
