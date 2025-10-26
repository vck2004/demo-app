import React from "react";
import { View, Text } from "react-native";

interface OnboardingHeaderProps {
  title: string;
}

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  title,
}) => {
  return (
    <View className="items-center py-6">
      <Text className="text-2xl font-bold text-gray-800">{title}</Text>
    </View>
  );
};
