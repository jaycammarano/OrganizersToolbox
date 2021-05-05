CREATE DATABASE toolbox_dev;

\c toolbox_dev

create extension if not exists "uuid-ossp";

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    secret_key VARCHAR(255) NOT NULL
);