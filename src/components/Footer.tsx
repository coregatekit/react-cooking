import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full mx-auto">
      <hr />
      <div className="mx-auto p-4">
        Copyright Ⓒ 2022{" "}
        <span>
          <a className="text-blue-600 hover:text-orange-600" href="https://github.com/coregatekit">Coregatekit</a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
