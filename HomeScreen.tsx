//./screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground 
      source={require('../assets/background_home.jpg')} 
      style={styles.background} 
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.description}>
          Empowering the Nation was established in 2018 and offers training for domestic workers and gardeners in Johannesburg.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
