export default interface Server {
  addr: string;
  gmsindex: number;
  appid: number;
  gamedir: string;
  region: number;
  secure: boolean;
  lan: boolean;
  gameport: number;
  specport: number;
}
