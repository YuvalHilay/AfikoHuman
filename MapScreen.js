import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// Map Screen Component
const MapScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
      {/* Add your map component here */}

      {/* Navigation to open the drawer */}
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => navigation.openDrawer()}
      >
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

// Categories Screen Component
const CategoriesScreen = ({ navigation }) => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryItem}
          onPress={() => {
            // Handle category selection
            // For example, navigate to a specific category screen
            navigation.navigate('Category', { categoryName: category });
          }}
        >
          <Text>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Login Screen Component
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

// Drawer Navigator
const Drawer = createDrawerNavigator();

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator initialRouteName="Map">
          <Drawer.Screen name="Map" component={MapScreen} />
          <Drawer.Screen name="Categories" component={CategoriesScreen} />
        </Drawer.Navigator>
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default App;
