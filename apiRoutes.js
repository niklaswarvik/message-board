
var messages = [];


module.exports = function(app, express) {
	var router = express.Router();

	router.route('/messages')
		.get((req, res) => {
			res.send(messages);
		})
		.post((req, res) => {

			var user = req.body.user || guid();
			var message = req.body.message;
			var post = {
				user, message,
				time: Date.now()
			}

			messages.push(post);

			res.send(post);
		});



	return router;

}


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4();
}