const passport = require('passport');

//route handler to authenticate via google oauth
module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
