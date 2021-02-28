({
  connectionString: this.process.env.DATABASE_URL || 'postgresql://postgres@localhost:5432/postgres',
  ssl: !!this.process.env.DATABASE_URL
});
