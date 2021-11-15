var {gSheets} = require("./google-sheets");
var { fireStoreDb } = require("./firestoredb");
var { state } = require("./state");
var { storage } = require("./storage");

module.exports = {
    gSheets, fireStoreDb, state, storage
}