import React from 'react'

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const getUsers = (setUserFunc) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'select * from users',
        [],
        (_, { rows: { _array } }) => {
          setUserFunc(_array)
        }
      );
    },
    (t, error) => { console.log("db error load users"); console.log(error) },
    (_t, _success) => { console.log("loaded users")}
  );
}

const insertUser = (userName, userHaiku, userImage, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'insert into users (name, haiku, image) values (?,?,?)', [userName, userHaiku, userImage] );
    },
    (t, error) => { console.log("db error insertUser"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const deleteUser = (userId, successFunc) => {
  db.transaction( tx=> {
    tx.executeSql('delete from users where id = ?', [userId]);
  },
  (t, error) => { console.log('db error deleteUser'); console.log(error);},
  (t, success) => { successFunc() }
  )
}

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'drop table users',
        [],
        (_, result) => { resolve(result) },
        (_, error) => { console.log("error dropping users table"); reject(error)
        }
      )
    })
  })
}

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
          'create table if not exists users (id integer primary key autoincrement, name text, haiku text, image text);'
        );
      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
}

const setupUsersAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction( tx => {
        tx.executeSql( 'insert into users (id, name, haiku, image) values (?,?,?,?)', [1, "john", "This is a haiku poem", "1234673jdie8"] );
      },
      (t, error) => { console.log("db error insertUser"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

export const database = {
  getUsers,
  insertUser,
  deleteUser,
  setupDatabaseAsync,
  setupUsersAsync,
  dropDatabaseTablesAsync,
}