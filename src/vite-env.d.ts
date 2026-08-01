/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOOPS_FORM_ENDPOINT: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}