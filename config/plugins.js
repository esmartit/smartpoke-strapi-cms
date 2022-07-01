module.exports = ({ env }) => {  

  return {
    'kafka-websocket': {
        enabled: true,
        resolve: './src/plugins/kafka-websocket'
      },    
    'kafka-plugin': {
      enabled: true,
      resolve: './src/plugins/kafka-plugin'
    },    
  }
}