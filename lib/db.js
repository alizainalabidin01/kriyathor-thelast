import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: 'localhost',
        database : 'kriyatho_kriyathor',
        user : 'kriyatho_root',
        password : 'kriyathorstikom'
    },
})

export async function sql_query(query_string, value = []){
    try {
        const results = await db.query(query_string, value)
        await db.end()
        return results
    }catch(e){
        throw Error(e.message)
    }
}
//kriyathorstikom  (45l4M8R@JaGha