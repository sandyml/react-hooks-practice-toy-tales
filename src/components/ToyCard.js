import React from "react";

function ToyCard({ toy, addLikes, deleteToy }) {

  // function for delete toys
  const handleDelete = () => {
    deleteToy(toy.id);
  }

  // function for heartings / likes (reminder: change heart emoji to make it look cute)
  const handleLikes = () => {
    addLikes(toy);
  }


  return (
    <div className="card">
      {console.log("This is in ToyCard Component")}
      <h2>{toy.name}</h2>
      <img 
      src={toy.image} 
      alt={toy.name} 
      className="toy-avatar" 
      />
      <p>{toy.likes} Likes {"❤️"}</p>
      <button className="like-btn" onClick={handleLikes}>
        Like
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
