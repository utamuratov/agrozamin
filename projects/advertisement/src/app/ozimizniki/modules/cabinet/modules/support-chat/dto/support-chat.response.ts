export interface SupportChatResponse {
  created_at: Date;
  file?: null | string;
  owner: boolean;
  text?: string;

  // for model
  isLoading?: boolean;
  hasError?: boolean;
  fileNotLoaded?: File;
  deleted?: boolean;
}
