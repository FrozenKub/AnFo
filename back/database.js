const {Sequelize} = require('sequelize')
const settings = require('./config/config.json').development
const argon = require('argon2')
const Op = Sequelize.Op;

const sequelize = new Sequelize(settings.database, settings.username, settings.password, {
    host: settings.host,
    dialect: settings.dialect,
    logging: true
})

const userModel = require('./models/user')(sequelize, Sequelize)
const postModel = require('./models/post')(sequelize, Sequelize)

async function connectToDatabase() {
    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully")
    } catch (error) {
        console.error("Unable to connect to the database: ", error)
    }
}


async function findPost(id) {
    return await postModel.findOne({
        where: {
            id: id
        }
    })
}


async function numberOfPosts() {
    return await postModel.findAndCountAll({
        where: {
            id: { [Op.gt]: 0 }
        }
    })
}


async function findUser(username) {
    return await userModel.findOne({
        where: {
            username: username
        }
    })
}

async function findUserById(id) {
    return await userModel.findOne({
        where: {
            id: id
        }
    })
}

async function deleteUserById(id) {
    return await userModel.destroy({
        where: {
            id: id
        }
    })
}

async function findAllUsers() {
    return await userModel.findAll()
}

async function isUserExist(username) {
    let user = await findUser(username)
    return (user !== undefined && user !== null)
}

async function getUserPassword(username) {
    let user = await findUser(username)
    return user.password
}

async function createNewUser(username, password, role = "User") {
    const hashedPassword = await argon.hash(password);

    let res = await argon.verify(hashedPassword, password);

    if (res) {
        let newUser = userModel.build({
            username: username,
            password: hashedPassword,
            role: role
        });


        return await newUser.save();

    }

    return undefined;

}


async function createNewPost(name, title, content = "Post") {

        let newPost = postModel.build({
            name: name,
            title: title,
            content: content
        });


        return await newPost.save();
}

async function updateUserData(req, res, next) {

    let user = await findUserById(req.user.id)

    const body = req.body

    if (body) {
        if (body.username) {
            user.username = body.username
        }
        if (body.password) {
            user.password = body.password
        }

        await user.save()
    }

    next()

}

exports.connectToDatabase = connectToDatabase;
exports.sequelize = sequelize;
exports.findUser = findUser;
exports.getUserPassword = getUserPassword;
exports.isUserExist = isUserExist;
exports.User = userModel;
exports.Post = postModel;
exports.createNewUser = createNewUser;
exports.findUserById = findUserById;
exports.updateUserData = updateUserData;
exports.findAllUsers = findAllUsers;
exports.deleteUserById = deleteUserById;
exports.createNewPost= createNewPost;
exports.findPost = findPost;
exports.numberOfPosts=numberOfPosts;