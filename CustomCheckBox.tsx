// src/components/CustomCheckBox.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
  label: string;
  image: any; // Add an image prop
}

const CustomCheckBox: React.FC<CheckBoxProps> = ({ isChecked, onPress, label, image }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.checkbox, isChecked ? styles.checked : null]} />
      <Image source={image} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#000',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckBox;
