# sqlcmd

A small tool that allows you to execute PostgreSQL queries directly from the command line

### Expected arguments:
- user*
- password*
- host*
- database*
- port*
- At least one query

- * Mandatory fields

### Example usage:
`sql.exe user=test password=test host=localhost database=test port=5432 query="SELECT * FROM test"`

`node sql.js user=test password=test host=localhost database=test port=5432 query="SELECT * FROM test" query="SELECT * FROM test"`

