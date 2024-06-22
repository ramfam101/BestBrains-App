import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={DefaultTheme}>
      <ApolloProvider client={client}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="todaysrecord/[day]" options={{ headerShown: true }} />
          <Stack.Screen name="studentrecords" options={{headerShown: false}} />
          <Stack.Screen name="[time]" options={{headerShown: true}} />
          
          {/* <Stack.Screen name="addingStudent" options={{headerShown: false}} />
          <Stack.Screen name="addingStudent" options={{headerShown: false}} /> */}
          <Stack.Screen name="+not-found" />
        </Stack>
      </ApolloProvider>
    // </ThemeProvider>
  );
}
