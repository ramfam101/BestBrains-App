const Student = require('../../Models/Student')

module.exports ={
    Query: {
        async getStudents(){
            try{
                const students = await Student.find();
                return students;
            }catch(err){
                console.log("Cannot return students error: ",{err})
            }
        },
    },
    Mutation : {
        async createStudent(_, {firstName, lastName, assignedDay, currentBookMath, currentBookEnglish, presence, todaysWorkCompleted,  startTimeHr, startTimeMin, endTimeHr, endTimeMin, absencesLast6Month, subjects, parentsPhoneNumber, notes, makeupClassesTaken}){
                const newStudent =  new Student({
                    firstName: firstName,
                    lastName: lastName,
                    assignedDay: assignedDay, 
                    currentBookMath: currentBookMath,
                    currentBookEnglish: currentBookEnglish,
                    presence: presence,
                    todaysWorkCompleted: todaysWorkCompleted,
                    startTimeHr: startTimeHr,
                    startTimeMin: startTimeMin,
                    endTimeHr: endTimeHr,
                    endTimeMin: endTimeMin,
                    absencesLast6Month: absencesLast6Month,
                    subjects: subjects,
                    parentsPhoneNumber: parentsPhoneNumber,
                    notes: notes,
                    makeupClassesTaken: makeupClassesTaken
    
                });
                await newStudent.save();
                const res = await Student.findById(newStudent.id);
                return res;
        },
    }

};
