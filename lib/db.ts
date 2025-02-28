import sql from 'mssql';

const dbConfig = {
    user: 'autovyn',
    password: '#$hankar&8838A',
    server: '103.74.65.20',
    port: 4650,
    database: 'VN01DB23',
    encrypt: true,
    trustServerCertificate: true,
};

export async function getDbConnection() {
    try {
        const pool = await sql.connect(dbConfig);
        return pool;
    } catch (err) {
        console.error('Database connection error: ', err);
        throw err;
    }
}

export default sql;
