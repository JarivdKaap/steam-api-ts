type LargeCapsule = {
  id: number;
  type: number;
  name: string;
  discounted: boolean;
  discount_percent: number;
  original_price?: number;
  final_price: number;
  currency: string;
  large_capsule_image: string;
  small_capsule_image: string;
  windows_available: boolean;
  mac_available: boolean;
  linux_available: boolean;
  streamingvideo_available: boolean;
  url: string;
  header_image: string;
  headline: string;
  controller_support: string;
};

type FeaturedWin = {
  id: number;
  type: number;
  name: string;
  discounted: boolean;
  discount_percent: number;
  original_price: number;
  final_price: number;
  currency: string;
  large_capsule_image: string;
  small_capsule_image: string;
  windows_available: boolean;
  mac_available: boolean;
  linux_available: boolean;
  streamingvideo_available: boolean;
  header_image: string;
  controller_support: string;
  discount_expiration?: number;
};

type FeaturedMac = {
  id: number;
  type: number;
  name: string;
  discounted: boolean;
  discount_percent: number;
  original_price?: number;
  final_price: number;
  currency: string;
  large_capsule_image: string;
  small_capsule_image: string;
  windows_available: boolean;
  mac_available: boolean;
  linux_available: boolean;
  streamingvideo_available: boolean;
  header_image: string;
  controller_support: string;
};

type FeaturedLinux = {
  id: number;
  type: number;
  name: string;
  discounted: boolean;
  discount_percent: number;
  original_price?: number;
  final_price: number;
  currency: string;
  large_capsule_image: string;
  small_capsule_image: string;
  windows_available: boolean;
  mac_available: boolean;
  linux_available: boolean;
  streamingvideo_available: boolean;
  header_image: string;
  controller_support: string;
};

export default interface FeaturedGames {
  large_capsules: LargeCapsule[];
  featured_win: FeaturedWin[];
  featured_mac: FeaturedMac[];
  featured_linux: FeaturedLinux[];
  layout: string;
  status: number;
}
