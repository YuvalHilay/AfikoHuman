import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo vector icons

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Ionicons
        name="md-menu"
        size={32}
        color="black"
        style={{ marginLeft: 15 }}
        onPress={() => navigation.toggleDrawer()} // Open drawer when icon is pressed
      />
    ),
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Ionicons
        name="md-menu"
        size={32}
        color="black"
        style={{ marginLeft: 15 }}
        onPress={() => navigation.toggleDrawer()} // Open drawer when icon is pressed
      />
    ),
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map Screen</Text>
        {/* Add your map component here */}
      </View>
    );
  }
}

const LoginScreen = ({ onLogin, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the username and password are correct
    if (username === 'yuval' && password === 'a') {
      onLogin(); // Notify the parent component that the login is successful
      navigation.navigate('Map'); // Navigate to the Map screen
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Map: MapScreen, // Add the Map screen to the navigator
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <AppContainer />
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: 200,
    padding: 10,
  },
});
