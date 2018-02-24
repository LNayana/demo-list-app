const path = require('path');

module.exports = {
	entry:"./src/app.js",
	output:{
		path:path.join(__direname,'public'),
		filename:'bundle.js'
	}
};