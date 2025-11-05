import AsyncStorage from "@react-native-async-storage/async-storage";
import { Home, Plus, Settings, User } from "lucide-react-native"; // icon pack nhẹ
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
	const [selected, setSelected] = useState("Home");

	return (
		<View className="flex-1 bg-white">
			{/* Header */}
			<View className="w-full py-4 bg-indigo-500 items-center justify-center shadow-md">
				<Text className="text-white text-2xl font-semibold top-5">My Simple App</Text>
			</View>

			{/* Main content */}
			<View className="flex-1 items-center justify-center">
				<Text className="text-lg text-gray-700">
					{selected === "Home" ? "Welcome to the Home Screen!" : selected === "Profile" ? "This is your profile." : "Adjust your preferences here."}
				</Text>
			</View>

			{/* Floating Action Button */}
			<TouchableOpacity className="absolute bottom-20 right-6 bg-indigo-500 rounded-full p-4 shadow-lg" onPress={() => alert("Add something new!")}>
				<Plus color="white" size={28} />
			</TouchableOpacity>

			{/* Bottom navigation bar */}
			<View className="flex-row justify-around items-center py-3 bg-gray-100 border-t border-gray-200">
				<TouchableOpacity onPress={() => setSelected("Home")} className="items-center">
					<Home color={selected === "Home" ? "#8e88ff" : "gray"} />
					<Text className={`text-sm ${selected === "Home" ? "text-indigo-500" : "text-gray-500"}`}>Home</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => setSelected("Profile")} className="items-center">
					<User color={selected === "Profile" ? "#8e88ff" : "gray"} />
					<Text className={`text-sm ${selected === "Profile" ? "text-indigo-500" : "text-gray-500"}`}>Profile</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => setSelected("Settings")} className="items-center">
					<Settings color={selected === "Settings" ? "#8e88ff" : "gray"} />
					<Text className={`text-sm ${selected === "Settings" ? "text-indigo-500" : "text-gray-500"}`}>Settings</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={async () => {
						await AsyncStorage.removeItem("hasSeenOnboarding");
						alert("Đã reset Onboarding. Khởi động lại app để xem lại!");
					}}
					className="mt-4 bg-indigo-500 px-4 py-2 rounded-full"
				>
					<Text className="text-white">Reset Onboarding</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
