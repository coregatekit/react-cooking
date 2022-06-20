import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { menus } from "../data/menus";
import { IMenu } from "./Home";
import NotFoundScreen from "./NotFound";

function MenuScreen() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [menu, setMenu] = useState<IMenu>();

  useEffect(() => {
    setLoading(true);
    const menu = menus.find((menu) => menu.id === id);
    setMenu(menu);
    setLoading(false);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!menu) return <NotFoundScreen />;
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-12 mt-8 mb-24">
        <img
          src={menu.image}
          alt={menu.name}
          className="inset-0 w-full h-96 object-cover shadow-lg"
        />
        <div className="text-6xl">{menu.name}</div>
        <div className="text-xl">{menu.description}</div>
        <div className="text-4xl">วิธีทำ</div>
        <div className="grid grid-cols-1 gap-6">
          {menu.methods.map((method, index) => {
            return (
              <div>
                {index + 1}. {method}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
