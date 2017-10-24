# vue-ico
#### Dead easy, Google Material Icons for Vue.

This package's aim is to get icons into your Vue.js project as quick as possible, at the cost of all the bells and whistles.

#### https://material.io/icons/

**Dead simple Icons**
```HTML
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/vue-icon"></script>
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

```JS
import {icoComment, icoPlaylistAdd} from 'vue-ico'
```
Import as the icon name (prefixed with ico) as camel case
(library: https://material.io/icons/)

```HTML
<ul>
  <li>{icoComment(24)}</li> <!-- function that takes the icon size -->
  <li>{icoPlaylistAdd(18, '#f00')}</li> <!-- red icon -->
</ul>
```

### Need anything more?

We're aiming for simplicity with this package, that means, ready-to-go browser support and simplistic bundling. If you need more control and willing to get your hands dirty around your bundler, take a look at this comprehensive library:

https://www.npmjs.com/package/ceri-icon

### Issues, Suggestions, Contributing

https://github.com/paulcollett/vue-ico
