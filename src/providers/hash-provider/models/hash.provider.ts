interface IHashProvider {
  hash(raw: string): Promise<string>;
  compare(raw: string, hash: string): Promise<boolean>;
}

export { IHashProvider };
