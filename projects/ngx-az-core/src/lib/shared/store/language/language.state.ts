import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Constants } from '../../../config/constants';
import { Language } from '../../../models/language.interface';
import { LocalStorageUtilit } from '../../../utilits/local-storage.utilit';
import { LanguageService } from '../../language/language.service';
import { LanguageStateModel } from './language-state.model';
import { DefaultLanguage, Languages, CurrentLanguage } from './language.action';

@State<LanguageStateModel>({
  name: 'language',
  defaults: {
    defautLanguage: LocalStorageUtilit.get(Constants.DEFAULT_LANGUAGE),
    currentLanguage: LocalStorageUtilit.get(Constants.CURRENT_LANGUAGE) ?? '',
    languages: Constants.LANGUAGES,
  },
})
@Injectable()
export class LanguageState {
  /**
   *
   * @param $language
   */
  constructor(private $language: LanguageService) {}

  /**
   *
   * @param state
   * @returns
   */
  @Selector()
  static get(state: LanguageStateModel): LanguageStateModel {
    return state;
  }

  /**
   *
   * @param state
   * @returns
   */
  @Selector()
  static languages(state: LanguageStateModel): Language[] {
    return state.languages;
  }

  /**
   *
   * @param state
   * @returns
   */
  @Selector()
  static defaultLanguage(state: LanguageStateModel): string | null {
    return state.defautLanguage;
  }

  /**
   *
   * @param state
   * @returns
   */
  @Selector()
  static currentLanguage(state: LanguageStateModel): string {
    return state.currentLanguage;
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(Languages)
  setLanguages(ctx: StateContext<LanguageStateModel>) {
    return this.$language.getLanguages().pipe(
      tap((response) => {
        if (response.success) {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            languages: [...response.data],
          });
        }
      })
    );
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(DefaultLanguage)
  setDefaultLanguage(
    ctx: StateContext<LanguageStateModel>,
    action: DefaultLanguage
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      defautLanguage: action.defaultLanguage,
    });
    LocalStorageUtilit.set(Constants.DEFAULT_LANGUAGE, action.defaultLanguage);
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(CurrentLanguage)
  setCurrentLanguage(
    ctx: StateContext<LanguageStateModel>,
    action: CurrentLanguage
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      currentLanguage: action.currentLanguage,
    });
    LocalStorageUtilit.set(Constants.CURRENT_LANGUAGE, action.currentLanguage);
  }
}
