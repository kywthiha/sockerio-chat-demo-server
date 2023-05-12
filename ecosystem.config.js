module.exports = {
    apps: [
        {
            name: 'Chat Demo',
            script: 'index.js',
            instances: 1,
            autorestart: true,
            watch: false,
        },
    ],
};