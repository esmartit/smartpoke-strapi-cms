'use strict';

const { Kafka } = require('kafkajs')

const initConsumer = async (strapi) => {

  const kafka = new Kafka({
    clientId: 'smartpoke-strapi-cms',
    brokers: [strapi.config.get("server.kafka_host")],
  })

  const consumer = kafka.consumer({ groupId: `smartpoke-strapi-cms-${new Date().getTime()}` })

  await consumer.connect()
  await consumer.subscribe({ topic: 'smartpoke-device-presence', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({ value: message.value.toString() })
      strapi.io.emit('smartpoke-device-presence', message.value.toString());
    },
  })
}

module.exports = ({ strapi }) => {
  initConsumer(strapi)
};
