const fs = require('fs');
// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');
const {bucketName} = require('../config');

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client using Application Default Credentials
const storage = new Storage();

// Creates a client from a Google service account key
// const storage = new Storage({keyFilename: 'key.json'});

async function uploadFile(localFile, destination) {
  await storage.bucket(bucketName).upload(localFile, {
    destination: destination,
  });

  fs.unlinkSync(localFile);

  console.log(`${localFile} uploaded to ${bucketName}`);
}

async function deleteFile(fileName){
  await storage.bucket(bucketName).file(fileName).delete();

  console.log(`gs://${bucketName}/${fileName} deleted`);
}

module.exports = { uploadFile, deleteFile };