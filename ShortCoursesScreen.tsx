import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from '../components/CustomButton';

// Define the type for your navigation
type RootStackParamList = {
  CourseDetail: { course: string };
};

type ShortCoursesScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const ShortCoursesScreen: React.FC = () => {
  const navigation = useNavigation<ShortCoursesScreenNavigationProp>();

  return (
    <ImageBackground source={require('../assets/background_courses.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Short Six-Week Courses</Text>
        <CustomButton title="Child Minding" onPress={() => navigation.navigate('CourseDetail', { course: 'Child Minding' })} />
        <CustomButton title="Cooking" onPress={() => navigation.navigate('CourseDetail', { course: 'Cooking' })} />
        <CustomButton title="Garden Maintenance" onPress={() => navigation.navigate('CourseDetail', { course: 'Garden Maintenance' })} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ShortCoursesScreen;
