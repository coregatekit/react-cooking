import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import { menus } from "../data/menus";

import { MenuList } from "../components/MenuList";

export interface IMenu {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  methods: string[];
  image: string;
}

export interface IState {
  menus: IMenu[];
}

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<IState['menus']>([]);

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  useEffect(() => {
    const results = menus.filter((menu) =>
      menu.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(results);
  }, [searchQuery]);

  return (
    <div>
      <div className="flex justify-center mt-16 mb-4">
        <div className="text-center text-4xl">ค้นหาเมนูที่คุณต้องการ</div>
      </div>
      <div className="flex justify-center mt-2 mb-2">
        <div className="p-2">
          <TextField
            id="search-menu"
            fullWidth
            variant="standard"
            placeholder="ผัดเปรี้ยวหวานหมูสับ..."
            style={{ marginTop: 4, alignContent: "center" }}
            inputProps={{
              style: {
                fontSize: 24,
              },
            }}
            onInput={handleSearchQueryChange}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <MenuList menus={searchResult} />
      </div>
    </div>
  );
}

export default Home;
