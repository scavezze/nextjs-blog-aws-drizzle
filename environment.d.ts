declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    DATABASE_URL: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
  }
}
