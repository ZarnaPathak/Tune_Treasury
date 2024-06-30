import React from "react";

const Navbar = () => {
  return (
    <div className="container d-flex bg-light bg-gradient border rounded-3 border-dark">
      <div className="container d-flex justify-content-left">
        <nav className="navbar navbar-secondary">
          <div className="container-fluid">
            <img
              src="/music.svg"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top m-2"
            />
            <h4 className="font-monospace">Tune Treasury</h4>
          </div>
        </nav>
        {/*<div className="d-flex justify-content-right">
        <button
          className="btn btn-light btn-outline-dark"
          onClick={() => {
            {
              handleModel();
              setShowModel(!showModel);
            }
          }}
        >
          Add Song
        </button>
        </div>*/}
      </div>
    </div>
  );
};

export default Navbar;
