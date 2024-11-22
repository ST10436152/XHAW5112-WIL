//./screens/CalculateFeesScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import CustomCheckBox from '../components/CustomCheckBox';
import CustomButton from '../components/CustomButton';
import AnimatedAlert from '../components/AnimatedAlert'; // Import AnimatedAlert

interface Course {
  name: string;
  fee: number;
  image: any; // Image type
}

const courses: Course[] = [
  { name: 'First Aid', fee: 1500, image: require('../assets/first_aid.jpg') },
  { name: 'Sewing', fee: 1500, image: require('../assets/sewing.jpg') },
  { name: 'Landscaping', fee: 1500, image: require('../assets/landscaping.jpg') },
  { name: 'Life Skills', fee: 1500, image: require('../assets/life_skills.jpg') },
  { name: 'Child Minding', fee: 750, image: require('../assets/child_minding.jpg') },
  { name: 'Cooking', fee: 750, image: require('../assets/cooking.jpg') },
  { name: 'Garden Maintenance', fee: 750, image: require('../assets/garden_maintenance.jpg') },
];

const CalculateFeesScreen: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const toggleCourseSelection = (courseName: string) => {
    if (selectedCourses.includes(courseName)) {
      setSelectedCourses(selectedCourses.filter(course => course !== courseName));
    } else {
      setSelectedCourses([...selectedCourses, courseName]);
    }
  };

  const calculateTotal = () => {
    // Validation
    if (!name || !phone || !email || selectedCourses.length === 0) {
      let missingFields = [];
      if (!name) missingFields.push('Name');
      if (!phone) missingFields.push('Phone');
      if (!email) missingFields.push('Email');
      if (selectedCourses.length === 0) missingFields.push('at least one course');

      setAlertMessage(`Please complete the following fields:\n- ${missingFields.join('\n- ')}`);
      setAlertVisible(true);
      return;
    }

    let total = selectedCourses.reduce((sum, courseName) => {
      const course = courses.find(course => course.name === courseName);
      return sum + (course?.fee || 0);
    }, 0);

    let discount = 0;
    if (selectedCourses.length === 2) {
      discount = total * 0.05;
    } else if (selectedCourses.length === 3) {
      discount = total * 0.10;
    } else if (selectedCourses.length > 3) {
      discount = total * 0.15;
    }

    total -= discount;
    const vat = total * 0.15;
    total += vat;

    const invoiceDetails = `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Selected Courses: ${selectedCourses.join(', ')}
      Number of Selected Courses: ${selectedCourses.length}
      Discount: R${discount.toFixed(2)}
      Total Fees (incl. VAT): R${total.toFixed(2)}
    `;

    setAlertMessage(invoiceDetails);
    setAlertVisible(true);
  };

  return (
    <ImageBackground source={require('../assets/background_calculate.jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Calculate Fees</Text>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.subtitle}>Select Courses:</Text>
        {courses.map(course => (
          <CustomCheckBox
            key={course.name}
            isChecked={selectedCourses.includes(course.name)}
            onPress={() => toggleCourseSelection(course.name)}
            label={`${course.name} - R${course.fee}`}
            image={course.image}
          />
        ))}

        <CustomButton title="Calculate Total Fees" onPress={calculateTotal} />
      </View>

      <AnimatedAlert 
        visible={alertVisible} 
        message={alertMessage} 
        onClose={() => setAlertVisible(false)} 
      />
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent overlay for better readability
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark text for contrast
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff', // White background for inputs
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default CalculateFeesScreen;

