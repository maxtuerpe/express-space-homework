// DEPENDENCIES
const express = require('express');
const app = express();
const Missions = require('./models/marsMissions');

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages


app.get('/missions', (req, res) =>{
  res.render('index.ejs', {Missions})
})

app.get('/missions/:index', (req, res) => {
  res.render('show.ejs', {
    mission: Missions[req.params.index]
  })
})




// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// LISTENER
const port = 3000;
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
