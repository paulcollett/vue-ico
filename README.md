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

### Bundling?

- Simply outputs the svg
- Bundles only the icons you need

`npm install vue-ico --save-dev`

Configure webpack to support "tree-shaking" to remove _dead code_ (and unused icons):
http://2ality.com/2015/12/webpack-tree-shaking.html

Note: You'll need to allow `vue-ico` module to be parsed by your webpack JS loader. Commonly all node_modules are excluded from parsing so changing this line:
```JS
exclude: /node_modules/
```
to this will do the trick:
```JS
exclude: /node_modules\/(?!(vue-ico)\/).*/
```
_...let me know if this needs clarifying_

```JS
import VueIco, {icoClose, icoKeyboardArrowDown} from 'vue-ico'

Vue.use(VueIco, {
  "close": icoClose,
  "down": icoKeyboardArrowDown
});
```

Import the icon name, prefixed with `ico`, in camelCase
(library: https://material.io/icons/)

```HTML
<ul>
  <li><ico name="close"></ico></li>
  <li><ico name="down" size="18" color="#f00"></ico></li> <!-- red icon -->
</ul>
```

### Example

http://paulcollett.github.io/vue-ico/demo/

### Need anything more?

We're aiming for simplicity with this package, that means, ready-to-go browser support and simplistic bundling. If you need more control and willing to get your hands dirty around your bundler, take a look at this comprehensive library:

https://www.npmjs.com/package/ceri-icon

### Issues, Suggestions, Contributing

https://github.com/paulcollett/vue-ico
