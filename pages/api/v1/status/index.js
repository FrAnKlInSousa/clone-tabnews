import database from 'infra/database.js';

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const data = await database.query('show server_version');

  const databaseVersion = data.rows[0].server_version;

  const connections = await database.query('show max_connections');
  const maxConnections = parseInt(connections.rows[0].max_connections, 10);

  const databaseName = process.env.POSTGRES_DB;

  // count(1) ao invés de count(*) conta as linhas da tabela
  // sem levar todos os objetos para a memória
  const openConnections = await database.query({
    text: 'select count(1)::int from pg_stat_activity where datname = $1;',
    values: [databaseName],
  });

  const databaseOpenConnections = openConnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependecies: {
      database: {
        version: databaseVersion,
        max_connections: maxConnections,
        open_connections: databaseOpenConnections,
      },
    },
  });
}

export default status;
