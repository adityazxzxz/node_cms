'use strict';

var user = require('../app/controllers/user');


module.exports = {
    configure:(app) => {
        app.route('/api/v1/user').get(user.find);
    }
}