import { RedisOptions } from 'ioredis';
import multer, { StorageEngine } from 'multer';

export type CacheConfigProps = {
  driver: 'redis',

  config: {
    redis: RedisOptions
  }
}

export type UploadConfigProps = {
  driver: 's3' | 'disk',

  tmpFolder: string,
  uploadsFolder: string,

  multer: {
    storage: StorageEngine
  };

  config: {
    disk: {};
    aws: {
      bucket: string
    };
  };
}

export type MailConfigProps = {
  driver: 'ethereal' | 'ses',

  defaults: {
    from: {
      email: string;
      name: string;
    }
  }
}

