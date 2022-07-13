/** Database for lunchly */

const { Client } = require('pg')
const pw = require('./psql-pw')

let db = new Client({
	database: process.env.NODE_ENV === 'test' ? 'lunchly_test' : 'lunchly',
	password: pw,
})

db.connect()

module.exports = db
