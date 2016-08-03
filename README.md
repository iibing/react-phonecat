# React Phonecat

## Overview

This is an Phonecat application rewroted by using react

## Prerequisites


```
npm i -g cross-env
```


### Installing Dependencies

You can install these by running:

```
npm install
```

### Running the Application during Development

- Run `npm run hmr` to start the application in HMR mode.
- Navigate your browser to [http://localhost:3000/](http://localhost:8000/) to see the application 

## Application Directory Layout

```  
assets/                     --> all resources files (js/css/images)
    img/...                 --> images file
    js/...                  --> js files
    styles/...
config/
    index.js                --> common configuration for the app
    log4js.config.js        --> log4js configuration
    webpack.config.js       --> webpack configuration (including dev and production)
logs/...                    --> log files generated by log4js
node_modules/...            --> development tools (fetched using `npm`)
pages/...                   --> html file generated by webpack html plugin
src/
    client/
        actions/...         --> redux actions
        components/...      --> react components
        constants           --> constants 
        containers          --> container to connect the store
        img                 --> Phone images
        reducers            --> redux reducers
        store               --> combine all reducers into
        styles              --> css files
        templates           --> html templates
        main.jsx            --> app entry
    server/
        data/...            --> json files store all phones data
        routers/...         --> routers
        utils/...           
        app.js              --> server (including webpack dev server and production server)
.eslintignore               --> eslint ingore file
.eslintrc.js                --> eslint rules
.gitignore
package.json                --> Node.js specific metadata, including development tools dependencies        
```


Having Fun! :)




