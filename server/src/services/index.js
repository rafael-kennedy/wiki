const templates = require('./templates/templates.service.js');
const users = require('./users/users.service.js');
const items = require('./items/items.service.js');
const pages = require('./pages/pages.service.js');
const uploads = require('./uploads/uploads.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(templates);
  app.configure(users);
  app.configure(items);
  app.configure(pages);
  app.configure(uploads);
};
