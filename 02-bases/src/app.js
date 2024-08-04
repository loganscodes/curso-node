// const des = require('./js-foundation/02-destructuring')
// console.log(des)

// const { getUserById } = require('./js-foundation/04-arrow-functions')

// const id = 1

// getUserById(id, (error, user) => {

//     if( error ) throw new Error('User not found')

//     console.log(user);

// });


// const { buildMakePerson } = require('./js-foundation/05-factory')

// const { getUUID, getAge } = require('./plugins')

// const makePerson = buildMakePerson({getUUID, getAge})

// const obj = { name: 'Ducket', birthdate: '1985-10-21' }

// const john = makePerson(obj)

// console.log(john)



// const getPokemonById = require('./js-foundation/06-promises')

// console.log(getPokemonById(1))

// getPokemonById(151)
//     .then( (pokemon) => console.log({ pokemon }) )
//     .catch((err) => console.error(err))
//     .finally( () => console.log('Termina'))


const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js')

logger.log('Hola Mundo')
logger.error('Trono')
