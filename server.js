const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  next();
});

const db = new sqlite3.Database("./restaurant.db", (err) => {
  if (err) {
    console.error("Erro ao abrir o banco de dados", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite");
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "API de Reservas do Restaurante está funcionando" });
});

const reservasRoutes = require("./reservas")(db);
const mesasRoutes = require("./mesas")(db);
const garconsRoutes = require("./garcons")(db);
const relatoriosRoutes = require("./relatorios")(db);

app.use("/reservas", reservasRoutes);
app.use("/mesas", mesasRoutes);
app.use("/garcons", garconsRoutes);
app.use("/relatorios", relatoriosRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor ouvindo em http://0.0.0.0:${port}`);
  console.log("Sistema de limpeza automática de reservas ligado");
});


function limparReservasAoFechar() {
  
  db.run("DELETE FROM reservas", function(err) {
    if (err) {
      console.error('Erro ao limpar as reservas', err.message);
    } else {
      console.log(`Reservas limpas automaticamente ${this.changes} removidas`);
      
      
      db.run("DELETE FROM sqlite_sequence WHERE name='reservas'", function(err) {
        if (err) {
          console.error('Erro ao resetar o contador de reservas', err.message);
        } else {
          console.log('Contador de reservas resetado - a próxima reserva será ID 1');
        }
      });
    }
  });
}


process.on("SIGINT", () => {
  console.log('\nServidor encerrando Limpando as reservas');
  
  limparReservasAoFechar();
  
  
  setTimeout(() => {
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Conexão com o banco de dados fechada");
      process.exit(0);
    });
  }, 1000); 
});


process.on("SIGTERM", () => {
  console.log('\nAplicação encerrando Limpando as reservas');
  
  limparReservasAoFechar();
  
  setTimeout(() => {
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Conexão com o banco de dados fechada");
      process.exit(0);
    });
  }, 1000);
});
