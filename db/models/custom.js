const client = require('../client');

async function createCustomRequest({color, pid, usertext, font, comments, name, phone, email}) {
    try {
        const date = new Date();
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();
        const { rows: [customRequest] } = await client.query(`
            INSERT INTO customOrders(color, date, pid, usertext, font, comments, name, phone, email, complete)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *;
        `, [color, `${month}/${day}/${year}`, pid, usertext, font, comments, name, phone, email, false]);

        return customRequest;
    } catch (error) {
        throw error;
    }
}

async function markRequestAsComplete(id, value) {
    try {
        const { rows: request } = await client.query(`
            UPDATE customOrders
            SET complete=${value}
            WHERE id=${id}
            RETURNING *;
        `)
        return request;
    } catch (error) {
        throw error;
    }
}

async function getCustomRequests() {
    try {
        const { rows: requests } = await client.query(`
            SELECT * FROM customOrders;
        `)
        return requests;
    } catch (error) {
        throw error;
    }
}

async function getCustomRequestById(id) {
    try {
        const { rows: [request] } = await client.query(`
            SELECT * FROM customOrders
            WHERE id=${id};
        `)
        return request;
    } catch (error) {
        throw error;
    }
}

async function clearClosedRequests() {
    try {
        const { rows } = await client.query(`
            DELETE FROM customOrders
            WHERE complete=true;
        `)
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCustomRequest,
    getCustomRequests,
    markRequestAsComplete,
    getCustomRequestById,
    clearClosedRequests
}