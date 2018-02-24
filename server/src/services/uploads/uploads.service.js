// Initializes the `uploads` service on path `/uploads`
const createService = require('./uploads.class.js');
const hooks = require('./uploads.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'uploads',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/uploads', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('uploads');

  service.hooks(hooks);
};
