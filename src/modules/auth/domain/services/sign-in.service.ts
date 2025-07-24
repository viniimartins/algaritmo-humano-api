namespace ISignIn {
  export interface Request {
    email: string;
    password: string;
  }

  export interface Response {
    token: string;
  }
}

interface ISignInService {
  execute(params: ISignIn.Request): Promise<ISignIn.Response>;
}

export { ISignIn, ISignInService };
