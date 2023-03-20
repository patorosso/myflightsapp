import * as SQLite from "expo-sqlite";


const db = SQLite.openDatabase("flights.db");



export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS flights (id INTEGER PRIMARY KEY NOT NULL, flight_iata TEXT NOT NULL, dep_iata TEXT NOT NULL, arr_iata TEXT NOT NULL, time TEXT NOT NULL);",
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


export const insertFlight = (flight_iata, dep_iata, arr_iata, time) => {
  console.log(flight_iata, dep_iata, arr_iata, time);
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        
        tx.executeSql(
          "INSERT INTO flights (flight_iata, dep_iata, arr_iata, time) VALUES (?, ?, ?, ?);",
          [flight_iata, dep_iata, arr_iata, time],
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