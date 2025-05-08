import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../data.json";

export default function InfoPage() {
  const { postId } = useParams();
  const [country, setCountry] = useState(data);

   async function filterData() {
    const country = data.filter((item) => item.id.includes(postId));
    setCountry(country);
  }

  useEffect(() => {
    filterData(postId);
  }, []);

  //

  return (
    <div>
      {country.map((item) => (
        <div>
          <h1>{item.name}</h1>        
          <img src={item.pictures.various.background} alt="" />
        </div>
        
      ))}
    </div>
  );
}
