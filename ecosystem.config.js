module.exports = {
  apps: [
    {
      name: 'spades-empire',
      script: '.output/server/index.mjs',
      cwd: '/home/partner/sites/spinempirecasino.de',
      env: {
        PORT: 3001,
        HOST: '127.0.0.1',
        NODE_ENV: 'production'
      }
    }
  ]
};
