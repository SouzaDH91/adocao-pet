exports.typeDefs = `

type Pet {
    _id: ID
    name: String!
    thumb: String!
    description: String!
    adopted: String
    createdAt: String
    username: String
}

type User {
    _id: ID
    name: String!
    img: String
    username: String! @unique
    phone: String!
    password: String!
    email: String!
    address: String!
    district: String!
    city: String!
    state: String!
    status: Int
    joinDate: String
}

type Query {
    getAllPets: [Pet]
}

type Token {
    token: String!
}

type Mutation {
    addPet(name: String!, thumb: String!, description: String!, adopted: String, username: String): Pet

    signupUser(name: String!, img: String, username: String!, phone: String!, password: String!, email: String!, address: String!, district: String!, city: String!, state: String!): Token
}

`;