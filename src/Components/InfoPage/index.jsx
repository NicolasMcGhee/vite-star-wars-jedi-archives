import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../data.json";

export default function InfoPage() {
  const { postId } = useParams();
  const [country, setCountry] = useState(data);

  function filterData() {
    const country = data.filter((item) => item.id.includes(postId));
    setCountry(country);
  }

  useEffect(() => {
    filterData(postId);
    console.log(country);
    console.log(postId)
  }, []);

  return (
    <div>
      {country.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}
