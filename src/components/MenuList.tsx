import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { IMenu, IState as IProps } from "../pages/Home";

export const MenuList: React.FC<IProps> = ({ menus }) => {
  let navigate = useNavigate();

  const handleOnClickMenu = (menu: IMenu) => {
    navigate({
      pathname: "menu",
      search: `?${createSearchParams({
        q: menu.id,
      })}`,
    });
  };

  const renderList = () => {
    return menus.map((menu) => {
      return (
        <Button
          key={menu.id}
          variant="text"
          onClick={() => handleOnClickMenu(menu)}
        >
          <Card key={menu.id} className="w-96 mt-6">
            <CardHeader color="grey" className="relative h-56">
              <img src={menu.image} alt={menu.name} className="w-full h-full" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                {menu.name}
              </Typography>
              <Typography>{menu.description}</Typography>
            </CardBody>
          </Card>
        </Button>
      );
    });
  };
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {renderList()}
      </div>
    </div>
  );
};
