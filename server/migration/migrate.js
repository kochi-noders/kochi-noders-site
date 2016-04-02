module.exports = function (app) {
    var path = require('path');
    var models = require(path.resolve(__dirname, '../model-config.json'));
    var datasources = require(path.resolve(__dirname, '../datasources.json'));

    function autoUpdateAll() {
        console.log('> entering migration - autoUpdateAll');

        Object.keys(models)
            .forEach(function (key) {
                if (typeof models[key].dataSource != 'undefined') {
                    if (typeof datasources[models[key].dataSource] != 'undefined') {
                        app.dataSources[models[key].dataSource].autoupdate(key, function (err) {
                            if (err) throw err;
                            console.log('Model ' + key + ' updated');
                        });
                    }
                }
            });

    }

    function autoMigrateAll() {
        console.log('> entering migration - autoMigrateAll');

        Object.keys(models)
            .forEach(function (key) {
                if (typeof models[key].dataSource != 'undefined') {
                    if (typeof datasources[models[key].dataSource] != 'undefined') {
                        app.dataSources[models[key].dataSource].automigrate(key, function (err) {
                            if (err) throw err;
                            console.log('Model ' + key + ' migrated');
                        });
                    }
                }
            });
    }

    return {
        update: autoUpdateAll,
        migrate: autoMigrateAll
    }
};
