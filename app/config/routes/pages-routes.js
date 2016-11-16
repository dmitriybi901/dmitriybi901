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
      flashMessage: req.flash('flashMessage'),

    }); 
  }); 

  /**
   * Display Ads Listing page
  **/
  app.get('/adsListing',       
    function(req, res) {

      connection.query('SELECT * from adslist_info', function(err, rows, fields) {
        if (err) throw err;

        res.render('ads_listing', {
          title: 'mobileApp - WSO2',
          message: 'Ads Listing',
          userName: (req.user) ? req.user.username : undefined,
          flashMessage: req.flash('flashMessage'),
          adsList: rows
        });
        
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

  /**
   * Delete Batch
  **/

  app.post('/deleteBatch',    
    function(req, res) { 
      var record= { batch_id: req.body.batch_del_id};

      connection.query('DELETE FROM batches_info WHERE ?', record, function(err,res){
        if(err) throw err;                
      });
      
      res.redirect('/manageBatches');
    }); 

  /**
   * Update Ads
  **/

  app.post('/updateAds',    
    function(req, res) {
      if (req.body.ads_edit_id==""){
        var record= { title: req.body.title, text: req.body.text, thumbnail: req.body.thumbnail, client: req.body.client};

        connection.query('INSERT INTO adslist_info SET ?', record, function(err,res){
          if(err) throw err;
                  
        });
      }else{
        // var record= { title: req.body.title, text: req.body.text, thumbnail: req.body.thumbnail, client: req.body.client};

        connection.query('UPDATE adslist_info SET ? WHERE ads_id = ?', [{ title: req.body.title,text: req.body.text, thumbnail: req.body.thumbnail, client: req.body.client}, req.body.ads_edit_id])

        // connection.query('INSERT INTO adslist_info SET ?', record, function(err,res){
        //   if(err) throw err;
                  
        // });
      }
      res.redirect('/adsListing');
    });

  /**
   * Delete Ads
  **/

  app.post('/deleteAds',    
    function(req, res) { 
      var record= { ads_id: req.body.ads_del_id};

      connection.query('DELETE FROM adslist_info WHERE ?', record, function(err,res){
        if(err) throw err;                
      });
      
      res.redirect('/adsListing');
    });   

  /**
   * Edit Ads
  **/

  app.post('/editAds',    
    function(req, res) {

      res.render('manage_Ads', {
        title: 'mobileApp - WSO2',
        message: 'Manage Ads',
        userName: (req.user) ? req.user.username : undefined,
        flashMessage: req.flash('flashMessage'),
        ads_edit_id: req.body.ads_edit_id,
        ads_title: req.body.title,
        ads_text: req.body.text,
        ads_thumbnail: req.body.thumbnail,
        ads_client: req.body.client

      });  
       
    });          

}
