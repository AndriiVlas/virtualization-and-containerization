class MySQLAdapter {
    constructor(pool) { this.pool = pool; }
    async req() {
        return (await this.pool.query('SELECT * FROM student_record'))[0];
    }
}

class PostgresAdapter {
    constructor(pool) { this.pool = pool; }
    async req() {
        return (await this.pool.query('SELECT * FROM student_record')).rows;
    }
}

export async function getDatabase(driver, config) {
    let pool;
    switch (driver) {
        case 'mysql':
            const { default: mysql } = await import('mysql2/promise');
            pool = new MySQLAdapter(mysql.createPool(config));
            break;
        case 'postgres':
            const { default: pg } = await import('pg');
            pool = new PostgresAdapter(new pg.Pool(config));
            break;
        default:
            throw new Error('Тип бази даних не підтримується');
    }
    return pool;
}