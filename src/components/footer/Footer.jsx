import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Made with <span className="heart">❤️</span> by Jani using{' '}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            Tailwind CSS
          </a>
          {' '} | {' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="footer-link">
            React
          </a>
          {' '} | {' '}
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="footer-link">
            Vite
          </a>
          {' '} • Copyright © 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;