import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen() {
  const router = useRouter();

  const handleDone = async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");
    router.replace("/home");
  };

  return (
    <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={require("../../assets/images/react-logo.png")}
              style={{ width: 100, height: 100 }}
            />
          ),
          title: "Welcome",
          subtitle: "Welcome to the first slide of the Onboarding Swiper.",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={require("../../assets/images/react-logo.png")}
              style={{ width: 100, height: 100 }}
            />
          ),
          title: "Learn Fast",
          subtitle: "Swipe to learn more about our app.",
        },
      ]}
    />
  );
}
