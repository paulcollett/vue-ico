var fs = require('fs');
var glob = require('glob');
var iconsDir = require('material-design-icons/index.js').STATIC_PATH;

function es2015Line(name, svg) {
  name = name.replace(/^[a-z]/, a => a.toUpperCase());
  return `export const ico${name} = (s, c) => icoWrapper('${svg}', s, c);\n`;
}

function modulePathsToManifest(paths) {
  let es2015LibContents = 'import ModDefault, {icoWrapper} from "../src/module.js"; export default ModDefault;\n';
  const icons = {};

  paths.forEach(path => {
    const fileName = path.match(/\/ic_(.+)_.+\.svg$/)[1];
    const fileNameCamelCase = fileName.replace(/_([a-z])/g, (a, b) => b.toUpperCase());

    if(fileName) {
      // Skip duplicate named icons (eg. rvHookup)
      if(icons[fileNameCamelCase]) {
        return;
      }

      const svgInners = fs.readFileSync(path, 'utf8').match(/<svg.+>(.+?)<\/svg>/)[1];
      
      icons[fileNameCamelCase] = svgInners;

      es2015LibContents += es2015Line(fileNameCamelCase, svgInners);
    }
  });

  fs.writeFile(__dirname + '/../lib/icons-browser.js', 'export default ' + JSON.stringify(icons, null, '  '), () => {});
  fs.writeFile(__dirname + '/../lib/icons-module.js', es2015LibContents, () => {});
}

glob(iconsDir + "/*/svg/production/*_24px.svg", (er, files) =>  modulePathsToManifest(files));
