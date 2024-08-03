import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #dde5b6;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Question = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #132a13;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0f2810;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #adc178;
  border-radius: 10px;
  text-align: center;
`;

const Questionnaire = () => {
  const [transport, setTransport] = useState('');
  const [carType, setCarType] = useState('');
  const [hoursDriven, setHoursDriven] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple calculation based on user input
    const carbonFootprint = (hoursDriven * 0.5) + (carType === 'electric' ? 1 : 3) + (transport === 'public' ? 2 : 5);
    const worldAverage = 10; // Example value

    const comparison = carbonFootprint > worldAverage ? 'above' : 'below';
    const difference = Math.abs(carbonFootprint - worldAverage);

    setResult({
      carbonFootprint,
      comparison,
      difference
    });
  };

  return (
    <Container>
      <Title>Carbon Footprint Questionnaire</Title>
      <form onSubmit={handleSubmit}>
        <Question>
          <Label>Type of Public Transport:</Label>
          <Input
            type="text"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          />
        </Question>
        <Question>
          <Label>Type of Car:</Label>
          <Input
            type="text"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
          />
        </Question>
        <Question>
          <Label>Hours Driven per Week:</Label>
          <Input
            type="number"
            value={hoursDriven}
            onChange={(e) => setHoursDriven(e.target.value)}
          />
        </Question>
        <Button type="submit">Calculate</Button>
      </form>
      {result && (
        <Result>
          <p>Your carbon footprint is {result.carbonFootprint} units.</p>
          <p>This is {result.comparison} the world average by {result.difference} units.</p>
          <p>Recommendations to reduce your carbon footprint:</p>
          <ul>
            <li>Use public transport more frequently.</li>
            <li>Consider switching to an electric vehicle.</li>
            <li>Reduce your driving hours where possible.</li>
          </ul>
        </Result>
      )}
    </Container>
  );
};

export default Questionnaire;
