import { useState, type SubmitEvent } from 'react';

import styles from './Navbar.module.css';

type NavbarProps = {
  changeCity: (city: string) => void;
};

const Navbar = ({ changeCity }: NavbarProps) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    changeCity(search);
  };

  return (
    <nav className={styles.container}>
      <h2>🌞 Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Search city"
          className={styles.input}
          value={search}
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
