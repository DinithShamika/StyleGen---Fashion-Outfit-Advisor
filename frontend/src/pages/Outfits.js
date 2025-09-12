import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import OutfitCard from '../components/OutfitCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: #333;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a67d8;
  }
`;

const OutfitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

function Outfits() {
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    fetchOutfits();
  }, []);

  const fetchOutfits = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/outfits');
      setOutfits(res.data);
    } catch (err) {
      console.error('Error fetching outfits:', err);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Explore Outfits</Title>
        <Button>Create Outfit</Button>
      </Header>
      <OutfitsGrid>
        {outfits.map(outfit => (
          <OutfitCard key={outfit._id} outfit={outfit} />
        ))}
      </OutfitsGrid>
    </Container>
  );
}

export default Outfits;