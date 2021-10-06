import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm/>)
    })
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('matches text content', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
        expect(getByTestId('contact-submit')).toHaveTextContent('Submit');

    })
})

// describe('Match id text content', () => {
//     it('mathes text content', () => {
//         const { getByTestId } = render(<ContactForm />);
//         expect(getByTestId('contact')).toHaveTextContent('Contact me');
//     })
// })