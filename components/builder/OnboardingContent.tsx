import React from "react";
import { View, Text, Image } from "react-native";

interface OnboardingContentProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const OnboardingContent: React.FC<OnboardingContentProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="mb-8">
        <Image
          source={{ uri: imageUrl }}
          className="w-64 h-64"
          resizeMode="contain"
        />
      </View>

      <View className="mb-6">
        <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
          {title}
        </Text>
      </View>

      <View className="mb-8">
        <Text className="text-base text-gray-600 text-center leading-6 px-4">
          {description}
        </Text>
      </View>
    </View>
  );
};
