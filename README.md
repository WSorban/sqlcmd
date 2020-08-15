### sqlcmd

# Expected arguments:
user*
password*
host*
database*
port*
At least one query

* Mandatory fields

# Example usage:
`sql.exe user=test password=test host=localhost database=test port=5432 query="SELECT * FROM test" query="SELECT * FROM test" query="SELECT * FROM test"`
or
`node sql.js user=test password=test host=localhost database=test port=5432 query="SELECT * FROM test" query="SELECT * FROM test" query="SELECT * FROM test"`

