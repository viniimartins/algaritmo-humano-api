import { env } from '@config/env';
import type { IHashProvider } from '@providers/hash-provider/models/hash.provider';
import { compare, hash } from 'bcryptjs';

class BcryptHashProvider implements IHashProvider {
  async hash(value: string): Promise<string> {
    const hashedValue: string = await hash(value, env.CRYPT_SALT);

    return hashedValue;
  }

  async compare(value: string, hash: string): Promise<boolean> {
    const isMatch: boolean = await compare(value, hash);
    return isMatch;
  }
}

export { BcryptHashProvider };
