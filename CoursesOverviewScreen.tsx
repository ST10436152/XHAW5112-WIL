import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from '../components/CustomButton';

type RootStackParamList = {
  SixMonthCourses: undefined;
  ShortCourses: undefined;
};

type CoursesOverviewScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const CoursesOverviewScreen: React.FC = () => {
  const navigation = useNavigation<CoursesOverviewScreenNavigationProp>();

  return (
    <ImageBackground source={require('../assets/background_overview.jpg')} style={styles.container}>
      <Text style={styles.title}>Explore Courses</Text>
      <CustomButton title="Explore 6-Month Courses" onPress={() => navigation.navigate('SixMonthCourses')} />
      <CustomButton title="Explore 6-Week Courses" onPress={() => navigation.navigate('ShortCourses')} />

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CoursesOverviewScreen;
