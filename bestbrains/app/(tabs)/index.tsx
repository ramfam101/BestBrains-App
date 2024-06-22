import { Image, StyleSheet, Pressable, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {

  const router = useRouter();
  const [classTimes, setClassTimes] = useState<string[]>([]);

  const handleStudentPress = (day : number, month : number, year: number) => {
    router.push({
      pathname: `/todaysrecord/${day}`,
      params: {year : year, month : month},
    });
  };
  const preStudentPress = () => {
    const today = new Date();
    handleStudentPress(today.getDate(), today.getMonth(), today.getFullYear());
  };
  const handleTeachersPress = () => {
    router.push({
      pathname: 'idkletssee',
    });
  };
  const handleGradersPress = () => {
    router.push({
      pathname: 'studentrecords',
    });
  };
  const handleClassesPress = (time : string) => {
    const today = new Date();
    router.push({
      pathname: `/${time}`,
    });
  };

  useEffect(() => {
    const checkDayOfWeek = () => {
      const today = new Date();
      const dayOfWeek = today.getDay();
      if (dayOfWeek === 2 || dayOfWeek === 4) {
        setClassTimes(['4:30 PM', '5:35 PM', '6:40 PM']); // Example class times
      } 
      else if(dayOfWeek === 6){
        setClassTimes(['9:00 AM', '10:05 AM', '11:10 AM']);
      }
      else {
        console.log(dayOfWeek);
        setClassTimes([]); // No classes today
      }
    };
    checkDayOfWeek();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.space}></View>
      <View style={styles.layer1}>
        <TouchableOpacity style={[styles.layer1left, styles.button]} onPress={handleTeachersPress}>
          <Text style={styles.buttonText}>Teachers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.layer1right, styles.button]} onPress={handleGradersPress}>
          <Text style={styles.buttonText}>Graders</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.layer2, styles.button]} onPress={preStudentPress}>
        <Text style={styles.buttonText}>Students</Text>
      </TouchableOpacity>
      <View style={[styles.todaysClasses, styles.button]}>
      {/* onPress={handleClassesPress} */}
        <Text style={styles.buttonTextToday}>Classes Today</Text>
        {classTimes.length === 0 ? (
          <Text style={styles.noClassesText}>No classes today</Text>
        ) : (
          classTimes.map((time, index) => (
            <TouchableOpacity key={index} onPress={() => handleClassesPress(time)} style={styles.classItem}>
              <Text style={styles.classText}>{time}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#015291',
  },
  space: {
    height: '5%',
  },
  layer1: {
    height: '25%',
    flexDirection: 'row',
  },
  layer1left: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layer1right: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layer2: {
    height: '20%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todaysClasses: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'white', // Set explicit background color for buttons
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: 'black', // Ensure text color is readable
    height: '10%',
    textDecorationLine: 'underline',
  },
  buttonTextToday : {
    height: '5%',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  noClassesText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  classItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    flex : 1,
    justifyContent: 'center',
  },
  classText: {
    color: 'black',
    fontSize: 14,
  },
});

