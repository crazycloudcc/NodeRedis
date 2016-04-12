
var logger ;
var client ;

exports.init = function (_logger, _client) {
    logger = _logger ;
    client = _client ;

    logger.debug(__filename + " - init is OK!" + typeof client) ;
} ;

exports.get = function (_key, _callback) {
} ;

exports.mget = function (_keys, _callback) {
} ;

exports.hget = function (_table, _key, _callback) {
    logger.debug(__filename + " - hget command : ", table, key, typeof(key)) ;
    connector.hget(table, key, function (err, reply) {
        if (err) {
            logger.error(__filename + " - hget error : ", err, key) ;
            callback() ;
            return ;
        }
        callback(reply) ;
    }) ;
} ;

exports.hmget = function (_table, _keys, _values, _callback) {
} ;
