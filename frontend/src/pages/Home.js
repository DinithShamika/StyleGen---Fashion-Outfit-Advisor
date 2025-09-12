import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #e91e63;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ad1457;
  }
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Feature = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureText = styled.p`
  color: #666;
`;

function Home() {
  return (
    <Container>
      <Hero>
        <Title>Discover Your Style</Title>
        <Subtitle>
          StyleGen helps you create, organize, and discover amazing outfits for any occasion.
        </Subtitle>
        <Button to="/outfits">Explore Outfits</Button>
      </Hero>

      <Features>
        <Feature>
          <FeatureTitle>Create Outfits</FeatureTitle>
          <FeatureText>
            Build your perfect outfit by combining different clothing items and accessories.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureTitle>Get Inspired</FeatureTitle>
          <FeatureText>
            Discover outfit ideas from our community of fashion enthusiasts.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureTitle>Organize Your Wardrobe</FeatureTitle>
          <FeatureText>
            Keep track of your clothing items and create outfits for different occasions.
          </FeatureText>
        </Feature>
      </Features>
    </Container>
  );
}

export default Home;