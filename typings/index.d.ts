import 'egg';

declare module 'egg' {
  interface Application {
    jwt: any;
  }

  interface Login {
    username: string;
    password: string;
  }
}