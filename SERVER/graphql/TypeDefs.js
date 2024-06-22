const {gql} = require('apollo-server');

module.exports=gql`
    type Student{
        firstName: String!
        lastName: String!
        assignedDay: String!
        currentBookMath: String!
        currentBookEnglish: String!
        presence: Boolean!
        todaysWorkCompleted: Boolean!
        startTimeHr: Int!
        startTimeMin: Int!
        endTimeHr: Int!
        endTimeMin: Int!
        absencesLast6Month: Int!
        subjects: [String]!
        parentsPhoneNumber: String!
        notes: [String]!
        makeupClassesTaken: [String]!
    }
    type Query{
        getStudents: [Student]
    }
    type Mutation{
        createStudent(
        firstName: String!
        lastName: String!
        assignedDay: String!
        currentBookMath: String!
        currentBookEnglish: String!
        presence: Boolean!
        todaysWorkCompleted: Boolean!
        startTimeHr: Int!
        startTimeMin: Int!
        endTimeHr: Int!
        endTimeMin: Int!
        absencesLast6Month: Int!
        subjects: [String]!
        parentsPhoneNumber: String!
        notes: [String]!
        makeupClassesTaken: [String]!
        ): Student!
    }
`;