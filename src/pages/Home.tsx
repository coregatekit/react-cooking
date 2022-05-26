import { TextField } from "@mui/material";
import React from "react";

function Home() {
  return (
    <div className="container mx-auto">
      <div className="text-xl3 font-bold underline">Hello World!</div>
      <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </div>
  );
}

export default Home;
