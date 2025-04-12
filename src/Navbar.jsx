// NavigationBar.js
import React, { useState } from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (Platform.OS === 'web') {
    return (
      <View style={styles.webNavbar}>
        <Text style={styles.logo}>Trade 57</Text>
        <View style={styles.navLinks}>
          {navItems.map((item, index) => (
            <Text key={index} style={styles.link}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    );
  }

  // Android (Hamburger)
  return (
    <View style={styles.androidNavbar}>
      <TouchableOpacity onPress={handleToggleMenu}>
        <Text style={styles.hamburger}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.logo}>Trade 57</Text>
      {isMenuOpen && (
        <View style={styles.menu}>
          {navItems.map((item, index) => (
            <Text key={index} style={styles.menuItem}>
              {item}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  webNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  link: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  androidNavbar: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  hamburger: {
    fontSize: 24,
    marginBottom: 8,
  },
  menu: {
    marginTop: 10,
    backgroundColor: '#fff',
    elevation: 3,
    padding: 10,
    borderRadius: 5,
  },
  menuItem: {
    paddingVertical: 8,
    fontSize: 16,
  },
});
