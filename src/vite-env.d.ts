/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IOS_APP_STORE_ID?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}