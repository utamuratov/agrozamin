export interface SupportChatResponse {
  created_at: Date;
  file?: null | string;
  owner: boolean;
  text?: string;

  // for model
  isLoading?: boolean;
  hasError?: boolean;
  fileNotSended?: File;
  textNotSended?: string;
  deleted?: boolean;
}
