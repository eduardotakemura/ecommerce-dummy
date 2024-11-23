import { cwd } from 'node:process'
import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'drizzle-kit'
loadEnvConfig(cwd())

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
})
