import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ allToys, addLikes, deleteToy }) {

  
  return (
    <div id="toy-collection">
      {allToys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          addLikes={addLikes}
          deleteToy={deleteToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
