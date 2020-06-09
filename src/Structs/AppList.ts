export type Applist = [{ appid: number; name: string }];

export type GetAppList = {
  applist: { apps: Applist };
};
