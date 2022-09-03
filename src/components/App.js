import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const toysURL = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allToys, setAllToys] = useState([]);
  const [updateInitialState, setUpdateInitialState] = useState(true);


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // GET REQUEST 
  useEffect(() => {
    fetch(toysURL)
      .then(resp => resp.json())
      .then(setAllToys);
  }, [updateInitialState]); // check to see if dependency needs to render something 

  // POST REQUEST
  function addToy(toy) {
    fetch(toysURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((resp) => resp.json())
      .then(setUpdateInitialState(!updateInitialState));
  }

  // PATCH REQUEST 
  function addLikes(toy) {
    const newLikes = toy.likes + 1; // add / increment when like button is clicked 
    fetch(`${toysURL}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    })
    .then(setUpdateInitialState(!updateInitialState));
  }
  // DELETE: Do not need body && resp because we are deleting reminder!!
  function deleteToy(id) {
    fetch(`${toysURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(setUpdateInitialState(!updateInitialState));
  }
  return (
    <>
      <Header />
      {showForm && <ToyForm addToy={addToy} />} 
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        allToys={allToys}
        addLikes={addLikes}
        deleteToy={deleteToy}
      />
    </>
  );
}

export default App;
