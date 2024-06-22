import { StyleSheet, View, Text, Pressable, TextInput, Switch } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";
import { useMutation, gql } from "react";

export default function AddingStudentScreen() {
    const router = useRouter();
    const [adding, setAdding] = useState(false);
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        assignedDay: '',
        currentBookMath: '',
        currentBookEnglish: '',
        presence: false,
        todaysWorkCompleted: false,
        startTimeHr: 0,
        startTimeMin: 0,
        endTimeHr: 0,
        endTimeMin: 0,
        absencesLast6Month: 0,
        subjects: '',
        parentsPhoneNumber: '',
        notes: '',
        makeupClassesTaken: '',
    });

    const handlePressDone = () => {
        setAdding(!adding);
    };
    const handlePressAdd = () => {
        setAdding(!adding);
    };
    const handleClosePress = () => {
        router.back();
    };
    const handleInputChange = (name, value) => {
        setStudentData({ ...studentData, [name]: value });
    };

    return (
        <View style={styles.box}>
            <View style={styles.space}></View>
            {adding ? (
                <View style={styles.formContainer}>
                    <ScrollView style={styles.form}>
                        <View style={styles.centerText}>
                            <Text style={styles.centerTextW}>Add a new Student</Text>
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>First Name:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="First Name"
                                value={studentData.firstName}
                                onChangeText={(text) => handleInputChange('firstName', text)}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Last Name:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                value={studentData.lastName}
                                onChangeText={(text) => handleInputChange('lastName', text)}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Assigned Day:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Assigned Day"
                                value={studentData.assignedDay}
                                onChangeText={(text) => handleInputChange('assignedDay', text)}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Current Book (Math):</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Current Book (Math)"
                                value={studentData.currentBookMath}
                                onChangeText={(text) => handleInputChange('currentBookMath', text)}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Current Book (English):</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Current Book (English)"
                                value={studentData.currentBookEnglish}
                                onChangeText={(text) => handleInputChange('currentBookEnglish', text)}
                            />
                        </View>

                        <View style={styles.switchContainer}>
                            <Text style={styles.inputLeftWords}>Presence:</Text>
                            <Switch
                                value={studentData.presence}
                                onValueChange={(value) => handleInputChange('presence', value)}
                            />
                        </View>

                        <View style={styles.switchContainer}>
                            <Text style={styles.inputLeftWords}>Today's Work Completed:</Text>
                            <Switch
                                value={studentData.todaysWorkCompleted}
                                onValueChange={(value) => handleInputChange('todaysWorkCompleted', value)}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Start Time (Hour):</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Start Time (Hour)"
                                keyboardType="numeric"
                                value={String(studentData.startTimeHr)}
                                onChangeText={(text) => handleInputChange('startTimeHr', parseInt(text))}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Start Time (Minute):</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Start Time (Minute)"
                                keyboardType="numeric"
                                value={String(studentData.startTimeMin)}
                                onChangeText={(text) => handleInputChange('startTimeMin', parseInt(text))}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>End Time (Hour):</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="End Time (Hour)"
                                keyboardType="numeric"
                                value={String(studentData.endTimeHr)}
                                onChangeText={(text) => handleInputChange('endTimeHr', parseInt(text))}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>End Time (Minute):</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="End Time (Minute)"
                                keyboardType="numeric"
                                value={String(studentData.endTimeMin)}
                                onChangeText={(text) => handleInputChange('endTimeMin', parseInt(text))}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Absences Last 6 Months:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Absences Last 6 Months"
                                keyboardType="numeric"
                                value={String(studentData.absencesLast6Month)}
                                onChangeText={(text) => handleInputChange('absencesLast6Month', parseInt(text))}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Subjects:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Subjects (comma separated)"
                                value={studentData.subjects}
                                onChangeText={(text) => handleInputChange('subjects', text)}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Parent's Phone Number:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Parent's Phone Number"
                                value={studentData.parentsPhoneNumber}
                                onChangeText={(text) => handleInputChange('parentsPhoneNumber', text)}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Notes:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Notes (comma separated)"
                                value={studentData.notes}
                                onChangeText={(text) => handleInputChange('notes', text)}
                            />
                        </View>

                        <View style={styles.inputArea}>
                            <Text style={styles.inputLeftWords}>Makeup Classes Taken:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Makeup Classes Taken (comma separated dates)"
                                value={studentData.makeupClassesTaken}
                                onChangeText={(text) => handleInputChange('makeupClassesTaken', text)}
                            />
                        </View>
                    </ScrollView>
                    <Pressable style={styles.doneButton} onPress={handlePressDone}>
                        <Text>Done</Text>
                    </Pressable>
                </View>
            ) : (
                <>
                    {/* //render the rest of the actual purpose of the screen here */}
                    <Pressable style={styles.closeButton} onPress={handleClosePress}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </Pressable>
                    <Pressable style={styles.press} onPress={handlePressAdd}>
                        <Text>Adding new Student</Text>
                    </Pressable>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    space: {
        height: '5%',
    },
    press: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000', // Add shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        right: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        shadowColor: '#000', // Add shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 50,
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    centerText: {
        alignItems: 'center',
        marginBottom: 10,
    },
    centerTextW: {
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        flex: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    inputLeftWords: {
        textDecorationLine: 'underline',
        width: 150, // Set a fixed width for the labels
        marginRight: 8,
    },
    form: {
        marginLeft: '5%',
        marginRight: '5%',
    },
    formContainer: {
        flex: 1,
    },
    doneButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000', // Add shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Add elevation for Android
    },
});
