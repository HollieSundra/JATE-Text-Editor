import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  //Create a connection to the database database and the version we want to use
  const contentDb = await openDB('jate', 1);

  //Create a transaction as well as specify the database and data privileges.
  const tx = contentDb.transaction('jate', 'readwrite');

  //Open up desired object store.
  const store = tx.objectStore('jate');

  //Using the .put method to update the data in the database
  const request = store.put({ id: id, content: content });

  //Getting the confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};



// TODO: Add logic for a method that gets all the content from the database
//Export a function we will use to GET to the database.
export const getDb = async () => {

  //Create a connection to the database database and the version we want to use.
  const contactDb = await openDB('jate', 1);

  //Create a transaction as well as specify the database and data privileges.
  const tx = contactDb.transaction('jate', 'readonly');

  //Open up desired object store.
  const store = tx.objectStore('jate');

  //Using the .getAll() method to get all the data in the database.
  const request = store.getAll();

  //Getting confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
