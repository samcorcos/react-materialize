Package.describe({
  name: 'samcorcos:react-materialize',
  version: '0.0.1',
  summary: 'react-materialize: Material design components for react, powered by materializecss',
  git: 'https://github.com/samcorcos/react-materialize',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.4.3',
  'react-materialize-real': '0.12.0'
})

Package.onUse(function(api) {
  api.use(['react@0.1.7', 'cosmos:browserify@0.5.0']);
  api.imply(['react@0.1.7']);

  api.add_files([
    'react-materialize.browserify.options.json',
    'react-materialize.browserify.js'
  ]);

  api.export('ReactMaterialize');
});
