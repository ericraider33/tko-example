# tko-example
Example of replacing KO with TKO using modern tools like webpack and ES6 modules

To run example
```
cd /dev/tko-example
static 
```
Then navigate to http://localhost:8080/ in browser.

To rebuild bundles, 
```
# make sure webpack is on version 5
npm install -g webpack@latest
npm install -g webpack-cli@latest
npm list -g --depth 0

# build bundle
cd /dev/tko-example/sampleH
webpack --config=index.config.js
```
