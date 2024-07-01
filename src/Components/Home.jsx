import React from 'react';
import PetCard from './PetCard';



const pets = [
{ id: 1, name: 'Franklin', image: './public/pet1.png', description: 'Roomba' },
{ id: 2, name: 'Daddys Daddy', image: './public/pet2.png', description: 'Bondage Dog' },
{ id: 3, name: 'Snoopy', image: './public/pet3.png', description: 'A mischievous pup.' },
];

function Home() {
return (
<div className="home">
    <h1>WoofGram</h1>
    <div className="pet-cards">
    {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
    ))}
    </div>
</div>
);
}

export default Home;