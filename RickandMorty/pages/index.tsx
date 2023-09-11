import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Title from "./title";
import Pagination from "./pagination";
import CharacterCard from "./characterCard";
import characterFetch from "./characterFetch";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface HomeProps {
  characterData: [];
  totalPage: number;
}

const Home: React.FC<HomeProps> = ({ characterData, totalPage }) => {
  const router = useRouter();

  //Pagination for the character
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const characterPerPage: number = 9;
  const startIndex: number = (currentPage - 1) * characterPerPage;
  const endIndex: number = currentPage * characterPerPage;

  const displayCharacters = characterData!.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1) {
      return 1;
    } else if (pageNumber > totalPage) {
      return totalPage;
    }
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-top">
          <Title text="Rick and Morty Characters" />
        </div>
        <div className="projects-grid">
          <div className="project-card-container">
            {displayCharacters.map((character: Character, index: number) => (
              <CharacterCard
                key={character.id}
                character={character}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Render the pagination buttons */}
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        selectedPage={selectedPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const data = await characterFetch();

    // Calculate total pages based on characterData length and characterPerPage
    const totalPage = Math.ceil(data.length / 9);

    return {
      props: {
        characterData: data,
        totalPage,
      },
    };
  } catch (error) {
    return {
      props: {
        characterData: [],
        totalPage: 1,
      },
    };
  }
}

export default Home;
