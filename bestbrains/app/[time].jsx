import { useLocalSearchParams } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { Stack } from 'expo-router';

export default function ClassTimeScreen () {
    const params = useLocalSearchParams();
    const name = params.time + ' Class';
    return (
        <View>
            <Stack.Screen options={{title: name, headerBackTitle: 'Home'}}/>
            <Text>
                classtimescreen
            </Text>
        </View>
    )
}