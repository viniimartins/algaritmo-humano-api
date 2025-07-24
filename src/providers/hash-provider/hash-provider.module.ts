import { Module } from '@nestjs/common';

import { HASH_PROVIDER_TOKEN } from './constants/hash-provider-token';
import { BcryptHashProvider } from './implementations/bcrypt-hash.provider';

@Module({
  providers: [
    {
      provide: HASH_PROVIDER_TOKEN,
      useClass: BcryptHashProvider,
    },
  ],
  exports: [HASH_PROVIDER_TOKEN],
})
class HashProviderModule {}

export { HashProviderModule };
