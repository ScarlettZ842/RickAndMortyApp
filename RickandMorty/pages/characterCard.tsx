import React from "react";

interface CharacterCardProps {
  character: { id: number; name: string; image: string };
  index: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, index }) => {
  return (
    <div key={character.id} className="project-card">
      <img
        src={character.image}
        alt={`pic ${index + 1}`}
        className="project-image"
      />
      <div className="project-card-title ">{character.name}</div>
    </div>
  );
};

export default CharacterCard;
