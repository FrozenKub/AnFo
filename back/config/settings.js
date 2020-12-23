module.exports = {
    settings: {
        port: 7000,
        cookieLifeTime: 24*60*60*1000
    },
    session: {
        cookieSecret: "SecretInformation",
        cookieName: "session"
    }
}