import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.div`
  height: 200px;
  background-color: #ddd;
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const Description = styled.p`
  color: #666;
  margin: 0 0 1rem 0;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.9rem;
`;

function OutfitCard({ outfit }) {
  // For now, using a placeholder image
  const imageUrl = "https://via.placeholder.com/300x200?text=Outfit+Image";

  return (
    <Card>
      <Image image={imageUrl} />
      <Content>
        <Title>{outfit.name}</Title>
        <Description>{outfit.description}</Description>
        <Meta>
          <span>By: {outfit.createdBy?.username}</span>
          <span>{outfit.occasion}</span>
        </Meta>
      </Content>
    </Card>
  );
}

export default OutfitCard;