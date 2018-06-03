// Controller for our scraper
// ============================
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    //console.log("scraping")
    // scrape the NYT
    return scrape().then(function(articles) {
       // console.log("articles")

        // then insert articles into the db
        return db.Headline.create(articles);
        //console.log(articles)
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new articles today. Check back tomorrow!"
          });
        }
        else {
          // Otherwise send back a count of how many new articles we got
          res.json({
            message: "Added " + dbHeadline.length + " new articles!"
          });
        }
        //console.log(res)
      })
      .catch(function(err) {
        //console.log(err)
          res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
