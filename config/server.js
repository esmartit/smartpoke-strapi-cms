module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', ''),
  kafka_host: env('KAFKA_HOST', 'localhost:9092'),
  kafka_enabled: env('KAFKA_ENABLED', 'true')  
});
