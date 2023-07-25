import duck from '../assets/images/Duck.png';
import goose from '../assets/images/Goose.png';
import lamb from '../assets/images/Lamb.png';
import turkey from '../assets/images/Turkey.png';

export const initialState = [
  {
    id: 1,
    link: 'cold-snacks',
    title: 'ХОЛОДНЫЕ ЗАКУСКИ',
    products: [
      {
        id: 1,
        title: 'Ягненок cold',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: lamb,
          alt: 'lamb',
        },
      },
      {
        id: 2,
        title: 'Индейка',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 560,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: turkey,
          alt: 'turkey',
        },
      },
      {
        id: 3,
        title: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 870,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: goose,
          alt: 'goose',
        },
      },
      {
        id: 4,
        title: 'Утка',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 610,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
  {
    id: 2,
    link: 'hot-snacks',
    title: 'ГОРЯЧИЕ ЗАКУСКИ',
    products: [
      {
        id: 5,
        title: 'Ягненок hot',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: lamb,
          alt: 'lamb',
        },
      },
      {
        id: 6,
        title: 'Индейка',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 560,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: turkey,
          alt: 'turkey',
        },
      },
      {
        id: 7,
        title: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 870,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: goose,
          alt: 'goose',
        },
      },
      {
        id: 8,
        title: 'Утка',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 610,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
  {
    id: 3,
    link: 'meet-dishes',
    title: 'МЯСНЫЕ БЛЮДА',
    products: [
      {
        id: 9,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: lamb,
          alt: 'lamb',
        },
      },
      {
        id: 10,
        title: 'Индейка',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 560,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: turkey,
          alt: 'turkey',
        },
      },
      {
        id: 11,
        title: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 870,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: goose,
          alt: 'goose',
        },
      },
      {
        id: 12,
        title: 'Утка',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 610,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
  {
    id: 4,
    link: 'soups',
    title: 'СУПЫ',
    products: [
      {
        id: 13,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: lamb,
          alt: 'lamb',
        },
      },
      {
        id: 14,
        title: 'Индейка',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 560,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: turkey,
          alt: 'turkey',
        },
      },
      {
        id: 15,
        title: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 870,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: goose,
          alt: 'goose',
        },
      },
      {
        id: 16,
        title: 'Утка',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 610,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
  {
    id: 5,
    link: 'fish-dishes',
    title: 'РЫБНЫЕ БЛЮДА',
    products: [
      {
        id: 17,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: lamb,
          alt: 'lamb',
        },
      },
      {
        id: 18,
        title: 'Индейка',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 560,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: turkey,
          alt: 'turkey',
        },
      },
      {
        id: 19,
        title: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 870,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: goose,
          alt: 'goose',
        },
      },
      {
        id: 20,
        title: 'Утка',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 610,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
  {
    id: 6,
    link: 'grill-menu',
    title: 'ГРИЛЬ МЕНЮ',
    products: [
      {
        id: 21,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: lamb,
          alt: 'lamb',
        },
      },
      {
        id: 22,
        title: 'Индейка',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 560,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: turkey,
          alt: 'turkey',
        },
      },
      {
        id: 23,
        title: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 870,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: goose,
          alt: 'goose',
        },
      },
      {
        id: 24,
        title: 'Утка',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 610,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
  {
    id: 7,
    link: 'specialty-dishes',
    title: 'ФИРМЕННЫЕ БЛЮДА',
    products: [
      {
        id: 25,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: lamb,
          alt: 'lamb',
        },
      },
      {
        id: 26,
        title: 'Индейка',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 560,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: turkey,
          alt: 'turkey',
        },
      },
      {
        id: 27,
        title: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 870,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: goose,
          alt: 'goose',
        },
      },
      {
        id: 28,
        title: 'Утка',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 610,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
  {
    id: 8,
    link: 'drinks',
    title: 'НАПИТКИ',
    products: [
      {
        id: 29,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: lamb,
          alt: 'lamb',
        },
      },
      {
        id: 30,
        title: 'Индейка',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 560,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: turkey,
          alt: 'turkey',
        },
      },
      {
        id: 31,
        title: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 870,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: goose,
          alt: 'goose',
        },
      },
      {
        id: 32,
        title: 'Утка',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 610,
        cartPrice: 0,
        cartCount: 0,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
];
