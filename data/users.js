import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@beststore.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Naurto',
        email: 'naruto@beststore.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Kunal',
        email: 'Kunal@beststore.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users