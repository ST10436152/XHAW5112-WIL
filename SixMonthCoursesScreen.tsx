import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from '../components/CustomButton';

// Define the type for your navigation
type RootStackParamList = {
  CourseDetail: { course: string };
};

type SixMonthCoursesScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SixMonthCoursesScreen: React.FC = () => {
  const navigation = useNavigation<SixMonthCoursesScreenNavigationProp>();

  return (
    <ImageBackground source={require('../assets/background_courses.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Six-Month Courses</Text>
        <CustomButton title="First Aid" onPress={() => navigation.navigate('CourseDetail', { course: 'First Aid' })} />
        <CustomButton title="Sewing" onPress={() => navigation.navigate('CourseDetail', { course: 'Sewing' })} />
        <CustomButton title="Landscaping" onPress={() => navigation.navigate('CourseDetail', { course: 'Landscaping' })} />
        <CustomButton title="Life Skills" onPress={() => navigation.navigate('CourseDetail', { course: 'Life Skills' })} />
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

export default SixMonthCoursesScreen;

