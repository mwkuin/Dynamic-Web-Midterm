import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import DATA from "../components/Data";
import Header from "../pages/Header";

function Home () {
  const [category, setCategory] = useState("");
  const [backColor, setBackColor] = useState("");


  let history = useHistory();

  useEffect(() => {
  //get category from url
  let searchParams = history.location.search;
  const urlParams = new URLSearchParams(searchParams);
  let category = urlParams.get("category");
  if (urlParams.has("category")) {
    urlParams.set("category", `${category}`)
    setCategory(category);
  }

}, [history]);



  // useEffect(() => {
  //   if (category === "Shrubs") {
  //     setBackColor('51, 153, 255');
  //   }
  //   else if (category === "ContainerPlants") {
  //     setBackColor('153, 76, 0');
  //   }
  //   else if (category === "Perennials") {
  //     setBackColor('128, 128, 128');
  //   }
  //   else if (category ==="Succulents") {
  //     setBackColor('153, 51, 255');
  //   }
  //
  // }, [backColor]);


return(
        <div>
            <Header/>
            <div class="CategoryName">
            <h1>Plants in {category}</h1>
            </div>

        </div>


    );
}

export default Home;
