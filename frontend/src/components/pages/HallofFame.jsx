import React from 'react'
import '../css/HallofFame.css'
const HallofFame = () => {

    const hallOfFamePhotos = [
  {
    id: 1,
    image: "/images/person1.jpg",
    name: "Aarav Mehta",
    title: "Top Florist 2024"
  },
  {
    id: 2,
    image: "/images/person2.jpg",
    name: "Nisha Kapoor",
    title: "Best Designer"
  },
  {
    id: 3,
    image: "/images/person3.jpg",
    name: "Ravi Singh",
    title: "Customer Delight Award"
  },
  {
    id: 4,
    image: "/images/person4.jpg",
    name: "Meera Joshi",
    title: "Creative Artist"
  }
];


 return (
    <div className="hall-of-fame">
      <h1>🌟 Hall of Fame 🌟</h1>
      <div className="hof-grid">
        {hallOfFamePhotos.map(person => (
          <div key={person.id} className="hof-card">
            <img src={person.image} alt={person.name} className="hof-image" />
            <h3>{person.name}</h3>
            <p>{person.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HallofFame
