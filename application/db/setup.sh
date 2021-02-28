[[ -z "$DATABASE_URL" ]] && export DATABASE_URL='postgresql://postgres@localhost:5432/postgres'
psql -f structure.sql $DATABASE_URL
psql -f data.sql $DATABASE_URL
