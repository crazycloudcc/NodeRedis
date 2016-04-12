
var logger ;
var client ;

exports.init = function (_logger, _client) {
    logger = _logger ;
    client = _client ;

    logger.debug(__filename + " - init is OK!" + typeof client) ;
} ;

exports.set = function (_key, _value, _callback) {
} ;

exports.mset = function (_keys, _values, _callback) {
} ;

exports.hset = function (_table, _key, _value, _callback) {
    logger.debug(__filename + " - hset command : ", table, key, value, typeof(key), typeof(value)) ;
    client.hset(table, key, value, function (err) {
        if (err) {
            logger.error(__filename + " - hset error : ", err, table, key, value) ;
            callback(err) ;
            return ;
        }
        callback() ;
    }) ;
} ;

exports.hmset = function (_table, _keys, _values, _callback) {
} ;











