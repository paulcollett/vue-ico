import library  from '../lib/icons-browser';

var VueIcoSvg = function(name, s, c) {
  var nameCamelCase = name.replace(/[_-]([a-z])/g, function(a, b) { return b.toUpperCase() });
  var src = library[nameCamelCase];

  if(!src) {
    console.error('[VueIco] No Icon "%s"', nameCamelCase, 'Library: https://material.io/icons/');
    return '[?]';
  }

  return '<svg fill="' + (c || 'currentcolor') + '" width="' + (s || 24) + '" height="' + (s || 24) + '" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' + src + '</svg>';
}

var Plugin = function () {}

Plugin.install = function (Vue, options) {
  if (Plugin.installed) {
    return;
  }

  var namespace = (options && options.name) || 'ico';

  Vue.directive(namespace, {
    inserted: function(el, binding) {
      el.outerHTML = VueIcoSvg(binding.arg || '', binding.modifier, (binding.value || {}).color);
    }
  });

  Vue.component(namespace, {
    props: {
      name: {
        type: [String]
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

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Plugin);
}

export default Plugin;
