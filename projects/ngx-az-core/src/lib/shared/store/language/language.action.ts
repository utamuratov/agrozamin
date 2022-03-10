export class Languages {
  /**
   *
   */
  static readonly type = '[Languages API] Get languages';
}

export class DefaultLanguage {
  /**
   *
   */
  static readonly type = '[Languages API] Get default language';

  constructor(public defaultLanguage: string) {}
}

export class CurrentLanguage {
  /**
   *
   */
  static readonly type = '[Current language] Get default language';

  constructor(public currentLanguage: string) {}
}
