//./screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton'; // Adjust the path as necessary

// Define the parameter list for the navigation stack
type RootStackParamList = {
  MainTabs: undefined; // Adjust if you have parameters for this route
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>(''); // State for phone number
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  return (
    <ImageBackground source={require('../assets/background_home.jpg')} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone} // Update state for phone number
          style={styles.input}
          keyboardType="phone-pad" // Use phone pad keyboard
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <CustomButton title="Register" onPress={() => navigation.navigate('MainTabs')} />
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
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#007AFF',
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
});

export default RegisterScreen;


