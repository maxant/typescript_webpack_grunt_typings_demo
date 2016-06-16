not sure these global installs are actually needed:

    npm install -g typings
    npm install -g webpack
    npm install -g typescript

add e.g. lodash to typings:

    typings install lodash --save

run build and demo:

    npm run start

clean:

    grunt clean:dev

simple compilation: `typescript`

simple webpack: `webpack`

run tests on server after build: `lite-server`

debugging: in chrome, open `a.ts` and set breakpoints. maps work perfectly :-)

see also:

- https://angular.io/docs/ts/latest/guide/webpack.html
- https://angular.io/docs/ts/latest/quickstart.html
- http://webpack.github.io/docs/usage-with-grunt.html
- https://github.com/webpack/grunt-webpack
- http://gruntjs.com/getting-started



