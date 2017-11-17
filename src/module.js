export const icoWrapper = function(svg, size, color) {
  return '<svg fill="' + (c || 'currentcolor') + '" width="' + (s || 24) + '" height="' + (s || 24) + '" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${svg}</svg>';
}

const Plugin = function () {}

Plugin.install = function (Vue, options) {
  if (Plugin.installed) {
    return;
  }

  var namespace = (options && options.name) || 'ico';

  Vue.directive(namespace, {
    inserted: function(el, binding) {
      let icoFn = null;

      if(typeof binding.arg === 'function') {
        icoFn = binding.arg;
      } else if(typeof binding.arg === 'string') {
        icoFn = options[binding.arg] || null;
      }

      if(icoFn) {
        el.outerHTML = icoFn(binding.modifier, (binding.value || {}).color);
      } else {
        el.outerHTML = icoFn;
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
      return createElement('span', {
        directives: [{
          name: namespace,
          value: {color: this.color},
          arg: this.name,
          modifier: this.size
        }]
      });
    }
  });
}

export default Plugin;
