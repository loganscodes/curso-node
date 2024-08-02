const users = [
    {
        id: 1,
        name: 'Link'
    },
    {
        id:2,
        name: 'Zelda'
    }
];


function getUserById( id, callback ){

    const user = users.find((user) => user.id === id)

    user ? callback(null, user) : callback(`User not found whit id ${id}`)

    // if(!user) return callback(`User not found whit id ${id}`)


}



module.exports = {
    getUserById,
}