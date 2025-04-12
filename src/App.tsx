import React from 'react';
import NavigationBar from './Navbar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer';
// import { NavigationContainer } from '@react-navigation/native';
// import './gesture-handler';
const App = () => {
  return (
    // <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <NavigationBar />
        <Text></Text>
        <View style={styles.content}>
          {/* Add your main content here */}
        </View>

        <Footer />
      </SafeAreaView>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Optional: background color
  },
  content: {
    flex: 1, // This fills the space between NavBar and Footer
  },
});

export default App;
