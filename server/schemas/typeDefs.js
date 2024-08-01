const typeDefs = `
  type Appointment {
    _id: ID
    date: String
    description: String
    users: [User]
  }

  type Vehicle {
    _id: ID
    year: String
    make: String
    model: String
    vin: String
    license: String
    color: String
    miles: String
    production: String
    lastService: String
    previousCustomer: Boolean
  }  

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    vehicles: [Vehicle]
  }

 

  type Auth {
    token: ID
    user: User
  }



  type Query {
    vehicles: [Vehicle]
    appointments(user: ID, firstName: String): [Appointment]
    appointment(_id: ID!): Appointment
    user: User
    users(user: ID, firstName: String): [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;