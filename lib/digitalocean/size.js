(function() {
  var slice = [].slice;

  var Size = (function() {
    function Size(client) {
      this.client = client;
    }

    // page or query object, optional
    // perPage, optional
    // callback, optional
    Size.prototype.list = function() {
      var i,
          params = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []),
          callback = arguments[i++];

      return this.client.get.apply(this.client, ['/sizes', {}].concat(slice.call(params), [200, 'sizes', callback]));
    };

    return Size;
  })();

  module.exports = Size;
}).call(this);