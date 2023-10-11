import React, { useState } from "react";
import ReviewArray from "./component/ReviewArray";
import "./App.css";

const Reviews: React.FC = () => {
   const [items, setItems] = useState([
      {
         id: 1,
         image: "./images/susan.jpeg",
         text1: "Susan Smith",
         text2: "WEB DEVELOPER",
         text3: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
         id: 2,
         image: "./images/anna.jpeg",
         text1: "Anna Johnson",
         text2: "WEB DESIGNER",
         text3: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
         id: 3,
         image: "./images/peter.jpeg",
         text1: "Peter Jones",
         text2: "INTERN",
         text3: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
         id: 4,
         image: "./images/bill.jpeg",
         text1: "Bill Anderson",
         text2: "THE BOSS",
         text3: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
      },
   ]);

   const [currentId, setCurrentId] = useState(1);

   const nextClick = () => {
      setCurrentId((nextId) => (nextId % items.length) + 1);
   };

   const prevClick = () => {
      setCurrentId((prevId) => (prevId === 1 ? items.length : prevId - 1));
   };

   const randClick = () => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setCurrentId(randomIndex + 1);
   };

   return (
      <div>
         <ReviewArray
            item={items.find((item) => item.id === currentId)}
            onNextClick={nextClick}
            onPrevClick={prevClick}
            onRandClick={randClick}
         />
      </div>
   );
};

export default Reviews;
