import { View, Text, Pressable,  } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router'

export default function StudentScreen() {
    const params = useLocalSearchParams();
    const name = params.day + ' full record';
    return (
        <View>
            <Stack.Screen options={{title: name, headerBackTitle: 'Home'}}/>
            <Text>
                student page
            </Text>
        </View>
    )
}