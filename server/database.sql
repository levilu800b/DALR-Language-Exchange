CREATE DATABASE authtodo;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly213@gmail.com', 'kthl8822');

CREATE TABLE user_profiles (
  user_id uuid DEFAULT uuid_generate_v4(),
  user_firstName VARCHAR(255) NOT NULL,
  user_secondName VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  user_language_speak VARCHAR(255) NOT NULL,
  user_language_interest VARCHAR(255) NOT NULL,
  user_city VARCHAR(255) NOT NULL,
  user_country VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

INSERT INTO user_profiles (user_firstName,user_secondName, user_email,user_password, user_language_speak, user_language_interest, user_city, user_country)
VALUES ('Ahmed BahBah','Mohamed BahBah', 'Ahmed-BahBah@gmail.com','kthl8822', 'Arabic BahBah', 'English BahBah', 'Manchester BahBah', 'UK BahBah');

CREATE TABLE create_events (
  id SERIAL PRIMARY KEY,
  languages TEXT NOT NULL,
  location TEXT NOT NULL,
  link TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  datetime TIMESTAMP NOT NULL
);

CREATE TABLE create_events_email (
  id SERIAL PRIMARY KEY,
  languages TEXT NOT NULL,
  location TEXT NOT NULL,
  link TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  datetime TIMESTAMP NOT NULL,
  senderEmail VARCHAR(255) NOT NULL,
  senderId uuid REFERENCES user_profiles(user_id) NOT NULL
);

INSERT INTO create_events (languages, location, link, title, description, datetime)
VALUES ('Arabic BahBah', 'Manchester BahBah', 'https://www.meetup.com/Manchester-Arabic-Language-Meetup/', 'Manchester Arabic Language Meetup', 'Manchester Arabic Language Meetup', '2020-10-10 10:00:00');

-- CREATE TABLE messages (
--   id SERIAL PRIMARY KEY,
--   sender_id uuid REFERENCES user_profiles(user_id) NOT NULL,
--   recipient_id uuid REFERENCES user_profiles(user_id) NOT NULL,
--   message TEXT NOT NULL,
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  sender_id uuid REFERENCES user_profiles(user_id) NOT NULL,
  recipient_id uuid REFERENCES user_profiles(user_id) NOT NULL,
  sender_email VARCHAR(255) NOT NULL,
  recipient_email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE todo(
  todo_id SERIAL,
  user_id UUID ,
  description VARCHAR(255),
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


// how to delete user_profiles table in postgresql=> drop table user_profiles;