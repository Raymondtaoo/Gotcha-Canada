import Head from "next/head";
import React from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  description: string;
  priceM?: string;
  priceL?: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC = () => {
  const menu: MenuCategory[] = [
    {
      title: "Brown Sugar Series",
      items: [
        {
          name: "Brown Sugar Boba Fresh Milk",
          description:
            "Brown sugar boba fresh milk includes brown sugar tapioca",
          priceM: "7.0",
          priceL: "7.7",
          image: "",
        },
        {
          name: "Brown Sugar Boba Chocolate",
          description:
            "Brown Sugar Boba Fresh Milk with chocolate flavour includes brown sugar tapioca",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Brown Sugar Fresh Milk with Cheese Foam",
          description:
            "Brown sugar boba fresh milk includes brown sugar tapioca and Cheese Foam",
          priceM: "7.5",
          priceL: "8.2",
        },
        {
          name: "Paris 1883 Boba Fresh Milk with Cheese Foam",
          description:
            "Paris 1883 Boba Fresh Milk includes brown sugar tapioca, grass jelly, caramel pudding and topped with cheese foam (Oreo Extra)",
          priceM: "7.5",
          priceL: "8.2",
        },
        {
          name: "Brown Sugar Matcha",
          description:
            "Brown Sugar Boba Fresh Milk with Matcha includes brown sugar tapioca",
          priceM: "7.0",
          priceL: "7.7",
        },
        // ... more items in this category
      ],
    },
    {
      title: "Milk Tea Series",
      items: [
        {
          name: "Gotch Signature Milk Tea",
          description: "Signature Gotcha milk tea with brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Taro Milk Tea",
          description:
            "Signature Milk Tea with taro flavour, fresh taro, and brown sugar boba (Cheese Foam is extra)",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Coconut Milk Tea",
          description:
            "Signature Milk Tea with coconut flavour, and brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Thai Milk Tea",
          description: "Authentic Thai flavour tea with brown sugar tapioca",
          priceM: "7.8",
          priceL: "8.5",
        },
        {
          name: "Paris 1883 Milk Tea",
          description:
            "Gotcha Signature milk tea with Caramel Pudding, Brown Sugar Boba, Grass Jelly , and topped with Oreo crumble",
          priceM: "7.5",
          priceL: "8.2",
        },
        {
          name: "Tiramisu Milk Tea",
          description: "Regular milk tea with tiramisu flavour and boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Matcha Milk Tea",
          description: "Matcha Milk Tea with brown sugar tapioca",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Toffee Milk Tea",
          description: "Gotcha Milk Tea with Toffee flavour and boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Caramel Milk Tea",
          description: "Gotcha Milk Tea with caramel flavour and boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Red Bean Milk Tea",
          description:
            "Signature Milk Tea with red bean flavour, fresh red bean, and brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Green Milk Tea",
          description: "Made with green tea with brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Jade Jasmine Milk Tea",
          description: "Made with Jasmine green tea with brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "English Boba Milk Tea",
          description: "Made with Earl Grey tea with brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Barley Green Milk Tea",
          description: "Made with Barley green tea with brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Oolong Milk Tea",
          description: "Made with Oolong green tea with brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Honey Milk Tea",
          description:
            "Gotcha milk tea with honey flavour and brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Mint Milk Tea",
          description:
            "Signature Milk Tea with Nint flavour and brown sugar tapioca",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "French Boba Milk Tea",
          description: "Made with Ceylon tea and includes brown sugar boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Barley Milk Tea",
          description: "Made with Barley milk tea and includes boba",
          priceM: "7.0",
          priceL: "7.7",
        },
        // ... more items in this category
      ],
    },
    {
      title: "Yakult Green Tea Series",
      items: [
        {
          name: "Mango Yakult Green Tea",
          description: "Yakult Green Tea with mango flavour",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Peach Yakult Green Tea",
          description: "Yakult Green Tea with peach flavour",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Strawberry Yakult Green Tea",
          description: "Yakult Green Tea with strawberry flavour",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Kiwi Yakult Green Tea",
          description: "Yakult Green Tea with kiwi flavour",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Mulberry Yakult Green Tea",
          description: "Yakult Green Tea with mulberry flavour",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Yakult Green Tea",
          description: "Original Yakult Green Tea",
          priceM: "6.5",
          priceL: "7.2",
        },
        // ... more items in this category
      ],
    },
    {
      title: "Healthy Fresh Milk Series",
      items: [
        {
          name: "Strawberry Milk",
          description:
            "Signature fresh milk with strawberry flavour and fresh strawberry",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Coconut Milk",
          description: "Signature fresh milk with coconut flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Mango Milk",
          description: "Signature fresh milk with mango flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Chocolate Milk",
          description:
            "Signature fresh milk with Chocolate flavour (Cheese Foam and Orea Extra)",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Taro Milk",
          description:
            "Signature fresh milk with taro flavour, includes fresh taro",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Cherry Milk",
          description: "Signature fresh milk with cherry flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Mother's Favourite Milk",
          description:
            "Gotcha fresh milk with brown sugar tapioca, grass jelly, caramel pudding and Oreo on top",
          priceM: "7.5",
          priceL: "8.2",
        },
        {
          name: "Red Bean Milk",
          description:
            "Signature fresh milk with fresh red bean (Brown Sguar Boba extra)",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Honeydew Milk",
          description: "Signature fresh milk with honeydew flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Winter Melon Milk",
          description: "Signature fresh milk with winter melon flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Mint Milk",
          description: "Signature fresh milk with mint flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Peach Milk",
          description:
            "Signature fresh milk with peach flavour, and a slice of sweet peach",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Kiwi Milk",
          description: "Signature fresh milk with kiwi flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Matcha Red Bean Milk",
          description:
            "Signature fresh milk with matcha and red bean flavour, and topped with fresh red bean",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Mulberry Milk",
          description: "Signature fresh milk with mulberry flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Passion Fruit Milk",
          description: "Signature fresh milk with passion fruit flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
      ],
    },
    {
      title: "Tea with Cheese Foam Series",
      items: [
        {
          name: "Green Tea with Cheese Foam",
          description: "Green Tea with Cheese Foam on Top",
          priceM: "7.15",
        },
      ],
    },
    {
      title: "Yogurt Series",
      items: [
        {
          name: "Coconut Yogurt",
          description: "Yogurt drink base with coconut flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Taro Yogurt",
          description:
            "Yogurt drink base with taro flavour (Cheese Foam extra)",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Strawberry Yogurt",
          description: "Yogurt drink base with strawberry flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Peach Yogurt",
          description: "Yogurt drink base with peach flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Lychee Yogurt",
          description: "Yogurt drink base with lychee flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Cherry Yogurt",
          description: "Yogurt drink base with cherry flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Brown Sugar Boba Yogurt",
          description:
            "Gotcha milk tea with Yogurt flavour and brown sugar boba",
          priceM: "6.9",
          priceL: "7.6",
        },
        {
          name: "Matcha Yogurt",
          description:
            "Yogurt drink base with matcha flavour (Brown Sugar Boba is extra)",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Mulberry Yogurt",
          description: "Yogurt drink base with mulberry flavour",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Chocolate Yogurt",
          description:
            "Yogurt drink base with chocolate flavour (Brown sugar tapioca is extra)",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Red bean Yogurt",
          description:
            "Yogurt drink base with fresh red bean (Brown sugar tapioca is extra)",
          priceM: "6.7",
          priceL: "7.4",
        },
      ],
    },
    {
      title: "Slush Series",
      items: [
        {
          name: "Mango Slush",
          description:
            "Icy and refreshing slush with Fresh mango and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Strawberry Slush",
          description:
            "Icy and refreshing slush with Fresh strawberries and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Peach Slush",
          description:
            "Icy and refreshing slush with sweet peaches and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Lychee Slush",
          description:
            "Icy and refreshing slush with lychee flavour and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Passionfruit Slush",
          description:
            "Icy and refreshing slush with passion fruit flavour and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Pineapple Slush",
          description:
            "Icy and refreshing slush with pineapples flavour and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Lemon Slush",
          description:
            "Icy and refreshing slush with lemon flavour and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Plum Slush",
          description:
            "Icy and refreshing slush with plum flavour and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
        {
          name: "Mulberry Slush",
          description:
            "Icy and refreshing slush with mulberry flavour and Gotcha tea",
          priceM: "6.7",
          priceL: "7.4",
        },
      ],
    },
    {
      title: "Hand-Crafted Tea Series",
      items: [
        {
          name: "Oolong Green Tea",
          description: "Fresh brewed oolong green tea",
          priceL: "6.5",
        },
        {
          name: "High Mountain Oolong Green Tea",
          description: "Fresh brewed oolong black tea",
          priceL: "6.5",
        },
        {
          name: "Gotcha Oolong Green Tea",
          description: "Fresh brewed Signature Gotcha Oolong tea",
          priceL: "6.5",
        },
        {
          name: "Jasmine Green Tea",
          description: "Fresh brewed original jasmine green tea",
          priceL: "6.5",
        },
        {
          name: "Barley Green Tea",
          description: "Fresh brewed barley green tea",
          priceL: "6.5",
        },
        {
          name: "Sun Moon Lake Black Tea",
          description: "Fresh brewed black tea",
          priceL: "6.5",
        },
        {
          name: "Early Grey Black Tea",
          description: "Fresh brewed early grey black tea",
          priceL: "6.5",
        },
        {
          name: "Jade Jasmine Green Tea",
          description: "Fresh brewed jade jasmine green tea",
          priceL: "6.5",
        },
        {
          name: "Cheese Foam Jade Jasmine Green Tea",
          description: "Fresh brewed jade jasmine green tea with cheese foam",
          priceL: "7.0",
        },
        {
          name: "Barley Black Tea",
          description: "Fresh brewed barley black tea",
          priceL: "6.5",
        },
        {
          name: "Ceylon Black Tea",
          description: "Fresh brewed ceylon black tea",
          priceL: "6.5",
        },
        {
          name: "Four-season Green Tea",
          description: "Fresh brewed four-season green tea",
          priceL: "6.5",
        },
        {
          name: "Assam Black Tea",
          description: "Fresh brewed assam black tea",
          priceL: "6.5",
        },
        {
          name: "Alishan Tea",
          description: "Fresh brewed Alishan tea",
          priceL: "6.5",
        },
      ],
    },
    {
      title: "Fruit Tea Series",
      items: [
        {
          name: "Lychee Fruit Tea",
          description: "Fresh brewed jasmine green tea with lychee flavour",
          priceL: "7.0",
        },
        {
          name: "Mulberry Fruit Tea",
          description: "Fresh brewed jasmine green tea with mulberry flavour",
          priceL: "7.0",
        },
        {
          name: "Mango Fruit Tea",
          description: "Fresh brewed jasmine green tea with mango flavour",
          priceL: "7.0",
        },
        {
          name: "Gotcha Signature Fruit Tea",
          description:
            "Fresh brewed jasmine green tea with peach flavour and multiple fruits",
          priceL: "9.0",
        },
        {
          name: "Peach Fruit Tea",
          description: "Fresh brewed jasmine green tea with peach flavour",
          priceL: "7.0",
        },
        {
          name: "Passionfruit Fruit Tea",
          description:
            "Fresh brewed jasmine green tea with passion fruit flavour",
          priceL: "7.0",
        },
        {
          name: "Strawberry Fruit Tea",
          description: "Fresh brewed jasmine green tea with strawberry flavour",
          priceL: "7.0",
        },
        {
          name: "Kumquat Fruit Tea",
          description:
            "Fresh brewed jasmine green tea with kumquat and lemon flavour",
          priceL: "7.3",
        },
        {
          name: "Pineapple Fruit Tea",
          description: "Fresh brewed jasmine green tea with pineapple flavour",
          priceL: "7.0",
        },
        {
          name: "Honeydew Fruit Tea",
          description: "Fresh brewed jasmine green tea with Honeydew flavour",
          priceL: "7.0",
        },
        {
          name: "Honey Fruit Tea",
          description: "Fresh brewed jasmine green tea with honey flavour",
          priceL: "7.0",
        },
        {
          name: "Kumquat Plum Fruit Tea",
          description:
            "Fresh brewed jasmine green tea with a combination of kumquat, green plum and dried plum flavour",
          priceL: "7.3",
        },
        {
          name: "Honey Lemon Fruit Tea",
          description:
            "Fresh brewed jasmine green tea with a lemon and honey flavour",
          priceL: "7.3",
        },
        {
          name: "Grape Fruit Tea",
          description: "Fresh brewed jasmine green tea with grape flavour",
          priceL: "7.0",
        },
        {
          name: "Orange Fruit Tea",
          description: "Fresh brewed jasmine green tea with orange flavour",
          priceL: "7.0",
        },
        {
          name: "Lemon Fruit Tea",
          description: "Fresh brewed jasmine green tea with lemon flavour",
          priceL: "7.0",
        },
        {
          name: "Green Plum Fruit Tea",
          description: "Fresh brewed jasmine green tea with green plum flavour",
          priceL: "6.5",
        },
        {
          name: "Lemon Jade Fruit Tea",
          description: "Fresh brewed jade jasmine green tea with lemon flavour",
          priceL: "7.0",
        },
        {
          name: "Pomelo Fruit Tea",
          description: "Fresh brewed jasmine green tea with pomelo flavour",
          priceL: "7.0",
        },
        {
          name: "Plum Fruit Tea",
          description: "Fresh brewed jasmine green tea with dried plum flavour",
          priceL: "7.0",
        },
        {
          name: "Mint Fruit Tea",
          description: "Fresh brewed jasmine green tea with mint flavour",
          priceL: "7.0",
        },
        {
          name: "Lychee Oolong Tea",
          description:
            "Lychee Oolong Tea, come with lychee popping boba and fresh lychee",
          priceL: "7.0",
        },
        {
          name: "Kiwi Fruit Tea",
          description: "Fresh brewed jasmine green tea with kiwi flavour",
          priceL: "7.0",
        },
      ],
    },
    {
      title: "Macchiato Series",
      items: [
        {
          name: "Strawberry Macchiato",
          description: "Icy refreshing strawberry slush with cheese foam",
          priceL: "7.5",
        },
        {
          name: "Mango Macchiato",
          description:
            "Icy refreshing mango slush with cheese foam (popping peach boba extra)",
          priceL: "7.5",
        },
        {
          name: "Matcha Red Bean Macchiato",
          description:
            "Icy refreshing matcha red bean smoothie with cheese foam",
          priceL: "7.5",
        },
        {
          name: "Kiwi Macchiato",
          description: "Icy refreshing kiwi slush with cheese foam",
          priceL: "7.5",
        },
        {
          name: "Cherry Macchiato",
          description:
            "Icy refreshing cherry smoothie with cheese foam (Grass jelly is extra)",
          priceL: "7.5",
        },
        {
          name: "Peach Macchiato",
          description:
            "Icy refreshing peach slush with cheese foam (Popping boba is extra)",
          priceL: "7.5",
        },
        {
          name: "Orange Macchiato",
          description: "Icy refreshing orange slush with cheese foam",
          priceL: "7.5",
        },
        {
          name: "Grape Macchiato",
          description:
            "Icy refreshing grape slush with cheese foam (Grass jelly is extra)",
          priceL: "7.5",
        },
      ],
    },
    {
      title: "Latte Series",
      items: [
        {
          name: "Matcha Latte",
          description: "Fresh milk with premium matcha powder layered on top",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Black Tea Latte",
          description:
            "Fresh milk with freshly brewed Ceylon black tea layered on top (Brown sugar boba extra)",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Winter Melon Latte",
          description: "Fresh milk with winter melon flavour layered on top",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Chocolate Latte",
          description:
            "Fresh milk with mixed chocolate drink layered on top (Brown sugar boba extra)",
          priceM: "6.5",
          priceL: "7.2",
        },
      ],
    },
    {
      title: "Soda Tea Series",
      items: [
        {
          name: "Strawberry Soda Tea",
          description:
            "Strawberry flavoured soda with blue butterfly tea layered on top, includes fresh strawberry",
          priceL: "7.5",
        },
        {
          name: "Peach Soda Tea",
          description:
            "Peach flavoured soda with blue butterfly tea layered on top, includes sweet peach",
          priceL: "7.5",
        },
        {
          name: "Lemon Soda Tea",
          description:
            "Lemon flavoured soda with blue butterfly tea layered on top, and a slice of lemon",
          priceL: "7.5",
        },
        {
          name: "Passionfruit Soda Tea",
          description:
            "Passion fruit flavoured soda with blue butterfly tea layered on top",
          priceL: "7.5",
        },
        {
          name: "Kiwi Soda Tea",
          description:
            "Kiwi flavoured soda with blue butterfly tea layered on top",
          priceL: "7.5",
        },
        {
          name: "Mulberry Soda Tea",
          description:
            "Mulberry flavoured soda with blue butterfly tea layered on top",
          priceL: "7.5",
        },
        {
          name: "Mint Soda Tea",
          description:
            "Minty flavoured soda with blue butterfly tea layered on top",
          priceL: "7.5",
        },
        {
          name: "Plum Soda Tea",
          description:
            "Dried plum flavoured soda with blue butterfly tea layered on top",
          priceL: "7.5",
        },
      ],
    },
    {
      title: "Smoothie Series",
      items: [
        {
          name: "Taro Smoothie",
          description: "Icy refreshing taro smoothie with REAL taro",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Matcha Red Bean Smoothie",
          description:
            "Icy refreshing matcha red bean smoothie (Cheese Foam is extra)",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Chocolate Caramel Smoothie",
          description: "Icy refreshing chocolate caramel smoothie",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Red Bean Smoothie",
          description: "Icy refreshing red bean smoothie",
          priceM: "6.5",
          priceL: "7.2",
        },
        {
          name: "Mango Parfait",
          description:
            "Coconut mango smoothie with mango chunks, pandan jelly and colourful jelly",
          priceL: "7.8",
        },
      ],
    },
    {
      title: "Brown Sugar Series",
      items: [
        {
          name: "Cream Brulee Brown Sugar",
          description: "Brown sugar boba fresh milk with cream brulee",
          priceM: "7.8",
          priceL: "8.5",
        },
        {
          name: "Brown Sugar Boba Fresh Milk",
          description: "Brown sugar boba fresh milk",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Brown Sugar Boba Matcha",
          description: "Brown sugar boba fresh milk with matcha",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Brown Sugar Boba Chocolate",
          description: "Brown sugar boba fresh milk with chocolate",
          priceM: "7.0",
          priceL: "7.7",
        },
        {
          name: "Cheese Foam 1883 Brown Sugar Boba",
          description: "",
          priceM: "7.5",
          priceL: "8.2",
        },
        {
          name: "Cheese Foam Brown Sugar",
          description: "Brown sugar boba fresh milk with cheese foam",
          priceM: "7.5",
          priceL: "8.2",
        },
        {
          name: "Strawberry Pink",
          description:
            "Strawberry Pink with a hint of coconut flavor. Come with colorful jelly and crystal boba",
          priceL: "8.2",
        },
      ],
    },
    {
      title: "House Specials",
      items: [
        {
          name: "Mango Sensation",
          description:
            "Mouthwatering Dessert come with a Mango base and our Signature Milk loaded with topping. Topping; Fresh Mango, Taro & Sweet Potato Balls, Palm Seed. Crystal Boba and Coconut Jelly",
          priceL: "9.5",
        },
        {
          name: "Purple Delight",
          description:
            "Mouthwatering Dessert come with a hint of Coconut Flavor and our Signature Milk loaded with topping. Topping; Fresh Taro and Red Bean, Brown Sugar Tapioca, Taro & Sweet Potato Balls, Palm Seed and Coconut Jelly",
          priceL: "9.5",
        },
        {
          name: "Mango Parfait",
          description:
            "Coconut mango smoothie with mango chunks, pandan jelly and colourful jelly",
          priceL: "7.8",
        },
        {
          name: "Lychee Oolong Tea",
          description:
            "Lychee Oolong Tea, come with lychee popping boba and fresh lychee",
          priceL: "7.0",
        },
      ],
    },

    // ... more categories
  ];

  return (
    <div>
      <Head>
        <title>Menu - Gotcha Bubble Tea</title>
        <meta
          name="description"
          content="Explore our delicious range of bubble teas and other beverages."
        />
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Our Menu</h1>

        {menu.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-3xl font-bold my-4">{category.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white rounded-lg shadow-lg p-4"
                >
                  {item.image && (
                    <div className="relative h-40 w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover" // This can be 'contain' as well
                        className="rounded-t-lg"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mt-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    {item.priceM && (
                      <span className="text-lg font-bold">{`M $${item.priceM}`}</span>
                    )}
                    {item.priceL && (
                      <span className="text-lg font-bold">{`L $${item.priceL}`}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Menu;
