//./navigation/CourseNavigator
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesOverviewScreen from '../screens/CoursesOverviewScreen';
import SixMonthCoursesScreen from '../screens/SixMonthCoursesScreen';
import ShortCoursesScreen from '../screens/ShortCoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';

const Stack = createStackNavigator();

const CourseNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesOverview" component={CoursesOverviewScreen} />
      <Stack.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} />
      <Stack.Screen name="ShortCourses" component={ShortCoursesScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
    </Stack.Navigator>
  );
};

export default CourseNavigator;
