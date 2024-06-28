import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

interface Change {
  categoryIndex: number;
  itemIndex: number;
  field: keyof MenuItem;
  oldValue: string | undefined;
  newValue: string | undefined;
}

const Admin: React.FC = () => {
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [originalMenu, setOriginalMenu] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [changes, setChanges] = useState<Change[]>([]);

  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const password = prompt("Enter admin password:");
    if (password === null || password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      router.push("/");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setOriginalMenu(JSON.parse(JSON.stringify(data))); // Deep copy for tracking changes
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    if (authenticated) {
      fetchMenu();
    }
  }, [authenticated]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    categoryIndex: number,
    itemIndex: number,
    field: keyof MenuItem
  ) => {
    const newMenu = [...menu];
    const oldValue = originalMenu[categoryIndex].items[itemIndex][field];
    const newValue = e.target.value;

    newMenu[categoryIndex].items[itemIndex][field] = newValue;
    setMenu(newMenu);

    const existingChangeIndex = changes.findIndex(
      change =>
        change.categoryIndex === categoryIndex &&
        change.itemIndex === itemIndex &&
        change.field === field
    );

    if (existingChangeIndex !== -1) {
      const updatedChanges = [...changes];
      updatedChanges[existingChangeIndex] = { categoryIndex, itemIndex, field, oldValue, newValue };
      setChanges(updatedChanges);
    } else {
      setChanges([...changes, { categoryIndex, itemIndex, field, oldValue, newValue }]);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(menu, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'menu.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!authenticated) {
    return <div>Authenticating...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Admin - Update Menu</h1>
      {menu.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
          {category.items.map((item, itemIndex) => (
            <div key={itemIndex} className="mb-4 p-4 border border-gray-300 rounded">
              <input
                type="text"
                value={item.name}
                onChange={(e) =>
                  handleInputChange(e, categoryIndex, itemIndex, "name")
                }
                placeholder="Name"
                className={`block w-full mb-2 p-2 border rounded ${item.name !== originalMenu[categoryIndex].items[itemIndex].name ? 'border-red-500' : 'border-gray-300'}`}
              />
              <input
                type="text"
                value={item.description}
                onChange={(e) =>
                  handleInputChange(e, categoryIndex, itemIndex, "description")
                }
                placeholder="Description"
                className={`block w-full mb-2 p-2 border rounded ${item.description !== originalMenu[categoryIndex].items[itemIndex].description ? 'border-red-500' : 'border-gray-300'}`}
              />
              <input
                type="text"
                value={item.priceM}
                onChange={(e) =>
                  handleInputChange(e, categoryIndex, itemIndex, "priceM")
                }
                placeholder="Price M"
                className={`block w-full mb-2 p-2 border rounded ${item.priceM !== originalMenu[categoryIndex].items[itemIndex].priceM ? 'border-red-500' : 'border-gray-300'}`}
              />
              <input
                type="text"
                value={item.priceL}
                onChange={(e) =>
                  handleInputChange(e, categoryIndex, itemIndex, "priceL")
                }
                placeholder="Price L"
                className={`block w-full mb-2 p-2 border rounded ${item.priceL !== originalMenu[categoryIndex].items[itemIndex].priceL ? 'border-red-500' : 'border-gray-300'}`}
              />
              <input
                type="text"
                value={item.priceXL}
                onChange={(e) =>
                  handleInputChange(e, categoryIndex, itemIndex, "priceXL")
                }
                placeholder="Price XL"
                className={`block w-full mb-2 p-2 border rounded ${item.priceXL !== originalMenu[categoryIndex].items[itemIndex].priceXL ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>
          ))}
        </div>
      ))}
      {changes.length > 0 && (
        <div className="mb-4 p-4 border border-gray-300 rounded bg-yellow-100">
          <h3 className="text-xl font-semibold mb-2">Summary of Changes</h3>
          <ul>
            {changes.map((change, index) => (
              <li key={index} className="mb-2">
                {`Category: ${menu[change.categoryIndex].title}, Item: ${menu[change.categoryIndex].items[change.itemIndex].name}, Field: ${change.field}, Old Value: ${change.oldValue}, New Value: ${change.newValue}`}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={handleDownload}
        className="bg-green-500 text-white p-3 rounded font-semibold hover:bg-green-600"
      >
        Download Updated Menu
      </button>
    </div>
  );
};

export default Admin;