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