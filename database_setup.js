const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./restaurant.db", (err) => {
  if (err) {
    console.error("Erro ao abrir o banco de dados", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite");
    configurarBancoDeDados();
  }
});

function configurarBancoDeDados() {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS mesas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      numero_mesa INTEGER UNIQUE NOT NULL,
      capacidade INTEGER NOT NULL CHECK (capacidade BETWEEN 2 AND 5),
      status TEXT NOT NULL DEFAULT 'livre' CHECK (status IN ('livre', 'reservada', 'ocupada'))
    )`, (err) => {
      if (err) {
        console.error("Erro ao criar a tabela de mesas:", err.message);
        fecharConexao();
        return;
      }
      console.log("Tabela de mesas criada ou já existente");

      db.get("SELECT COUNT(*) as count FROM mesas", (err, row) => {
        if (err) {
          console.error("Erro ao verificar quantidade de mesas:", err.message);
          criarTabelaGarcons();
        } else if (row.count === 0) {
          const inserirMesa = db.prepare("INSERT INTO mesas (numero_mesa, capacidade) VALUES (?, ?)");
          const mesas = [
            { numero: 1, capacidade: 2 }, { numero: 2, capacidade: 2 },
            { numero: 3, capacidade: 3 }, { numero: 4, capacidade: 3 },
            { numero: 5, capacidade: 4 }, { numero: 6, capacidade: 4 },
            { numero: 7, capacidade: 4 }, { numero: 8, capacidade: 5 },
            { numero: 9, capacidade: 5 }, { numero: 10, capacidade: 5 },
          ];
          mesas.forEach((m) => inserirMesa.run(m.numero, m.capacidade));
          inserirMesa.finalize((err) => {
            if (err) console.error("Erro ao popular a tabela de mesas", err.message);
            else console.log("Tabela de mesas populada.");
            criarTabelaGarcons();
          });
        } else {
          console.log("Tabela de mesas já está populada");
          criarTabelaGarcons();
        }
      });
    });
  });
}

function criarTabelaGarcons() {
  db.run(`CREATE TABLE IF NOT EXISTS garcons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT UNIQUE NOT NULL
    )`, (err) => {
    if (err) {
      console.error("Erro ao criar a tabela de garçons", err.message);
      fecharConexao();
      return;
    }
    console.log("Tabela de garçons criada ou já existente");

    db.get("SELECT COUNT(*) as count FROM garcons", (err, row) => {
      if (err) {
        console.error("Erro ao verificar quantidade de garçons", err.message);
        criarTabelaReservas();
      } else if (row.count === 0) {
        const inserirGarcon = db.prepare("INSERT INTO garcons (nome) VALUES (?)");
        const garcons = ["Carlos", "Ana", "Pedro", "Sofia", "Miguel"];
        garcons.forEach((g) => inserirGarcon.run(g));
        inserirGarcon.finalize((err) => {
          if (err) console.error("Erro ao popular a tabela de garçons", err.message);
          else console.log("Tabela de garçons populada.");
          criarTabelaReservas();
        });
      } else {
        console.log("Tabela de garçons já está populada");
        criarTabelaReservas();
      }
    });
  });
}

function criarTabelaReservas() {
  db.run(`CREATE TABLE IF NOT EXISTS reservas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data TEXT NOT NULL,
      hora TEXT NOT NULL,
      mesa_id INTEGER NOT NULL,
      qtde_pessoas INTEGER NOT NULL,
      nome_responsavel TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'atendida', 'cancelada')),
      garcom_atendimento_id INTEGER NULL,
      FOREIGN KEY (mesa_id) REFERENCES mesas (id),
      FOREIGN KEY (garcom_atendimento_id) REFERENCES garcons (id),
      UNIQUE (data, hora, mesa_id)
    )`, (err) => {
    if (err) {
      console.error("Erro ao criar a tabela de reservas", err.message);
    } else {
      console.log("Tabela de reservas criada ou já existente");
    }
    fecharConexao();
  });
}

function fecharConexao() {
  db.close((err) => {
    if (err) {
      console.error("Erro ao fechar o banco de dados", err.message);
    } else {
      console.log("Configuração do banco de dados concluída. Conexão fechada");
    }
  });
}
