var migration = require('../migration/migrate');

module.exports = function (app) {
    var router = app.loopback.Router();

    router.get('/ping', function (req, res) {
        res.send('pongaroo');
    });

    router.get('/migrate-database', function (req, res) {
        var x = new migration(app);
        x.migrate();
        res.send('Check console for update status!');
    });

    router.get('/update-database', function (req, res) {
        var x = new migration(app);
        x.update();
        res.send('Check console for update status!');
    });

    app.use(router);
}
