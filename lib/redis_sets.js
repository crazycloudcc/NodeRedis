
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
} ;

exports.hmset = function (_table, _keys, _values, _callback) {
} ;
