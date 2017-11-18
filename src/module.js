export const icoWrapper = function(svg, s, c) {
  return '<svg fill="' + (c || 'currentcolor') + '" width="' + (s || 24) + '" height="' + (s || 24) + '" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
}

const Plugin = function () {}

Plugin.install = function (Vue, options) {
  if (Plugin.installed) {
    return;
  }

  options = options || {};

  var namespace = options.namespace || 'ico';

  Vue.directive(namespace, {
    inserted: function(el, binding) {
      let icoFn = null;

      if(typeof binding.arg === 'function') {
        icoFn = binding.arg;
      } else if(typeof binding.arg === 'string') {
        icoFn = options[binding.arg] || null;
      }

      if(icoFn) {
        el.outerHTML = icoFn.call(null, binding.modifier, (binding.value || {}).color);
      } else {
        el.outerHTML = '[?]';
      }
    }
  });

  Vue.component(namespace, {
    props: {
      name: {
        type: [String, Function]
      },
      size: {
        type: [String, Number],
        default: 24
      },
      color: {
        type: [String]
      },
    },
    render: function (createElement) {
      var _this = this;

      return createElement('span', {
        directives: [{
          name: namespace,
          value: {color: _this.color},
          arg: _this.name,
          modifier: _this.size
        }]
      });
    }
  });
}

export default Plugin;
