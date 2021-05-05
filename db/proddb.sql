CREATE DATABASE toolbox_production;

\c toolbox_production

create extension if not exists "uuid-ossp";

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NUll,
    last_name VARCHAR(255) NOT NULL,
    bio VARCHAR(1024)
);