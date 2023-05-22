# vue3-ico
## This package is just a migration https://www.npmjs.com/package/vue-ico to vue 3
https://github.com/paulcollett/vue-ico
#### Dead easy, Google Material Icons for Vue.

This package's aim is to get icons into your Vue.js project as quick as possible, at the cost of all the bells and whistles.

Specify the icon name as kebab or camel case
(library: https://material.io/icons/)

**That's it!**

## Bundling?

- Simply outputs the svg
- Bundles only the icons you need

First off install the `vue3-ico` package `npm install vue3-ico --save-dev`

**Configure webpack to support "tree-shaking"** to remove _dead code_ (and unused icons)

When using babel as your JS loader, make sure we're not compiling to commonjs modules by passing `{ modules: false }` as an option.
```JS
presets: [ ['es2015', { modules: false }] ]
```

Also, you'll need to allow `vue3-ico` module to be parsed by your webpack JS loader to shake off unused icons. Commonly the whole `node_modules` folder is excluded from parsing so changing this line:
```JS
exclude: /node_modules/
```
to this, will continue to exclude all node modules except for `vue3-ico`:
```JS
exclude: /node_modules\/(?!(vue3-ico)\/).*/
```
Example of `webpack.config.js` with this "tree shaking" setup:
https://github.com/paulcollett/vue-ico/blob/master/webpack-example.md

Now when building webpack with the production flag (`webpack -p`) only the used `vue3-ico` icons will be included in your final JS bundle. This also has the added benefits of allowing you to use ES6 modules (and tree-shaking) across your project

### Bundling Usage

Import the icon name, prefixed with `ico`, in camelCase (library: https://material.io/icons/)

```JS
import {createApp} from 'vue'
import VueIco, {icoClose, icoKeyboardArrowDown} from 'vue3-ico'

const app = createApp(App)

app.use(VueIco, {
  "close": icoClose,
  "down": icoKeyboardArrowDown
});
```

```HTML
<ul>
  <li><ico name="close"></ico></li>
  <li><ico name="down" size="18" color="#f00"></ico></li> <!-- red icon -->
</ul>
```

### How to add an icon

```JS
import {icoWrapper} from 'vue3-ico';
const icoHomeTwoTone = (s, c) => icoWrapper('<path d="M19,11v9h-5v-6h-4v6H5v-9H3.6L12,3.4l8.4,7.6H19z" opacity=".3"></path><path d="M20,21h-7v-6h-2v6H4v-9H1l11-9.9L23,12h-3V21z M15,19h3v-8.8l-6-5.4l-6,5.4V19h3v-6h6V19z"></path>', s, c);

export {icoHomeTwoTone}
```

## v 1.0.20 added new parameter viewBox
```JS
// google material icons
const icoMonitoring = (s, c, v) => icoWrapper('<path d="M120 936v-76l60-60v136h-60Zm165 0V700l60-60v296h-60Zm165 0V640l60 61v235h-60Zm165 0V701l60-60v295h-60Zm165 0V540l60-60v456h-60ZM120 700v-85l280-278 160 160 280-281v85L560 582 400 422 120 700Z"/>', s, c, v);
```

```HTML
<ico name="graph" viewBox="0 96 960 960"></ico>
```

### Need anything more?

We're aiming for simplicity with this package, that means, ready-to-go browser support and simplistic bundling. If you need more control and willing to get your hands dirty around your bundler, take a look at this comprehensive library:

https://www.npmjs.com/package/ceri-icon

### Issues, Suggestions, Contributing

https://github.com/POMXARK/vue-ico
