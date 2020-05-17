const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
    const { username, email } = user;
    return jwt.sign({ username, email }, secret, { expiresIn });
}

exports.resolvers = {
    Query: {
        getAllPets: async (root, args, { Pet }) => {
            const allPets = await Pet.find();
            return allPets;
        }
    },
    Mutation: {
        addPet: async (root, { name, thumb, description, adopted, username }, { Pet }) => {
            const newPet = await new Pet({
                name,
                thumb,
                description,
                adopted,
                username
            }).save();
            return newPet;
        },

        signupUser: async (root, { name, img, username, phone, email, password, address, district, city, state }, { User }) => {
            const user = await User.findOne({ username });
            if(user) {
                throw new Error('User already exists');
            }
            const newUser = await new User({
                name,
                img,
                username,
                phone,
                email,
                password,
                address,
                district,
                city,
                state
            }).save();
            return { token: createToken(newUser, process.env.SECRET, '1hr') };
        }
    }
};