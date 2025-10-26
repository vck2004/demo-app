import { Button } from '@/components/Button';
import { removeData } from '@/utils/asyncStorage';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="m-6 uppercase font-bold text-3xl text-center">This is the homepage</Text>
      <Button title="View Onboarding Again" onPress={() => router.replace('/onboarding')} />
      <Button title="View 1" onPress={() => router.push('/test')} />
      <Button title="View 2" onPress={() => router.push('/test2')} />
      <Button title="Clear Storage" variant="danger" onPress={() => removeData('onboarded')} />
    </View>
  );
}
