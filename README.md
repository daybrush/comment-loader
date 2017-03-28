# Comment Loader for webpack

## Downloads and Installation

### Installation with npm

The following code shows how to install **comment-loader** using npm.

```bash
$ npm install git+https://github.com/daybrush/comment-loader.git
```


## Usage


use comment ** /*@ .... */ **

comment-loader remove comment ** /*@  ...  */ ** for ES6 test







### example.js
``` javascript
/*@export default */class Test {
    //......
}


```


### webpack
``` javascript
var ExportPlugin = require("es6-export-plugin");
module.exports = {
    entry: 'example.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist/",
    },
    module: {
        loaders:  [
            {
                test:  /\.js$/,
                loader: 'comment-loader'
            }
        ]
    }
}
```


### compile
``` javascript
export default class Test {
    //......
}
```



## License

MIT (http://www.opensource.org/licenses/mit-license.php)
