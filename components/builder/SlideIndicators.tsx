import React from "react";
import { View } from "react-native";

interface SlideIndicatorsProps {
  currentSlide: number;
  totalSlides: number;
}

export const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  currentSlide,
  totalSlides,
}) => {
  return (
    <View className="flex-row justify-center items-center space-x-4">
      {Array.from({ length: totalSlides }, (_, index) => (
        <View
          key={index}
          className={`w-2.5 h-2.5 rounded-full ${
            index === currentSlide ? "bg-pink-600" : "bg-gray-600"
          }`}
        />
      ))}
    </View>
  );
};
