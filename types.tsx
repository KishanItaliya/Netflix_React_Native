export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  ComingSoon: undefined;
  Search: undefined;
  Downloads: undefined;
};

export type HomeParamList = {
  Home: undefined;
  MovieDetailsScreen: undefined;
};

export type TabTwoParamList = {
  ComingSoon: undefined;
};

export type TabThreeParamList = {
  Search: undefined;
};

export type TabFourParamList = {
  Downloads: undefined;
};

export type Episode = {
  id: string;
  title: string;
  poster: string;
  duration: string;
  plot: string;
  video: string;
};
