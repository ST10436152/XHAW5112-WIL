import React from 'react'; 
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type CourseParamList = {
  CourseDetail: { course: keyof typeof courseDetails };
};

const courseDetails = {
  'First Aid': {
    fees: 'R1500',
    description: 'First Aid Awareness and basic life support.',
    content: ['Wounds and bleeding', 'Burns and fractures', 'CPR', 'Respiratory distress'],
    image: require('../assets/first_aid.jpg'),
  },
  'Sewing': {
    fees: 'R1500',
    description: 'Provide garment tailoring and alteration services.',
    content: ['Types of stitches', 'Threading machine', 'Alterations'],
    image: require('../assets/sewing.jpg'),
  },
  'Landscaping': {
    fees: 'R1500',
    description: 'Landscaping services for gardens.',
    content: ['Indigenous and exotic plants', 'Fixed structures', 'Garden layout'],
    image: require('../assets/landscaping.jpg'),
  },
  'Life Skills': {
    fees: 'R1500',
    description: 'Personal and professional life skills development.',
    content: ['Communication skills', 'Teamwork', 'Problem-solving'],
    image: require('../assets/life_skills.jpg'),
  },
  'Child Minding': {
    fees: 'R750',
    description: 'Basic child minding skills and knowledge.',
    content: ['Child development stages', 'Safety measures', 'Engaging activities'],
    image: require('../assets/child_minding.jpg'),
  },
  'Cooking': {
    fees: 'R750',
    description: 'Learn cooking techniques and meal preparation.',
    content: ['Meal planning', 'Basic cooking techniques', 'Food safety'],
    image: require('../assets/cooking.jpg'),
  },
  'Garden Maintenance': {
    fees: 'R750',
    description: 'Basic knowledge of gardening techniques.',
    content: ['Watering techniques', 'Plant care', 'Seasonal gardening'],
    image: require('../assets/garden_maintenance.jpg'),
  },
};

const CourseDetailScreen = () => {
  const route = useRoute<RouteProp<CourseParamList, 'CourseDetail'>>();
  const { course } = route.params;

  const details = courseDetails[course];

  if (!details) {
    return (
      <View style={styles.container}>
        <Text>Course details not found.</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={require('../assets/background_course_detail.jpg')} style={styles.background} blurRadius={5}>
      <View style={styles.container}>
        <Text style={styles.title}>{course}</Text>
        <Image source={details.image} style={styles.image} />
        <Text style={styles.text}>Fees: {details.fees}</Text>
        <Text style={styles.text}>Description: {details.description}</Text>
        <Text style={styles.text}>Content:</Text>
        {details.content.map((item, index) => (
          <Text key={index} style={styles.text}>- {item}</Text>
        ))}
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default CourseDetailScreen;
