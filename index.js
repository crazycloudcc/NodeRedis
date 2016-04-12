

var config = require("./config") ;
var logger = require("./lib/util/logger").logger ;

var redis = require("redis") ;
var redisClient ;

var redis_init = require("./lib/redis_init") ;
var redis_gets = require("./lib/redis_gets") ;
var redis_sets = require("./lib/redis_sets") ;

var RedisConnectCallback = function (_client) {
    redisClient = _client ;
    redis_gets.init(logger, redisClient) ;
    redis_sets.init(logger, redisClient) ;
} ;

module.eports = {
    "connect" : redis_init.connect,
    "disconnect" : redis_init.disconnect,

    "keys" : undefined,              // cmd: keys *

    "get" : redis_gets.get,          // cmd: get [key]
    "mget" : redis_gets.mget,        // cmd: mget [key1] [key2]
    "hget" : redis_gets.hget,        // cmd: hget [table] [key]
    "hmget" : redis_gets.hmget,      // cmd: hmget [table] [key1] [key2]

    "set" : redis_sets.set,          // cmd: set [key] [value]
    "mset" : redis_sets.mset,        // cmd: mset [key1] [value1] [key2] [value2]
    "hset" : redis_sets.hset,        // cmd: hset [table] [key] [value]
    "hmset" : redis_sets.hmset,      // cmd: hmget [table] [key1] [value1] [key2] [value2]

    "del" : undefined
} ;

// initialize and connect to redis server.
redis_init.connect(logger, redis, config.REDIS, RedisConnectCallback) ;

