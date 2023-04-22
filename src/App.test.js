import { render, screen } from '@testing-library/react';
import SocialNetworkApp from "./App";

test('renders learn react link', () => {
  render(<SocialNetworkApp />);
  const linkElement = screen.getByRole('main');
  expect(linkElement).toBeInTheDocument();
});
