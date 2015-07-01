Router.route('/', function() {
  this.render('formDatabase');
},  {
  name: 'formDatabase'
});

Router.route('/database', function() {
  this.render('formDatabaseTable');
},  {
  name: 'database'
});