export enum CabinetMenu {
  advertisements = 'advertisements',
  messages = 'messages',
  favourites = 'favourites',
  support = 'support',
}

export const CabinetMenuList = Object.keys(CabinetMenu).map((value) => {
  return {
    name: value,
    value,
  };
});
