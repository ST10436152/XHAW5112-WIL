//./screens/ContactScreen.tsx
import React from 'react'; 
import { View, Text, Linking, StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';

const ContactScreen = () => {
  const handleEmailPress = () => {
    const email = 'info@empoweringthenation.co.za';
    const emailUrl = `mailto:${email}`;
    Linking.openURL(emailUrl)
      .catch(err => console.error('Failed to open email client:', err));
  };

  const handlePhonePress = () => {
    const phoneNumber = '011-555-1234';
    const phoneUrl = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`; // Clean the phone number for dialing
    Linking.openURL(phoneUrl)
      .catch(err => console.error('Failed to open phone dialer:', err));
  };

  return (
    <ImageBackground source={require('../assets/background_contact.jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Contact Us</Text>
        
        {/* Phone Number Section with Tap Effect */}
        <Text style={styles.info}>
          Phone: 
          <Text 
            style={[styles.highlight, styles.phone]} 
            onPress={handlePhonePress}
          >
            011-555-1234
          </Text>
        </Text>
        
        {/* Updated Email Section with Tap Effect */}
        <Text style={styles.info}>
          Email: 
          <Text 
            style={[styles.highlight, styles.email]} 
            onPress={handleEmailPress}
          >
            info@empoweringthenation.co.za
          </Text>
        </Text>

        <Text style={styles.venueTitle}>Our Venues:</Text>
        <Text style={styles.venue}>123 Sandton, Johannesburg</Text>
        <CustomButton title="View on Map" onPress={() => Linking.openURL('https://maps.google.com/?q=123+Sandton')} />
        
        <Text style={styles.venue}>456 Soweto, Johannesburg</Text>
        <CustomButton title="View on Map" onPress={() => Linking.openURL('https://maps.google.com/?q=456+Soweto')} />
        
        <Text style={styles.venue}>789 Randburg, Johannesburg</Text>
        <CustomButton title="View on Map" onPress={() => Linking.openURL('https://maps.google.com/?q=789+Randburg')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#0066cc', // Highlight color for important details
  },
  email: {
    textDecorationLine: 'underline', // Underline to indicate it's a link
    cursor: 'pointer', // Hover effect on web
  },
  phone: {
    textDecorationLine: 'underline', // Underline to indicate it's a link
    cursor: 'pointer', // Hover effect on web
  },
  venueTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  venue: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

export default ContactScreen;

