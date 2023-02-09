import { execSync } from "child_process";
import detect from "detect-port";

let SUPABASE_PORT = 64321;

export async function setupE2eTest() {
    await startSupabase();
    reseedDb();
}

async function startSupabase() {
    const port = await detect(SUPABASE_PORT);
    if (port !== SUPABASE_PORT) {
        return;
    }
    console.warn("Supabase not detected - Starting it now");
    execSync("npx supabase start");
}

function reseedDb() {
    execSync(
        "PGPASSWORD=postgres psql -U postgres -h 127.0.0.1 -p 64322 -f supabase/clear-db-data.sql",
        // for Windows:
        // "SET PGPASSWORD=postgres&&psql -U postgres -h 127.0.0.1 -p 54322 -f supabase/clear-db-data.sql"
        { stdio: "ignore" }
    );
}
