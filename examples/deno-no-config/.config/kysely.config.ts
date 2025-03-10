import { defineConfig } from 'npm:kysely-ctl@^0.12.0'
import { Database } from 'jsr:@db/sqlite@^0.12.0'
import { DenoSqlite3Dialect } from 'jsr:@soapbox/kysely-deno-sqlite@^2.2.0'

export default defineConfig({
	dialect: new DenoSqlite3Dialect({
		database: new Database('example.db'),
	}),
})
