var books = {
	getAll: function(req, res) {
		var allbooks = data;
		res.json(allbooks);
	},

	getOne: function(req, res){
		var id = req.body.id;
		var book = data[0];
		res.json(book);
	}
}