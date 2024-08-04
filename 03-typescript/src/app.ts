import { findHeroById } from "./data/services/hero.service"


const hero = findHeroById(2)

console.log(hero?.name ?? 'Hero not found')

