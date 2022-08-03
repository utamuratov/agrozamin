import { DOCUMENT } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Select, Store } from '@ngxs/store';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import {
  AuthState,
  BaseService,
  Constants,
  Data,
  IdName,
  Language,
  LanguageState,
  LocalStorageUtilit,
} from 'ngx-az-core';
import { AuthorizedUserModel } from 'projects/ngx-az-core/src/public-api';
import { finalize, map, Observable, of } from 'rxjs';
import { AdvertisementConstants } from '../../../core/constants/advertisement.constants';
import { prefixPath } from '../../../core/utilits/advertisement.utilits';
import { RegionWithDistrict } from './dto/region-with-district.interface';
import { Announcement, Category, SearchResponse } from './dto/search.response';

@Component({
  selector: 'az-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  /**
   *
   */
  @ViewChild('toggleInput')
  toggleInput?: ElementRef;

  /**
   *
   */
  @ViewChild('searchMenu')
  searchMenu?: ElementRef;

  /**
   *
   */
  AGRO_ID_ROUTE = Constants.AGROID_ROUTE_PATH;

  /**
   *
   */
  @Select(AuthState.authorizedUser)
  authorizedUser$!: Observable<AuthorizedUserModel>;

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  @Select(LanguageState.currentLanguage)
  currentLanguage$!: Observable<string>;

  /**
   *
   */
  public get userRegionOrDistrict(): IdName | undefined {
    const regionOrDistrict = LocalStorageUtilit.get(
      AdvertisementConstants.USER_REGION_OR_DISTRICT
    );
    if (regionOrDistrict) {
      return JSON.parse(regionOrDistrict);
    }
    return undefined;
  }
  public set userRegionOrDistrict(v: IdName | undefined) {
    LocalStorageUtilit.set(
      AdvertisementConstants.USER_REGION_OR_DISTRICT,
      JSON.stringify(v)
    );
  }

  /**
   *
   */
  isUserAuthenticated = true;

  /**
   *
   */
  visibleMainCatalogue = false;

  /**
   *
   */
  visibleSecondaryCatalogue = false;

  /**
   *
   */
  drawerWidthValue!: string;

  /**
   *
   */
  drawerWidthValueCatalog!: string;

  /**
   *
   */
  drawerOffsetValue = 280;

  /**
   *
   */
  searchResult$!: Observable<SearchResponse>;

  /**
   *
   */
  region$!: Observable<RegionWithDistrict[]>;

  /**
   *
   */
  isOpenSearchResults = false;

  /**
   *
   */
  isOpenRegions = false;

  /**
   *
   */
  districts: IdName[] = [];
  regionId!: number;

  /**
   *
   */
  selectedDistrict?: IdName;

  /**
   *
   */
  selectedRegion?: RegionWithDistrict;

  /**
   *
   */
  selectedRegionAndDistrict!: string;

  /**
   *
   */
  searchText = '';

  /**
   *
   */
  isOpenBurgerMenu = false;

  /**
   *
   */
  isLoadingSearchResult!: boolean;

  /**
   *
   */
  isVisibleMobileSearchDrawer = false;

  /**
   *
   */
  isOpenSearchResult = false;

  /**
   *
   */
  isVisibleAddressModal = false;

  /**
   *
   */
  isVisibleAddressMobileDrawer = false;

  /**
   *
   */
  isVisibleLanguageDrawer = false;

  //!

  /* AZ-DRAWER */
  /* ************************** */

  /**
   *
   */
  isVisibleProfilePopupLg = false;
  isVisibleProfilePopupMd = false;
  isVisibleProfilePopupSm = false;
  isVisibleProfilePopupDrawer = false;

  /**
   *
   */
  readonly SERVICES = Data.SERVICES;

  constructor(
    private fb: FormBuilder,
    private $jwtHelper: JwtHelperService,
    private $store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private $base: BaseService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.getRegionsWithDistricts();
    /**
     * This events get called by all clicks on the page
     */
    this.renderer.listen('window', 'click', (e: Event) => {
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if (
        e.target !== this.toggleInput?.nativeElement &&
        e.target !== this.searchMenu?.nativeElement
      ) {
        this.isOpenSearchResult = false;
      }
    });
  }

  /**
   *
   */
  private calcDrawersSettings() {
    this.drawerWidthValue = this.azDrawerWidth();
    this.drawerWidthValueCatalog = this.azDrawerWidthCatalog();
    this.drawerOffsetValue = this.azDrawerOffsetCatalog();
  }

  /**
   *
   * @returns
   */
  private azDrawerWidthCatalog(): string {
    if (window.innerWidth > 575) {
      return '280px';
    }
    return '100%';
  }

  /**
   *
   * @returns
   */
  private azDrawerOffsetCatalog(): number {
    if (window.innerWidth > 575) {
      return 280;
    }
    return 0;
  }

  /**
   *
   * @returns
   */
  private azDrawerWidth(): string {
    if (window.innerWidth >= 992) {
      return '470px';
    }

    if (window.innerWidth >= 768 && window.innerWidth < 992) {
      return '374px';
    }

    if (window.innerWidth > 575 && window.innerWidth < 768) {
      return '315px';
    }

    return '100%';
  }

  /**
   *
   */
  private checkUserToAuthenticated() {
    this.isUserAuthenticated = !this.$jwtHelper.isTokenExpired();
  }

  /**
   *
   */
  ngOnInit(): void {
    this.checkUserToAuthenticated();
    this.calcDrawersSettings();
  }

  /**
   *
   */
  openMainCatalogue(): void {
    this.visibleMainCatalogue = true;
  }

  /**
   *
   */
  openSecondaryCatalogue(): void {
    this.visibleSecondaryCatalogue = true;
  }

  /**
   *
   */
  openLanguageDrawer(): void {
    this.isVisibleLanguageDrawer = true;
  }

  /**
   *
   */
  closeLanguageDrawer(): void {
    this.isVisibleLanguageDrawer = false;
  }

  /**
   *
   */
  openAddressMobileDrawer(): void {
    this.isVisibleAddressMobileDrawer = true;
  }

  /**
   *
   */
  closeAddressMobileDrawer(): void {
    this.isVisibleAddressMobileDrawer = false;
  }

  /**
   *
   */
  openMobileSearchDrawer(): void {
    this.isVisibleMobileSearchDrawer = true;
  }

  /**
   *
   */
  closeMobileSearchDrawer(): void {
    this.isVisibleMobileSearchDrawer = false;
  }

  /**
   *
   */
  openBurgerMenu(): void {
    this.isOpenBurgerMenu = true;
  }

  /**
   *
   */
  closeBurgerMenu(): void {
    this.isOpenBurgerMenu = false;
  }

  /**
   *
   * NAVIGATE TO SIGN-IN SCREEN
   */
  navigateToSignIn() {
    this.document.location.pathname = `/${Constants.AGROID_ROUTE_PATH}`;
  }

  /**
   *
   * @param urls
   */
  navigateTo(urls: string[]) {
    this.isVisibleProfilePopupLg = false;
    this.isVisibleProfilePopupMd = false;
    this.isVisibleProfilePopupSm = false;
    this.isVisibleProfilePopupDrawer = false;
    this.router.navigate(urls, { relativeTo: this.route });
  }

  /**
   *
   */
  logout() {
    // TODO: DO LOGOUT
    this.navigateToSignIn();
  }

  /**
   *
   */
  closeRegions() {
    this.isOpenRegions = false;
  }

  /**
   *
   */
  private openRegions() {
    this.isOpenRegions = true;
  }

  /**
   *
   */
  closeSearchResults() {
    this.isOpenSearchResults = false;
  }

  /**
   *
   */
  private openSearchResults() {
    this.isOpenSearchResults = true;
  }

  /**
   *
   * @param category
   * @returns
   */
  private makeCategoryId(category: Category) {
    let categoryId = category.parents
      .map((c) => c.category_id)
      .join(AdvertisementConstants.SPLITTER_CATEGORY_ID);
    if (categoryId.length > 0) {
      categoryId += AdvertisementConstants.SPLITTER_CATEGORY_ID;
    }
    categoryId += category.id;
    return categoryId;
  }

  /**
   *
   */
  closeSearchResultsAndRegions() {
    this.closeSearchResults();
    this.closeRegions();
  }

  /**
   *
   */
  openRegionDropdown() {
    if (this.isOpenSearchResults) {
      this.isOpenSearchResults = false;
    }
    this.isOpenRegions = true;
  }

  /**
   *
   */
  openisOpenSearchResults() {
    if (this.isOpenRegions) {
      this.isOpenRegions = false;
    }
    this.isOpenSearchResults = true;
  }

  /**
   *
   * @param region
   */
  chooseRegion(region: RegionWithDistrict) {
    this.selectedDistrict = undefined;
    this.selectedRegion = region;
    this.selectedRegionAndDistrict = `${region.id}`;
    this.closeRegions();
    this.openSearchResults();
    this.search(this.searchText);
  }

  /**
   *
   * @param district
   */
  chooseDistrict(district: IdName) {
    this.selectedRegion = undefined;
    this.selectedDistrict = district;
    this.selectedRegionAndDistrict = `${this.regionId}${AdvertisementConstants.SPLITTER}${district.id}`;
    this.closeRegions();
    this.openSearchResults();
    this.search(this.searchText);
  }

  /**
   *
   * @param announcement
   */
  clickAnnouncementFromDesctop(announcement: Announcement) {
    this.closeSearchResults();
    this.navigateToAnnouncementsBySerchtext(announcement);
  }

  /**
   *
   * @param announcement
   */
  navigateToAnnouncementsBySerchtext(announcement: Announcement) {
    const regionDistrict = this.splitRegionAndDistrict();
    const queryParams: Params = {
      [AdvertisementConstants.QUERY_PARAM_SEARCHTEXT]: announcement.name,
    };

    if (regionDistrict[1]) {
      queryParams[AdvertisementConstants.QUERY_PARAM_DISTRICT_ID] =
        regionDistrict[1];
    } else if (regionDistrict[0]) {
      queryParams[AdvertisementConstants.QUERY_PARAM_REGION_ID] =
        regionDistrict[0];
    }

    this.router.navigate(
      [
        prefixPath,
        Constants.DEFAULT_LANGUAGE_CODE,
        AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS,
      ],
      {
        queryParams,
      }
    );
  }

  /**
   *
   * @param category
   */
  clickCategoryFromDesctop(category: Category) {
    this.closeSearchResults();
    this.navigateToCategory(category);
  }

  /**
   *
   * @param category
   */
  navigateToCategory(category: Category) {
    const categoryId = this.makeCategoryId(category);
    this.router.navigate([
      prefixPath,
      Constants.DEFAULT_LANGUAGE_CODE,
      AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS,
      categoryId,
    ]);
  }

  /**
   *
   * @param data
   */
  clickCategoryFromMobile(data: Category) {
    this.closeMobileSearchDrawer();
    this.closeBurgerMenu();
    this.navigateToCategory(data);
  }

  /**
   *
   * @param data
   */
  clickAnnouncementFromMobile(data: Announcement) {
    this.closeMobileSearchDrawer();
    this.closeBurgerMenu();
    this.navigateToAnnouncementsBySerchtext(data);
  }

  /**
   *
   * @param e
   */
  inputSearch(e: NzSafeAny) {
    const searchText = e.target.value;
    if (searchText) {
      this.inputSearchText(searchText);
    }
  }

  /**
   *
   * @param e
   */
  inputSearchText(searchText: string) {
    if (searchText.length >= 2) {
      this.openisOpenSearchResults();
      this.search(searchText);
      return;
    }

    this.searchResult$ = of();
    this.isOpenSearchResults = false;
    return;
  }

  /**
   *
   * @param id
   */
  getDistricts(districts: IdName[], regionId: number) {
    this.districts = districts;
    this.regionId = regionId;
  }

  /**
   *
   * @param searchText
   * @returns
   */
  search(searchText: string) {
    let query = new HttpParams().set('q', searchText);
    const regionDistrict = this.splitRegionAndDistrict();

    if (regionDistrict?.[1]) {
      query = query.append(
        AdvertisementConstants.QUERY_PARAM_DISTRICT_ID,
        regionDistrict[1]
      );
    } else if (regionDistrict?.[0]) {
      query = query.append(
        AdvertisementConstants.QUERY_PARAM_REGION_ID,
        regionDistrict[0]
      );
    }

    this.isLoadingSearchResult = true;
    this.searchResult$ = this.$base
      .get<SearchResponse>('announcement/search', query)
      .pipe(
        finalize(() => (this.isLoadingSearchResult = false)),
        map((result) => {
          return {
            ...result.data,
            total:
              result.data.announcements.length + result.data.categories.length,
          };
        })
      );
  }

  private splitRegionAndDistrict() {
    return this.selectedRegionAndDistrict?.split(
      AdvertisementConstants.SPLITTER
    );
  }

  /**
   *
   */
  getRegionsWithDistricts() {
    this.region$ = this.$base
      .get<RegionWithDistrict[]>('region/with-district')
      .pipe(map((result) => result.data));
  }

  /**
   *
   * @param regionOrDistrict
   */
  chooseRegionOrDistrict(regionOrDistrict: IdName) {
    this.closeAddressModal();
    this.userRegionOrDistrict = regionOrDistrict;
  }

  /**
   *
   */
  closeAddressModal() {
    this.isVisibleAddressModal = false;
  }

  /**
   *
   */
  @HostListener('window:resize')
  onResize() {
    this.drawerWidthValue = this.azDrawerWidth();
    this.drawerWidthValueCatalog = this.azDrawerWidthCatalog();
    this.drawerOffsetValue = this.azDrawerOffsetCatalog();
  }
}
