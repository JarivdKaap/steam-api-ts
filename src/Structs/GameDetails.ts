export default interface GameDetails {
  type: string;
  name: string;
  steam_appid: number;
  required_age: string;
  is_free: boolean;
  controller_support: string;
  dlc: number[];
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  supported_languages: string;
  header_image: string;
  website: string;
  pc_requirements: PcRequirements;
  mac_requirements: MacRequirements;
  linux_requirements: any[];
  legal_notice: string;
  developers: string[];
  publishers: string[];
  price_overview: PriceOverview;
  packages: number[];
  package_groups: PackageGroup[];
  platforms: Platforms;
  metacritic: Metacritic;
  categories: Category[];
  genres: Genre[];
  screenshots: Screenshot[];
  movies: Movie[];
  recommendations: Recommendations;
  achievements: Achievements;
  release_date: ReleaseDate;
  support_info: SupportInfo;
  background: string;
  content_descriptors: ContentDescriptors;
}

type PcRequirements = {
  minimum: string;
};

type MacRequirements = {
  minimum: string;
};

type PriceOverview = {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
};

type Sub = {
  packageid: number;
  percent_savings_text: string;
  percent_savings: number;
  option_text: string;
  option_description: string;
  can_get_free_license: string;
  is_free_license: boolean;
  price_in_cents_with_discount: number;
};

type PackageGroup = {
  name: string;
  title: string;
  description: string;
  selection_text: string;
  save_text: string;
  display_type: number;
  is_recurring_subscription: string;
  subs: Sub[];
};

type Platforms = {
  windows: boolean;
  mac: boolean;
  linux: boolean;
};

type Metacritic = {
  score: number;
  url: string;
};

type Category = {
  id: number;
  description: string;
};

type Genre = {
  id: string;
  description: string;
};

type Screenshot = {
  id: number;
  path_thumbnail: string;
  path_full: string;
};

type Webm = {
  480: string;
  max: string;
};

type Mp4 = {
  480: string;
  max: string;
};

type Movie = {
  id: number;
  name: string;
  thumbnail: string;
  webm: Webm;
  mp4: Mp4;
  highlight: boolean;
};

type Recommendations = {
  total: number;
};

type Highlighted = {
  name: string;
  path: string;
};

type Achievements = {
  total: number;
  highlighted: Highlighted[];
};

type ReleaseDate = {
  coming_soon: boolean;
  date: string;
};

type SupportInfo = {
  url: string;
  email: string;
};

type ContentDescriptors = {
  ids: any[];
  notes?: any;
};
