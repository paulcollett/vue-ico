# vue-ico
Google Material Icons for Vue

#### https://material.io/icons/

**Dead simple Icons**
```HTML
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/vue-icon"></script>
```
```HTML
<ul>
  <li><i v-ico:playlist-add /></li> <!-- outputs the playlist-add icon -->
  <li><i v-ico:playlist-add.18 /></li> <!-- control the size -->
</ul>
```
Specify the icon name as kebab or camel case
(library: https://material.io/icons/)

### Bundling?

- Simply outputs the svg
- Bundles only the icons you need

```JS
import {icoMyIconName, icoAnotherName} from 'vue-ico'
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

We're aiming for simplicity with this package, that means, ready-to-go browser support and simplistic bundling. If you need more control and willing to get configuring your bundler take a look at the comprehensive library:

https://www.npmjs.com/package/ceri-icon
