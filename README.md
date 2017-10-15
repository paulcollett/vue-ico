Note: is a current WIP
# vue-ico
Google Material Icons for Vue

#### https://material.io/icons/

Dead simple Icons
```HTML
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/vue-icon"></script>
```
```HTML
<ul>
  <li><i v-icon:my-icon-name /></li>
  <li><i v-icon.24:my-icon-name /></li>
</ul>
```
Specify the name as snake (library: https://material.io/icons/)

### Bundling?

- Simply outputs svg
- Bundles only the icons you need

```JS
import VueIco from 'vue-ico'
Vue.use(VueIco)
```
