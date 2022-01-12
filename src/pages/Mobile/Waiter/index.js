import React from "react";
import { Link } from "react-router-dom";

export const MobileWaiterPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/command/1">1</Link>
        </li>
        <li>
          <Link to="/command/2">2</Link>
        </li>
        <li>
          <Link to="/command/3">3</Link>
        </li>
        <li>
          <Link to="/command/4">4</Link>
        </li>
        <li>
          <Link to="/command/5">5</Link>
        </li>
        <li>
          <a href="/command/6">6</a>
        </li>
      </ul>
    </div>
  );
};
