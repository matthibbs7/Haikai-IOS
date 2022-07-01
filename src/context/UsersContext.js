import React, { useEffect, createContext, useState } from 'react';
import {database} from '../components/database'

export const UsersContext = createContext({});

export const UsersContextProvider = props => {
  // Initial values are obtained from the props
  const {
    users: initialUsers,
    children
  } = props;

  // Use State to store the values
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    refreshUsers()
  }, [] )

  const addNewUser = (userName, userHaiku, userImage) => {
    return database.insertUser(userName, userHaiku, userImage, refreshUsers)
  };

  const deleteUser = (userId) => {
    return database.deleteUser(userId, refreshUsers)
  }

  const refreshUsers = () =>  {
    return database.getUsers(setUsers)
  }

  // Make the context object:
  const usersContext = {
    users,
    addNewUser,
    deleteUser
  };

  // pass the value in provider and return
  return <UsersContext.Provider value={usersContext}>{children}</UsersContext.Provider>;
};