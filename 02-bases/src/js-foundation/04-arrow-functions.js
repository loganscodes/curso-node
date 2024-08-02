const users = [
    {
        id: 1,
        name: 'Link'
    },
    {
        id:2,
        name: 'Zelda'
    }
]


const getUserById = ( id, callback ) => {
    const user = users.find( function(user){
        return user.id === id
    })

    if(!user) return callback(`User not found whit id ${id}`)
}


module.exports = {
    getUserById,
}