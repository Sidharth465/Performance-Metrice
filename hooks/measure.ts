import { Dimensions, PixelRatio } from "react-native";

export const scale = (size: number) => {
  const width = Dimensions.get("window").width;
  const pixelRatio = PixelRatio.get();
  return (size * pixelRatio) / (width / 375);

  //   return size * pixelRatio;    its also working well
};
