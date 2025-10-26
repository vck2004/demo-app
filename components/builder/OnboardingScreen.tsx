import React from "react";
import { View, SafeAreaView } from "react-native";
import { OnboardingHeader } from "./OnboardingHeader";
import { OnboardingContent } from "./OnboardingContent";
import { SlideIndicators } from "./SlideIndicators";
import { OnboardingButton } from "./OnboardingButton";

interface OnboardingScreenProps {
  onNext?: () => void;
  onSkip?: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  onNext = () => {},
  onSkip = () => {},
}) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <OnboardingHeader title="CapdeCours" />

        <OnboardingContent
          title="Sync Timetable"
          description="Connect with your Google Calendar. This allows the app to recognize the subject and automatically organize your photos."
          imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/834b4a6f91fff7f30f72bcd60a3729854b5490e9?width=600"
        />

        <View className="pb-8">
          <View className="mb-8">
            <SlideIndicators currentSlide={1} totalSlides={4} />
          </View>

          <View className="mb-4">
            <OnboardingButton title="NEXT" onPress={onNext} />
          </View>

          <OnboardingButton title="Skip" onPress={onSkip} variant="secondary" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
