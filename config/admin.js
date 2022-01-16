module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ef130a4a89c1c415e5f0a7962b7cdd2'),
  },
});
