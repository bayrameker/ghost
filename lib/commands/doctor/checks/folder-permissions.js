'use strict';

const checkPermissions = require('./check-permissions');

module.exports = {
    title: 'Checking folder permissions',
    enabled: (ctx) => {
        const instance = ctx.system.getInstance();
        const isLocal = instance.process.name === 'local' ? true : false;

        return !isLocal;
    },
    task: () => checkPermissions('folder'),
    category: ['start', 'update']
};