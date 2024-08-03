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

const Select = styled.select`
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
  const [electricityUsage, setElectricityUsage] = useState('');
  const [diet, setDiet] = useState('');
  const [waste, setWaste] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple calculation based on user input (this is just an example, real calculation would be more complex)
    const carbonFootprint =
      (hoursDriven * 0.5) +
      (carType === 'electric' ? 1 : 3) +
      (transport === 'public' ? 2 : 5) +
      (electricityUsage * 0.2) +
      (diet === 'vegetarian' ? 2 : 5) +
      (waste === 'recycling' ? 1 : 4);

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
          <Select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="public">Public Transport</option>
            <option value="private">Private Transport</option>
            <option value="none">None</option>
          </Select>
        </Question>
        <Question>
          <Label>Type of Car:</Label>
          <Select
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
            <option value="gasoline">Gasoline</option>
            <option value="diesel">Diesel</option>
            <option value="none">none</option>
          </Select>
        </Question>
        <Question>
          <Label>Hours Driven per Week:</Label>
          <Input
            type="number"
            value={hoursDriven}
            onChange={(e) => setHoursDriven(e.target.value)}
          />
        </Question>
        <Question>
          <Label>Monthly Electricity Usage (kWh):</Label>
          <Input
            type="number"
            value={electricityUsage}
            onChange={(e) => setElectricityUsage(e.target.value)}
          />
        </Question>
        <Question>
          <Label>Diet:</Label>
          <Select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="omnivorous">Omnivorous</option>
          </Select>
        </Question>
        <Question>
          <Label>Waste Management:</Label>
          <Select
            value={waste}
            onChange={(e) => setWaste(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="recycling">Recycling</option>
            <option value="composting">Composting</option>
            <option value="landfill">Landfill</option>
          </Select>
        </Question>
        <Button type="submit">Calculate</Button>
      </form>
      {result && (
        <Result>
          <p style={{ fontWeight: 'bold',fontSize: '2.5rem' }}>
            Your carbon footprint is {result.carbonFootprint} units.</p>
          <p>This is {result.comparison} the world average by {result.difference} units.</p>
          <p>Recommendations to reduce your carbon footprint:</p>
          <ul>
            <li>Use public transport more frequently.</li>
            <li>Consider switching to an electric vehicle.</li>
            <li>Reduce your driving hours where possible.</li>
            <li>Monitor and reduce your electricity usage.</li>
            <li>Adopt a more plant-based diet.</li>
            <li>Increase your recycling and composting efforts.</li>
          </ul>
          <p>We encourage you to retake this test in a couple of months to see if your carbon footprint has reduced!</p>
        </Result>
      )}
    </Container>
  );
};

export default Questionnaire;

