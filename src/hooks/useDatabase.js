import React, {useEffect} from 'react';

import {database} from '../components/database'

export default function useDatabase() {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

  useEffect(() => {
    async function loadDataAsync() {
      try {
        //await database.dropDatabaseTablesAsync()
        await database.setupDatabaseAsync()
        //await database.setupUsersAsync()

        setDBLoadingComplete(true);
      } catch (e) {
        console.warn(e);
      }
    }

    loadDataAsync();
  }, []);

  return isDBLoadingComplete;
}