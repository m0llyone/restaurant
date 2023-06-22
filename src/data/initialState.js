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
        cartPrice: 620,
        cartCount: 1,
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
        cartPrice: 560,
        cartCount: 1,
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
        cartPrice: 870,
        cartCount: 1,
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
        cartPrice: 610,
        cartCount: 1,
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
        id: 1,
        title: 'Ягненок hot',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 620,
        cartCount: 1,
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
        cartPrice: 560,
        cartCount: 1,
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
        cartPrice: 870,
        cartCount: 1,
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
        cartPrice: 610,
        cartCount: 1,
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
        id: 1,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 620,
        cartCount: 1,
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
        cartPrice: 560,
        cartCount: 1,
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
        cartPrice: 870,
        cartCount: 1,
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
        cartPrice: 610,
        cartCount: 1,
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
        id: 1,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 620,
        cartCount: 1,
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
        cartPrice: 560,
        cartCount: 1,
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
        cartPrice: 870,
        cartCount: 1,
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
        cartPrice: 610,
        cartCount: 1,
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
        id: 1,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 620,
        cartCount: 1,
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
        cartPrice: 560,
        cartCount: 1,
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
        cartPrice: 870,
        cartCount: 1,
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
        cartPrice: 610,
        cartCount: 1,
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
        id: 1,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 620,
        cartCount: 1,
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
        cartPrice: 560,
        cartCount: 1,
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
        cartPrice: 870,
        cartCount: 1,
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
        cartPrice: 610,
        cartCount: 1,
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
        id: 1,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 620,
        cartCount: 1,
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
        cartPrice: 560,
        cartCount: 1,
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
        cartPrice: 870,
        cartCount: 1,
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
        cartPrice: 610,
        cartCount: 1,
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
        id: 1,
        title: 'Ягненок',
        description:
          'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        cartPrice: 620,
        cartCount: 1,
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
        cartPrice: 560,
        cartCount: 1,
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
        cartPrice: 870,
        cartCount: 1,
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
        cartPrice: 610,
        cartCount: 1,
        weight: 225,
        image: {
          src: duck,
          alt: 'duck',
        },
      },
    ],
  },
];
