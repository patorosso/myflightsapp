import * as SQLite from "expo-sqlite";


const db = SQLite.openDatabase("flights.db");




export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS flights (id INTEGER PRIMARY KEY NOT NULL, coords TEXT NOT NULL);",
                [],
                () => {
                    resolve();  
                },
                (_, error) => {
                    reject(err);
                }
            )
        })
    })
    return promise;
}


export const insertFlight = (coords) => {
  console.log(coords);
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        
        tx.executeSql(
          "INSERT INTO flights (coords) VALUES (?);",
          [JSON.stringify(coords)],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
  
    return promise;
  };
  
  export const getFlights = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM flights",
          [],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
  
    return promise;
  };