System.config({
    packages: {
        materialize: {
            main: 'main',
            format: 'register',
            map: {
                '.': System.normalizeSync('{samcorcos:react-materialize}')
            }
        }
    }
});
