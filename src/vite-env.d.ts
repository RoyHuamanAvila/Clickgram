/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_DATABASE_URL: string;
  readonly VITE_TEST_EMAIL: string;
  readonly VITE_TEST_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
