Package.describe({

    name: 'taskputty:underscore.string',
    summary: 'underscore.string packaging compatible usable from Meteor packages. Official version is broken',
    version: '3.0.3',
    git: 'https://github.com/taskputty/underscore.string.git',
    documentation: 'README.markdown'

});

Package.on_use(function (api) {

    Npm.depends({
        'underscore.string': "3.0.3"
    });

    api.addFiles('underscore-string.js');
    api.export("s");

});