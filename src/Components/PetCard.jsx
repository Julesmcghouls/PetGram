import React from 'react';

function PetCard({ pet }) {
return (
<div className="pet-card">
    <img src={pet.image} alt={pet.name} />
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
</div>
);
}

export default PetCard;