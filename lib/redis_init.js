
var logger ;
var redis ;
var config ;

var client ;

// connect to redis server.
exports.connect = function (_logger, _redis, _config, _callback) {

    logger = _logger ;
    redis = _redis ;
    config = _config ;

    client = redis.createClient(config.port, config.host, config.auth) ;

    client.select(config.database, function (err) {
        if (err) {
            logger.error(__filename + " - select db error : " + err) ;
            return ;
        }
        logger.info(__filename + " - connect to db: [" + config.database + "] OK!") ;
    }) ;

    if (config.debug) {
        client.flushdb(function (err) {
            if (err) {
                logger.error(__filename + " - flushdb error : " + err) ;
                return ;
            }
            logger.warn(__filename + " - flush db done!") ;
        }) ;
    }

    if (client) {
        logger.info(__filename + " - create redis client OK.") ;
        _callback(client) ;
    }
} ;

// disconnect from redis server.
exports.disconnect = function () {
    client.end() ;
    logger.warn(__filename + " - disconnect from redis server!") ;
} ;












