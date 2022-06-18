import React from "react";

function Search() {
  return (
    <div>
      <div className="flex justify-between mt-16 mb-4">
        <div>ค้นหาเมนูที่คุณต้องการ</div>
        <div>Icon</div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="bg-green-400 basis-1/4 border-r-2 border-r-black p-2">
          01
        </div>
        <div className="bg-red-400 basis-1/2">02</div>
      </div>
    </div>
  );
}

export default Search;
