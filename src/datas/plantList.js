import monsterra from '../assets/monsterra.jpg';
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulente from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basilic from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import yucca from '../assets/yucca.jpg'
import geranium from '../assets/geranium.jpg'
import calathea from '../assets/calathea.jpg'
import aloe from '../assets/aloe.png'
import cactus from '../assets/cactus.jpg'

export const plantList = [
  {
    name: 'monstera',
    category: 'classique',
    id: '1ed',
    cover: monsterra,
    price: 15,
    isBestSale: true,
    light: 2,
		water: 3
  },
  {
    name: 'ficus lyrata',
    category: 'classique',
    id: '2ab',
    cover: lyrata,
    price: 16,
    isBestSale: false,
    light: 3,
		water: 1
  },
  {
    name: 'pothos argenté',
    category: 'classique',
    id: '3sd',
    cover: pothos,
    price: 9,
    isBestSale: true,
    isSpecialOffer: true,
    light: 3,
		water: 1
  },
  {
    name: 'yucca',
    category: 'classique',
    id: '4kk',
    cover: yucca,
    price: 20,
    isBestSale: false,
    light: 3,
		water: 1
  },
  {
    name: 'olivier',
    category: 'extérieur',
    id: '5pl',
    cover: olivier,
    price: 25,
    isBestSale: true,
    light: 3,
		water: 1
  },
  {
    name: 'calathea',
    category: 'classique',
    id: '4bd',
    cover:calathea,
    price: 20,
    isBestSale: false,
    light: 2,
		water: 3
  },
  {
    name: 'géranium',
    category: 'extérieur',
    id: '6cv',
    cover: geranium,
    price: 6,
    isBestSale: false,
    light: 2,
		water: 2
  },
  {
    name: 'basilique',
    category: 'extérieur',
    id: '7ie',
    cover: basilic,
    price: 5,
    isBestSale: true,
    isSpecialOffer: true,
    light: 2,
		water: 3
  },
  {
    name: 'aloe',
    category: 'plante grasse',
    id: '8fp',
    cover: aloe,
    price: 8,
    isBestSale: false,
    isSpecialOffer: true,
    light: 2,
		water: 1
  },
  {
    name: 'cactus',
    category: 'plante grasse',
    id: '5bq',
    cover: cactus,
    price: 4,
    isBestSale: true,
    light: 2,
		water: 1
  },
  {
    name: 'succulente',
    category: 'plante grasse',
    id: '9vn',
    cover: succulente,
    price: 4,
    isBestSale: true,
    light: 2,
		water: 1
  },
  {
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		cover: mint,
		price: 4,
    isBestSale: true,
    light: 2,
		water: 2
	}
];