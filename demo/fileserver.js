var chalk = require('chalk')
var staticPath = process.argv[2] || 'lib/'
var fileServer = new(require('node-static').Server)(staticPath)
// var fs = require('fs')
// var path = require('path')
// var zlib = require('zlib')
// var proxy = require('http-proxy').createProxyServer()

// proxy.on('error', function(error) {
//   console.log(error)
// })

// // modify path
// proxy.on('proxyRes', function(proxyRes, req, res) {
//   var _write = res.write
//   var _end = res.end
//   var _writeHead = res.writeHead

//   var gunzip = zlib.createGunzip()

//   res.isHtml = false

//   res.writeHead = function(code, headers) {
//     var contentType = this.getHeader('content-type')
//     var contentEncoding = this.getHeader('content-encoding')

//     /* Sniff out the content-type header.
//      * If the response is HTML, we're safe to modify it.
//      */
//     if (((typeof contentType !== 'undefined') && (contentType.indexOf('text/html') !== -1))) {
//       res.isHtml = true

//       // Strip off the content length since it will change.
//       res.removeHeader('Content-Length')

//       if (headers) {
//         delete headers['content-length']
//       }
//     }

//     /* Sniff out the content-type header.
//      * If the response is Gziped, we're have to gunzip content before and ungzip content after.
//      */
//     if (res.isHtml && contentEncoding && contentEncoding.toLowerCase() === 'gzip') {
//       res.isGziped = true

//       // Strip off the content encoding since it will change.
//       res.removeHeader('Content-Encoding')

//       if (headers) {
//         delete headers['content-encoding']
//       }
//     }
//     _writeHead.apply(res, arguments)
//   }

//   res.write = function(data, encoding) {
//     // Only run data through trumpet if we have HTML
//     if (res.isHtml) {
//       if (res.isGziped) {
//         gunzip.write(data)
//       } else {
//         _write.apply(res, arguments)
//       }
//     } else {
//       _write.apply(res, arguments)
//     }
//   }

//   gunzip.on('data', function(data, encoding) {
//     var string = data.toString('utf8')
//     string = string
//       // remove https://g.alicdn.com
//       .replace(/https:\/\/g.alicdn.com/g, '')
//       // use local_config so seajs will load from local server
//       .replace(/(deploy|daily)_config\.js/g, 'local_config.js')
//     _write.call(res, new Buffer(string), encoding)
//   })

//   gunzip.on('finish', function(data) {
//     _end.call(res, data)
//   })

//   res.end = function(data, encoding) {
//     if (res.isGziped) {
//       gunzip.end(data)
//     } else {
//       _end.call(res, data)
//     }
//   }
// })

var urlMap = {'/execution/execution_performance_report_detail.json': '/test/performance_result.json'}

var staticPathRegex = /\/platform\/mtl/

function shouldStatic(req) {
  return staticPathRegex.test(req.url)
}

function serveFile(req, res) {
  var url = req.url.replace(/YunOS-FE\/YQC\//, '')
  for (var map in urlMap) {
    url = url.replace(new RegExp(map), urlMap[map])
  }
  var newReq = Object.assign({}, req, {url: url})
  fileServer.serve(newReq, res)
}

// require('http').createServer(function(req, res) {
//   console.log(chalk.white('req from client: ' + req.url))
//   var target
//   if (!shouldStatic(req)) {
//     target = 'http://110.75.96.130'
//   } else {
//     target = 'http://localhost:8082'
//   }
//   console.log(chalk.blue('   => ' + target))
//   proxy.web(req, res, {target: target})
// }).listen(8081, function() {
//   console.log(chalk.blue('Http server listening to :8081'))
// })

require('http').createServer(function(req, res) {
  req.on('end', function() {
    console.log(chalk.white('     => serve static file to: ' + req.url))
    res.setHeader('Access-Control-Allow-Origin', '*')
    serveFile(req, res)
  }).resume()
}).listen(8237, function() {
  console.log(chalk.blue('file server listening to :8237'))
})
