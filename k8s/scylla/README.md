# For Scylladb api
cqlsh -u cassandra -p cassandra
DESC KEYSPACES
CREATE USER application WITH PASSWORD 'password';
CREATE KEYSPACE attendance_db WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
USE attendance_db;
CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    username TEXT,
    email TEXT
);
GRANT SELECT ON KEYSPACE attendance_db TO cassandra;

# For Employee api
cqlsh -u cassandra -p cassandra
CREATE USER scylladb WITH PASSWORD 'password';
CREATE KEYSPACE employee_db WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
USE employee_db;
CREATE TABLE users ( user_id UUID PRIMARY KEY, username TEXT, email TEXT ); 
GRANT SELECT ON KEYSPACE employee_db TO scylladb;