export function dbFailure() {
    return {
        type: "dbFailure",
        message: `DB can't connect.`
    }
}