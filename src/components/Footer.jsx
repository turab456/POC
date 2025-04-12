// components/Footer.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';

const links = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

const Footer = () => {
  const handleLinkPress = (url) => {
    if (Platform.OS === 'web') {
      window.location.href = url;
    } else {
      // Open external links in browser on mobile
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.logo}>Trade 57</Text>

      <View style={styles.linksContainer}>
        {links.map((link) => (
          <TouchableOpacity key={link.label} onPress={() => handleLinkPress(link.url)}>
            <Text style={styles.link}>{link.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.copy}>© {new Date().getFullYear()} MyApp. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    backgroundColor: '#222',
    alignItems: 'center',
    // marginTop:100
  },
  logo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  linksContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  link: {
    color: '#aaa',
    fontSize: 14,
    marginHorizontal: 8,
  },
  copy: {
    color: '#555',
    fontSize: 12,
  },
});

export default Footer;