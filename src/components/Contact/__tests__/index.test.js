import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();


afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm></ContactForm>);
  })

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm></ContactForm>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('h1 in contact matches Contact me', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>);

    expect(getByTestId('contact')).toHaveTextContent('Contact me');
  });

  it('button in contact matches Submit', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>);

    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
})

