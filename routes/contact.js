let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a reference to the database schema
let contact = require("../models/contact");

/*GET   Contact list page - READ Operation */
router.get("/", (req, res, next) => {
  contact.find((err, contactList) => {
    if (err) {
      return colsole.error(err);
    } else {
      console.log(contactList);

      res.render("contacts/index", {
        title: "Contact List",
        contactList: contactList
      });
    }
  });
});

module.exports = router;
