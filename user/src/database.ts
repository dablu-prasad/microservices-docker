import { Pool } from 'pg'

export const dbConnection = new Pool({
    user: "tuser",
    host: "db",
    password: "linexc",
    database: "userdb",
    port: 5432
}
)