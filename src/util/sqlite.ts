import * as SQLite from "expo-sqlite"


let dbPromise: Promise<SQLite.SQLiteDatabase> | null = null

const getDb = async (): Promise<SQLite.SQLiteDatabase> => {
    if (!dbPromise) {
        dbPromise = await SQLite.openDatabaseAsync("chif_app")
    }
    return dbPromise!!
}

// const db = await SQLite.openDatabaseAsync("chif_app")

export default getDb