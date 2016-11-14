const connection = require('../connection.js');
const passport = require('passport');

module.exports = function(app) {

  /**
   * Display Manage batches page
  **/

  app.get('/manageBatches', 
    
    function(req, res) {

      connection.query('SELECT * from batches_info', function(err, rows, fields) {
        if (err) throw err;

        res.render('manage_batches', {
          title: 'mobileApp - WSO2',
          message: 'Manage Batches',
          userName: (req.user) ? req.user.username : undefined,
          flashMessage: req.flash('flashMessage'),
          batches: rows
        });

        //console.log('The solution is: ', rows[0].start);
      });

  });

  /**
   * Display Manage Ads page
  **/
  app.get('/manageAds', function(req, res) {
    res.render('manage_Ads', {
      title: 'mobileApp - WSO2',
      message: 'Manage Ads',
      userName: (req.user) ? req.user.username : undefined,
      flashMessage: req.flash('flashMessage')
    });
  });

  /**
   * Display Ads Listing page
  **/
  app.get('/adsListing', function(req, res) {
    res.render('ads_listing', {
      title: 'mobileApp - WSO2',
      message: 'Ads Listing',
      userName: (req.user) ? req.user.username : undefined,
      flashMessage: req.flash('flashMessage')
    });
  });  

  /**
   * Display Create Batch page
  **/
  app.get('/addBatch', function(req, res) {
    res.render('add_batch', {
      title: 'mobileApp - WSO2',
      message: 'Create Batch',
      userName: (req.user) ? req.user.username : undefined,
      flashMessage: req.flash('flashMessage')
    });
  });

  /**
   * Update Batch
  **/

  app.post('/updateBatch', 
    
    function(req, res) {

      var record= { start: req.body.start, end: req.body.end, schedule: req.body.schedule};

      connection.query('INSERT INTO batches_info SET ?', record, function(err,res){
        if(err) throw err;

        //console.log('Last record insert id:', res.insertId);
        
      });
      
      res.redirect('/manageBatches');

    });

}
