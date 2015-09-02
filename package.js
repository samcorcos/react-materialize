Package.describe({
  name: 'samcorcos:react-materialize',
  version: '0.0.1',
  summary: 'react-materialize: Material design components for react, powered by materializecss',
  git: 'https://github.com/samcorcos/react-materialize',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(["universe:modules@0.4.1"]);
  api.addFiles([
    "bower_components/react-materialize/src/index.import.js",
    "main.import.js",
    "test.js"
  ])
  api.export("ReactMaterialize")
});
