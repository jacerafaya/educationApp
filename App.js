import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Home from './App/Pages/Home';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_ZG9taW5hbnQtcmhpbm8tMjYuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <View style={styles.container}>

        <SignedIn>
          <Home></Home>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
