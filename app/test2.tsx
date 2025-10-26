import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    console.log('Next slide');
  };

  const handleSkip = () => {
    console.log('Skip onboarding');
  };

  return (
    <View className="flex-1 bg-[#FFF8E7] items-center justify-center p-4">
      <View className="w-[375px] h-[812px] bg-[#FFF8E7] rounded-2xl items-center px-6 py-12">
        {/* Logo */}
        <Text className="font-sunshiney text-2xl text-gray-700 opacity-80 mb-8">CapdeCours</Text>

        {/* Camera Illustration */}
        <View className="my-8">
          <Image
            source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/beb30b9262635cc6fa5f5431ce08525518657d78?width=632' }}
            className="w-[316px] h-[316px]"
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text className="font-bold text-2xl text-[#5A4035] text-center mb-6 mt-4">In-App Camera</Text>

        {/* Description */}
        <Text className="text-base text-gray-500 text-center leading-6 max-w-[320px] mb-8">
          Use our dedicated camera. Photos are saved directly to our system, keeping them separate from your phone's personal photo gallery.
        </Text>

        {/* Slide Indicators */}
        <View className="flex-row gap-2 mb-8">
          <View className="w-2.5 h-2.5 rounded-full bg-[#C85A54]" />
          <View className="w-2.5 h-2.5 rounded-full bg-[#32343E]" />
          <View className="w-2.5 h-2.5 rounded-full bg-[#32343E]" />
          <View className="w-2.5 h-2.5 rounded-full bg-[#32343E]" />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={handleNext}
          className="w-[327px] h-[62px] bg-[#5A4035] opacity-80 rounded-xl items-center justify-center mb-4"
          activeOpacity={0.8}
        >
          <Text className="font-bold text-sm text-white uppercase tracking-wide">Next</Text>
        </TouchableOpacity>

        {/* Skip Link */}
        <TouchableOpacity onPress={handleSkip}>
          <Text className="text-base text-gray-500">Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
