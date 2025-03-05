import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const DatabaseDisplay: React.FC = () => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    let db: SQLite.SQLiteDatabase;

    const fetchData = async () => {
      console.log('here');
      db = SQLite.openDatabase(
        { name: 'base.db', createFromLocation: 2 },
        () => {},
        error => {
          console.error('Error opening database:', error);
        }
      );

      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM general',
          [],
          (_, { rows }) => {
            if (rows.length > 0) {
              const data = rows.item(0).url; // Replace with your column name
              setValue(data);
            }
          },
          error => {
            console.error('Error executing query:', error);
          }
        );
      });
    };

    fetchData();

    return () => {
      // Cleanup function to close the database connection
      if (db) {
        db.close();
      }
    };
  }, []);

  return (
    <View>
      <Text>Database Value: {value}</Text>
    </View>
  );
};

export default DatabaseDisplay;
