import React, {useState} from 'react';
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

import cars from '../shared/cars.json';

import Fuse from "fuse.js";

const Home = () => {

  const [data, setData] = useState(cars);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(cars);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["type", "vehicle"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <div>
      <Navbar searchData={searchData}/>
      <Slider/>
      <Categories/>
      <Products products={data}/>
    </div>

  );
};

export default Home;
