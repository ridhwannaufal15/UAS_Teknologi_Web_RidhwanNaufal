const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../database/inventaris.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database.');
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS inventaris (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama_barang TEXT NOT NULL,
    kategori TEXT,
    jumlah INTEGER DEFAULT 0,
    kondisi_barang TEXT,
    lokasi TEXT
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('✅ Tabel inventaris siap digunakan.');
  }
});

module.exports = db;
