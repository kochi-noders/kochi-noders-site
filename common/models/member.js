module.exports = function(Member) {

    Member.distinctLocation = function(cb) {
        var ds = Member.dataSource;
        var sql = `
    		select distinct residinglocation as location from member
    		union
    		select distinct companyLocation from member
    		order by location;
    		`;
        ds.connector.query(sql, function(error, locations) {
            if (error) console.log('> error when selecting locations', error);
            cb(error, locations);
        });
    }

    Member.remoteMethod(
        'distinctLocation', {
            http: { verb: 'get' },
            description: 'Get list of distinct locations',
            returns: { arg: 'data', type: ['Object'], root: true }
        }
    );

    Member.distinctCompany = function(cb) {
        var ds = Member.dataSource;
        var sql = `select distinct company from member`;
        ds.connector.query(sql, function(error, company) {
            if (error) console.log('> error when selecting company', error);
            cb(error, company);
        });
    }

    Member.remoteMethod(
        'distinctCompany', {
            http: { verb: 'get' },
            description: 'Get list of distinct company',
            returns: { arg: 'data', type: ['Object'], root: true }
        }
    );

};
