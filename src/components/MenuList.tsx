import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { IState as IProps } from "../pages/Home";

export const MenuList: React.FC<IProps> = ({ menus }) => {
  const renderList = () => {
    return menus.map((menu) => {
      return (
        <div className="p-6">
          <Card className="w-96 mt-6">
            <CardHeader color="grey" className="relative h-56">
              <img src={menu.image} alt={menu.name} className="w-full h-full" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                {menu.name}
              </Typography>
              <Typography>
                {menu.description}
              </Typography>
            </CardBody>
          </Card>
        </div>
      );
    });
  };
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {renderList()}
      </div>
    </div>
  );
};
