-- Extensions ______----------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table Definition ----------------------------------------------
CREATE TABLE messages (
    uuid uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    message text NOT NULL,
    nickname text,
    service_name text NOT NULL,
    timestamp timestamp with time zone NOT NULL
);

-- Indices -------------------------------------------------------
CREATE UNIQUE INDEX timestamps_pkey ON messages(uuid uuid_ops);
