import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Login from './Login';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h1>Calendar Assistant</h1>
      <Link to={routes.COUNTER}>to Counter</Link>
      <div>
        <Login />
      </div>
    </div>
  );
}
