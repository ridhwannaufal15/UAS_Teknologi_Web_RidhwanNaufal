const db = require('../db/database');

exports.getAllItems = (req, res) => {
  db.all('SELECT * FROM inventaris ORDER BY id DESC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

exports.getItemById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM inventaris WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }
    res.json(row);
  });
};

exports.createItem = (req, res) => {
  const { nama_barang, kategori, jumlah, kondisi_barang, lokasi } = req.body;
  
  if (!nama_barang) {
    return res.status(400).json({ error: 'Nama barang wajib diisi!' });
  }

  const sql = `
    INSERT INTO inventaris (nama_barang, kategori, jumlah, kondisi_barang, lokasi) 
    VALUES (?, ?, ?, ?, ?)
  `;
  
  db.run(sql, [nama_barang, kategori || '', jumlah || 0, kondisi_barang || '', lokasi || ''], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      id: this.lastID,
      nama_barang,
      kategori,
      jumlah,
      kondisi_barang,
      lokasi
    });
  });
};

exports.updateItem = (req, res) => {
  const { id } = req.params;
  const { nama_barang, kategori, jumlah, kondisi_barang, lokasi } = req.body;

  if (!nama_barang) {
    return res.status(400).json({ error: 'Nama barang wajib diisi!' });
  }

  const sql = `
    UPDATE inventaris 
    SET nama_barang = ?, kategori = ?, jumlah = ?, kondisi_barang = ?, lokasi = ? 
    WHERE id = ?
  `;
  
  db.run(sql, [nama_barang, kategori || '', jumlah || 0, kondisi_barang || '', lokasi || '', id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }
    res.json({ message: 'Data berhasil diupdate!' });
  });
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM inventaris WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }
    res.json({ message: 'Data berhasil dihapus!' });
  });
};
