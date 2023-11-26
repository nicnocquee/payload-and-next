import path from "path";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";

export default buildConfig({
  editor: slateEditor({}),
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  collections: [
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
