const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    const sql = "SELECT id, nome FROM garcons ORDER BY nome";
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error("Erro ao buscar garçons", err.message);
        return res.status(500).json({ erro: "Erro ao buscar garçons" });
      }
      res.status(200).json(rows);
    });
  });

  return router;
};
