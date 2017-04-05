
 //定义的错误类型码
  var ERROR_RUNTIME = 1,
    ERROR_SCRIPT = 2,
    ERROR_STYLE = 3,
    ERROR_IMAGE = 4,
    ERROR_AUDIO = 5,
    ERROR_VIDEO = 6,
    ERROR_CONSOLE = 7;
  console.error = (function(origin) {
    return function(errorlog) {
      console.log("CONSOLE MONITOR: "+errorlog);
      origin.call(console, errorlog);
    }
  })(console.error);


  /**
   *监听js报错异常(JavaScript runtime error)
   */
  window.onerror = function(messageOrEvent, source, lineno, colno, error) {
   // clearTimer()
    var des=messageOrEvent + " at " + source + ":" + lineno + ":" + colno;
    console.log("JS MORNITOR: "+des);
  };

  /**
   *监听资源加载错误(JavaScript Scource failed to load)
   */
  window.addEventListener('error', function(err) {
    // 过滤非资源加载的错误
    var ERR_TYPE = {
      "SCRIPT": ERROR_SCRIPT,
      "LINK": ERROR_STYLE,
      "IMG": ERROR_IMAGE,
      "AUDIO": ERROR_AUDIO,
      "VIDEO": ERROR_VIDEO
    };
    if (err.target !== window) { //过滤window的异常,避免与上面的onerror重复
      var errNode = err.target.nodeName;
      if (errNode && ERR_TYPE[errNode.toUpperCase()]) {
        var des = err.target.baseURI + " refer to " + (err.target.src || err.target
          .href)+err;
        console.log("LOAD MONITOR: "+des);
      }
    }

  }, true);