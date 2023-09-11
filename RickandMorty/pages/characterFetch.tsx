import React from "react";

interface CharacterData {
  id: number;
  name: string;
  image: string;
}

const CharacterFetch = async () => {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/character").then(
      (data) => data.json()
    );
    return data.results as CharacterData[]; //indicate the return data type
  } catch (error) {
    console.error();
    return [];
  }
};

export default CharacterFetch;
//if doesn't export in "characterService.ts", should import it to index.tsx with curly braces like this: {characterFetch}
