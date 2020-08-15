const { Pool } = require('pg');

const myArgs = process.argv.slice(2);

console.info("Tool by Wilhelm Sorban\n");

const validArguments =
  "\nExpected arguments:\n"
  + "user*\n"
  + "password*\n"
  + "host*\n"
  + "database*\n"
  + "port*\n"
  + "At least one query\n"
  + "\n"
  + "* Mandatory fields\n"
  + "\n"
  + "Example usage: \n"
  + "sql.exe user=test password=test host=localhost database=test port=5432 query=\"SELECT * FROM test\" query=\"SELECT * FROM test\" query=\"SELECT * FROM test\"";

const args = {};
const queries = [];

myArgs.forEach(arg => {
  const keyValue = arg.split(/=(.+)/);
  if (keyValue[0] !== 'query') {
    args[keyValue[0]] = keyValue[1];
  } else {
    queries.push(keyValue[1]);
  }
})

console.log(queries);

if(!args.user || !args.password || !args.host || !args.database || !args.port || !queries.length) {
  console.error("Invalid arguments");
  console.error(validArguments);
  process.exit();
}

const pool = new Pool({
  ...args
});

console.info("queries: " + queries);

queries.forEach(async query => {
  pool.query(query, async (err, res) => {
    if (err) {
      console.error(err);
    }
    console.info('Successfully executed query', query, res ? res.rows : '');
  });
})
