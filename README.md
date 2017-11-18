# vue-ico
#### Dead easy, Google Material Icons for Vue.

This package's aim is to get icons into your Vue.js project as quick as possible, at the cost of all the bells and whistles.

#### https://material.io/icons/

**Dead simple Icons**
```HTML
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/vue-ico"></script>
```
```HTML
<ul>
  <li><ico name="comment"></ico></li> <!-- outputs the comment icon -->
  <li><ico name="playlist-add" size="18"></ico></li> <!-- control the size -->
  <li><ico name="account-circle" size="24" color="#f00"></ico></li> <!-- red icon -->
</ul>
```
Specify the icon name as kebab or camel case
(library: https://material.io/icons/)

**That's it!**

### Example

http://paulcollett.github.io/vue-ico/demo/

## Bundling?

- Simply outputs the svg
- Bundles only the icons you need

First off install the `vue-ico` package `npm install vue-ico --save-dev`

**Configure webpack to support "tree-shaking"** to remove _dead code_ (and unused icons)

When using babel as your JS loader, make sure we're not compiling to commonjs modules by passing `{ modules: false }` as an option.
```JS
presets: [ ['es2015', { modules: false }] ]
```

Also, you'll need to allow `vue-ico` module to be parsed by your webpack JS loader to shake off unused icons. Commonly the whole `node_modules` folder is excluded from parsing so changing this line:
```JS
exclude: /node_modules/
```
to this, will continue to exclude all node modules except for `vue-ico`:
```JS
exclude: /node_modules\/(?!(vue-ico)\/).*/
```
Example of `webpack.config.js` with this "tree shaking" setup:
https://github.com/paulcollett/vue-ico/blob/master/webpack-example.md

Now when building webpack with the production flag (`webpack -p`) only the used `vue-ico` icons will be included in your final JS bundle. This also has the added benefits of allowing you to use ES6 modules (and tree-shaking) across your project

### Bundling Usage

Import the icon name, prefixed with `ico`, in camelCase (library: https://material.io/icons/)

```JS
import VueIco, {icoClose, icoKeyboardArrowDown} from 'vue-ico'

Vue.use(VueIco, {
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

### Need anything more?

We're aiming for simplicity with this package, that means, ready-to-go browser support and simplistic bundling. If you need more control and willing to get your hands dirty around your bundler, take a look at this comprehensive library:

https://www.npmjs.com/package/ceri-icon

### Issues, Suggestions, Contributing

https://github.com/paulcollett/vue-ico
