import { TextField } from "@mui/material";
import React, { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-40">
        <div className="text-6xl text-center p-2">ค้นหาเมนูที่คุณต้องการ</div>
        <div className="p-2">
          <TextField
            id="search-menu"
            fullWidth
            variant="standard"
            placeholder="ผัดเปรี้ยวหวานหมูสับ..."
            style={{ marginTop: 16, width: "50%", alignContent: "left"}}
            inputProps={{
              style: {
                fontSize: 40,
              },
            }}
            onInput={handleSearchQueryChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
