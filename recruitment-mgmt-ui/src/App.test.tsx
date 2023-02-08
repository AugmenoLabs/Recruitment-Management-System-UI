import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from './redux/store';
import { test, expect, it } from '@jest/globals';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement);
});
