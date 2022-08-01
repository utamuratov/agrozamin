import { DOCUMENT } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Select, Store } from '@ngxs/store';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import {
  AuthState,
  BaseService,
  Constants,
  Data,
  IdName,
  Language,
  LanguageState,
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
  selectedCategoryOrAnnouncement!: Category | Announcement;

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

  visibleLocationDrawer = false;
  visibleLangDrawer = false;

  panels = [
    {
      name: 'Андижанская область',
    },
    {
      name: 'Бухарская область',
    },
    {
      name: 'Джизакская область',
    },
    {
      name: 'Каракалпакстан',
    },
    {
      name: 'Кашкадарьинская область',
    },
    {
      name: 'Навоийская область',
    },
    {
      name: 'Наманганская область',
    },
    {
      name: 'Самаркандская область',
    },
    {
      name: 'Сурхандарьинская область',
    },
    {
      name: 'Сырдарьинская область',
    },
    {
      name: 'Ташкентская область',
    },
    {
      name: 'Ферганская область',
    },
    {
      name: 'Хорезмская область',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private $jwtHelper: JwtHelperService,
    private $store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private $base: BaseService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.getRegionsWithDistricts();
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

  change(value: boolean): void {
    console.log(value);
  }

  openLocationDrawer(): void {
    this.visibleLocationDrawer = true;
  }

  closeLocationDrawer(): void {
    this.visibleLocationDrawer = false;
  }

  openLangDrawer(): void {
    this.visibleLangDrawer = true;
  }

  closeLangDrawer(): void {
    this.visibleLangDrawer = false;
  }

  openTabDrawer() {
    this.visibleSecondaryCatalogue = true;
    console.log('hello');
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
    this.navigateToAnnouncement(announcement);
  }

  /**
   *
   * @param announcement
   */
  navigateToAnnouncement(announcement: Announcement) {
    this.router.navigate([
      prefixPath,
      Constants.DEFAULT_LANGUAGE_CODE,
      AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS,
      announcement.category.id,
      announcement.id,
    ]);
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
  clickRegionOrDistrictFromMobile(data: NzSafeAny) {
    // Category | Announcement
    this.closeMobileSearchDrawer();
    this.closeBurgerMenu();

    if (data.parents) {
      // CATEGORY
      this.navigateToCategory(data);
    } else {
      // ANNOUNCEMENT
      this.navigateToAnnouncement(data);
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

    if (searchText.length === 0) {
      this.searchResult$ = of();
      this.isOpenSearchResults = false;
      return;
    }
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
    const regionDistrict = this.selectedRegionAndDistrict.split(
      AdvertisementConstants.SPLITTER
    );

    if (regionDistrict[1]) {
      query = query.append('district_id', regionDistrict[1]);
    } else if (regionDistrict[0]) {
      query = query.append('region_id', regionDistrict[0]);
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

  /**
   *
   */
  getRegionsWithDistricts() {
    this.region$ = this.$base
      .get<RegionWithDistrict[]>('region/with-district')
      .pipe(map((result) => result.data));
  }
}
