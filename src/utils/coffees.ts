import expressoImage from '../assets/coffees/expresso.svg'
import americanoImage from '../assets/coffees/americano.svg'
import expressoCremosoImage from '../assets/coffees/expresso-cremoso.svg'
import geladoImage from '../assets/coffees/gelado.svg'
import comLeiteImage from '../assets/coffees/com-leite.svg'
import latteImage from '../assets/coffees/latte.svg'
import capuccinoImage from '../assets/coffees/capuccino.svg'
import macchiatoImage from '../assets/coffees/macchiato.svg'
import mocaccinoImage from '../assets/coffees/mocaccino.svg'
import chocolateImage from '../assets/coffees/chocolate.svg'
import cubanoImage from '../assets/coffees/cubano.svg'
import havaianoImage from '../assets/coffees/havaiano.svg'
import arabeImage from '../assets/coffees/arabe.svg'
import irlandesImage from '../assets/coffees/irlandes.svg'

export type Coffee = {
  id: number
  img: string
  title: string
  label: string[]
  description: string
  value: number
}

export const coffees: Coffee[] = [
  {
    id: 1,
    img: expressoImage,
    title: 'Expresso tradicional',
    label: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    id: 2,
    img: americanoImage,
    title: 'Expresso Americano',
    label: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    id: 3,
    img: expressoCremosoImage,
    title: 'Expresso Cremoso',
    label: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
  },
  {
    id: 4,
    img: geladoImage,
    title: 'Expresso Gelado',
    label: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },
  {
    id: 5,
    img: comLeiteImage,
    title: 'Café com Leite',
    label: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
  {
    id: 6,
    img: latteImage,
    title: 'Latte',
    label: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
  },
  {
    id: 7,
    img: capuccinoImage,
    title: 'Capuccino',
    label: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
  },
  {
    id: 8,
    img: macchiatoImage,
    title: 'Macchiato',
    label: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
  },
  {
    id: 9,
    img: mocaccinoImage,
    title: 'Mocaccino',
    label: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
  },
  {
    id: 10,
    img: chocolateImage,
    title: 'Chocolate Quente',
    label: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
  },
  {
    id: 11,
    img: cubanoImage,
    title: 'Cubano',
    label: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
  },

  {
    id: 12,
    img: havaianoImage,
    title: 'Havaiano',
    label: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
  },
  {
    id: 13,
    img: arabeImage,
    title: 'Árabe',
    label: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
  },
  {
    id: 14,
    img: irlandesImage,
    title: 'Irlandês',
    label: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
  },
]
