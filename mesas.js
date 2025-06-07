const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    const sql = "SELECT id, numero_mesa, capacidade, status FROM mesas ORDER BY numero_mesa";
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error("Erro ao buscar as mesas", err.message);
        return res.status(500).json({ error: "Erro ao buscar mesas" });
      }
      res.status(200).json(rows);
    });
  });

  router.get("/:numero_mesa", (req, res) => {
    const { numero_mesa } = req.params;
    const sql = "SELECT id, numero_mesa, capacidade, status FROM mesas WHERE numero_mesa = ?";
    db.get(sql, [numero_mesa], (err, row) => {
      if (err) {
        console.error("Erro ao buscar a mesa:", err.message);
        return res.status(500).json({ error: "Erro ao buscar a mesa" });
      }
      if (!row) {
        return res.status(404).json({ error: `Mesa com número ${numero_mesa} não encontrada` });
      }
      res.status(200).json(row);
    });
  });

  router.patch("/:numero_mesa/liberar", (req, res) => {
    const { numero_mesa } = req.params;

    db.get("SELECT id, status FROM mesas WHERE numero_mesa = ?", [numero_mesa], (err, mesa) => {
        if (err) {
            console.error("Erro ao encontrar a mesa para liberar:", err.message);
            return res.status(500).json({ error: "Erro ao buscar a mesa para liberar" });
        }
        if (!mesa) {
            return res.status(404).json({ error: `Mesa com número ${numero_mesa} não encontrada` });
        }

        if (mesa.status === 'livre') {
             return res.status(400).json({ error: `Mesa ${numero_mesa} já está livre` });
        }

        db.get("SELECT COUNT(*) as count FROM reservas WHERE mesa_id = ? AND status = 'pendente'", [mesa.id], (err, result) => {
            let novoStatus = 'livre';
            if (!err && result.count > 0) {
                novoStatus = 'reservada';
            }
            if (err) {
                 console.error(`Erro ao verificar reservas pendentes para a mesa ${mesa.id} antes de liberar`, err.message);
            }

            const updateSql = "UPDATE mesas SET status = ? WHERE id = ?";
            db.run(updateSql, [novoStatus, mesa.id], function(err) {
                if (err) {
                    console.error("Erro ao atualizar o status da mesa para livre:", err.message);
                    return res.status(500).json({ error: "Erro ao atualizar o status da mesa." });
                }
                if (this.changes === 0) {
                    return res.status(404).json({ error: `Mesa ${numero_mesa} não encontrada para liberar` });
                }
                res.status(200).json({ message: `Status da mesa ${numero_mesa} atualizado para ${novoStatus}.` });
            });
        });
    });
});

  return router;
};
