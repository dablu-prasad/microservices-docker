import { Pool } from 'pg'

export const dbConnection = new Pool({
    user: "tuser",
    host: "db",
    password: "linexc",
    database: "productdb",
    port: 5432
}
)