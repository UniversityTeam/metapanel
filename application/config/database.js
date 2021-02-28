({
  connectionString: this.process.env.DATABASE_URL,
  ssl: !!this.process.env.DATABASE_URL
});
