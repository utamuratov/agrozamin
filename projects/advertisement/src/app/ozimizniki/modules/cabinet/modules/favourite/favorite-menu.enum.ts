export enum FavoriteMenu {
  advertisements = 'advertisements',
  sellers = 'sellers',
  filterOptions = 'filterOptions',
}

export const FavoriteMenuList = Object.keys(FavoriteMenu).map((value) => {
  return {
    name: value,
    value,
  };
});
