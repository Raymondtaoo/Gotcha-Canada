import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  description: string;
  priceM?: string;
  priceL?: string;
  priceXL?: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<MenuCategory[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch("/menu.json");
      const data = await response.json();
      setMenu(data);
    };

    fetchMenu();
  }, []);

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
                    {item.priceXL && (
                      <span className="text-lg font-bold">{`XL $${item.priceXL}`}</span>
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
