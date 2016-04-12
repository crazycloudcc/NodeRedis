
/* logger level:
 * trace
 * debug
 * info
 * warn
 * error
 * fatal
 */


var config_logger = require("../../config").LOGGER ;

var log4js = require("log4js") ;
log4js.configure(config_logger.configure) ;

var logger = log4js.getLogger("normal") ;
logger.setLevel(config_logger.level) ;

exports.logger = logger ;

