import { render, screen } from '@testing-library/react';
import App from './components/App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test ('render Home Page of App', () => {
   render(<App/>);
   const titleElement = screen.getElementByText('La Maison Jungle');
   expect(titleElement).toBeInTheDocument();
});
