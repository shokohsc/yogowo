/**
 * CoachController
 *
 * @description :: Server-side logic for managing coaches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	readByCoordinates: function (req, res) {

		var latitude = req.allParams().latitude,
				longitude = req.allParams().longitude,
				availableCoaches = [];

		Coach.find().exec(function (err, coaches) {
			if (err) {
				return res.json(err.status, {err: err});
			}

			coaches.forEach(function(index, coach) {
				var distance = geolib.getDistance(
					{latitude: latitude, longitude: longitude},
					{latitude: coach.latitude, longitude: coach.longitude},
				);

				if (2000 <= distance) {
					availableCoaches.push(coach);
				}
			});

			res.json(200, availableCoaches);
		});
	}

};
