import { RedisOptions } from 'ioredis';
import { CacheConfigProps } from '@config/protocols/configProtocols';

export default {
  driver: 'redis',

  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASS || undefined,
    },
  },
} as CacheConfigProps;
