// write a test case for component named button which accepts onClick callback function and children as a props and returns button and the children in that button as a innerHTML and by click on that button should triggers the onClick function, recieved as a props

import { render, fireEvent } from '@testing-library/react';
import Button from './Button'; // Import your Button component

describe('Button component', () => {
  it('renders the correct children and responds to click events', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me!</Button>);

    // Check if the button is rendered with the correct innerHTML
    const button = getByRole('button');
    expect(button.innerHTML).toBe('Click me!');

    // Simulate a click event and check if the onClick function is called
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});

// write a test case for function that accepts two parameters and returns their sum

const sum = require('./sum'); // Import your sum function

describe('sum function', () => {
  it('correctly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 2)).toBe(1);
    expect(sum(0, 0)).toBe(0);
  });
});

// write a test case for function that fetches the data from api using fetch api and returns data

const fetch = require('node-fetch');
const { fetchData } = require('./fetchData'); // Import your fetchData function

jest.mock('node-fetch');

describe('fetchData function', () => {
  it('fetches data from an API and returns the data', async () => {
    const mockData = { key: 'value' }; // Replace with your mock data
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockData),
    });

    const data = await fetchData('https://api.example.com/data'); // Replace with your API URL
    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data'); // Replace with your API URL
  });
});
