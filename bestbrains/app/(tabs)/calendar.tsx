import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, Platform, Text, View} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState, useEffect } from 'react';

interface DateType {
  day: number;
  month: number;
  year: number;
}

export default function TabTwoScreen() {
  const [selected, setSelected] = useState('');
  const [selectedDay, setSelectedDay] = useState(Number);
  const [selectedMonth, setSelectedMonth] = useState(Number);
  const [nextDays, setnextDays] = useState<DateType[]>([]);

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1; // Months are zero-indexed
    const dd = today.getDate();
    return { year: yyyy, month: mm, day: dd };
  };

  // Store today's date in a variable
  const todayDate = getTodayDate();
  

  const getNextSixDays = (startDay : number, startMonth : number, startYear : number) => {
    const dates: DateType[] = [];
    const startDate = new Date(startYear, startMonth - 1, startDay);

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push({
        day: date.getDate(),
        month: date.getMonth() + 1, // Months are zero-indexed
        year: date.getFullYear()
      });
      console.log(i+1,'. date: ', dates[i].month,"/", dates[i].day);
    }
    setnextDays(dates);
  };
  // getNextSixDays(todayDate.day, todayDate.month, todayDate.year);
  // const initial = getNextSixDays(todayDate.day, todayDate.month, todayDate.year);
  // setnextDays(initial);
  useEffect(() => {
    getNextSixDays(todayDate.day, todayDate.month, todayDate.year);
    setSelectedDay(todayDate.day);
    setSelectedMonth(todayDate.month);
    setSelected(`${todayDate.year}-${String(todayDate.month).padStart(2, '0')}-${String(todayDate.day).padStart(2, '0')}`);
  }, []);

  
  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        
        <Calendar
          onDayPress={day => {
            if (selected === day.dateString) {
              // Unselect the day
              setSelected('');
              setSelectedDay(0);
              setSelectedMonth(0);
            } else {
              // Select the day
              getNextSixDays(day.day,day.month, day.year);
              setSelected(day.dateString);
              setSelectedDay(day.day);
              setSelectedMonth(day.month);
              
            }
          }}
          
          markedDates={{
            [selected]: { selected: true, selectedColor: 'orange' }
          }}
          style={styles.caln}
          // style={{ backgroundColor: 'lightblue' }}
          enableSwipeMonths={true}
          theme={{
            // todayTextColor: '#2d4150', // Make today text color same as other days
            // dayTextColor: '#2d4150',
          }}
          hideArrows={false} // Ensure arrows are visible
          renderArrow={(direction) => (
            <Ionicons
              name={direction === 'left' ? 'chevron-back' : 'chevron-forward'}
              size={24}
              color='#000000'
            />
          )}
        />
        <View style={styles.daysTitleBox}>
          <Text style={styles.words}>Upcoming Week</Text>
        </View>
        {/* <Text>{todayDate.year}</Text> */}
        <View style = {styles.bottomSection}>
          {nextDays.map((date, index) => (
            <View key={index} style={styles.days}>
              <Text style={styles.comingDays}>{date.month}/{date.day}</Text>
              <Text style={styles.dayWordShort}>
                {new Date(date.year, date.month - 1, date.day).toLocaleDateString('en-US', { weekday: 'short' })}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
  },
  calendarContainer: {
    top: '5%', // Position the top of the calendar 5% from the top of the container
    left: 0,
    right: 0,
    // backgroundColor: 'lightblue',
    gap: 5,
  },
  caln : {
    margin: 10,
  },
  bottomSection : {
    flexDirection: 'row',
    backgroundColor: 'lightyellow', // Change this to the desired color
    height: '100%',
  },
  daysTitleBox : {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  words : {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  days : {
    flex : 1,
    backgroundColor: 'orange', 
    borderRadius: 10,
    margin : 5,
    maxHeight: '25%',
    alignItems: 'center',
  },
  comingDays : {
    
    
  },
  dayWordShort : {
    alignItems: 'center',
    textTransform: 'capitalize',
  },
});
