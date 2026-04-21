const homeRoute = (req, res) => {
    res.send('Welcome to Home Page. Check out /bryson, /george or /moroni for more!');
}

const brysonRoute = (req, res) => {
    res.send('Hello Bryson!')
}

const georgeRoute = (req, res) => {
    res.send('Hello George!')
}

const moroniRoute = (req, res) => {
    res.send('Hello Moroni!')
}

module.exports = {homeRoute, brysonRoute, georgeRoute, moroniRoute}