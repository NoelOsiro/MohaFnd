import React from "react";
import "./Loader.css";


export const PageLoader: React.FC = () => {
  return (
        <div className="page-layout">
          <div className="loader">
            <img src='/favicon.ico' alt="Loading..." className="zoom" />
          </div>
        </div>
  );
};