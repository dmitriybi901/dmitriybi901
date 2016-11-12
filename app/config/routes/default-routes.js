module.exports = function(app) {
  /**
   * Display Home Page
  **/
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'mobileApp - WSO2',
      message: 'Mobile Applications',
      userName: (req.user) ? req.user.username : undefined,
      flashMessage: req.flash('flashMessage')
    });
  });
}
