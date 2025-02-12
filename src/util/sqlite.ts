import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabaseAsync("chif_app")

export default db