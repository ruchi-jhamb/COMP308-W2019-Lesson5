let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a reference to the database schema
let contactModel = require("../models/contact");

/*GET   Contact list page - READ Operation */
router.get("/", (req, res, next) => {
  contactModel.find((err, contactList) => {
    if (err) {
      return colsole.error(err);
    } else {
      // console.log(contactList);

      res.render("contacts/index", {
        title: "Contact List",
        contactList: contactList
      });
    }
  });
});

/* GET router for the Add page
this will display the Add page */

router.get("/add", (req, res, next) => {
  res.render("contacts/add", {
    title: "Add New Contact"
  });
});

/* POST Route for processing the Add page */
router.post("/add", (req, res, next) => {
  let newContact = contactModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age
  });

  contactModel.create(newContact, (err, contactModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //Referesh the contact list
      res.redirect("/contact-list");
    }
  });
});

module.exports = router;
