import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Imports the extended-expect library from the jest-dom package
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First test
    it('renders', () => { // Apparently you can use "test" and "it" interchangably 
        render(<About />);
    });

    // Second test
    it(`matches snapshot DOM node structure`, () => {
        const { asFragment } = render(<About />); // asFragment returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot();
    })
})