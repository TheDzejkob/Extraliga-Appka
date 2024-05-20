import React from 'react';
import TeamList from '../components/TeamList';
import '../App.css';

const Tabulka = () => {

  return (
    <div className="Tabulka">
      <h4>Tabulka</h4>
      <TeamList />
      <div className="mt-4">
        <h4>Statistics</h4>
      </div>
    </div>
  );
};

export default Tabulka;
