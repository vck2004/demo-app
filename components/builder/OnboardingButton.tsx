import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface OnboardingButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

export const OnboardingButton: React.FC<OnboardingButtonProps> = ({
  title,
  onPress,
  variant = "primary",
}) => {
  if (variant === "secondary") {
    return (
      <TouchableOpacity onPress={onPress} className="py-4">
        <Text className="text-gray-600 text-base font-medium text-center">
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-pink-600 rounded-lg py-4 px-8 mx-6"
    >
      <View className="flex-row justify-center items-center">
        <Text className="text-white text-base font-bold tracking-wider">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
