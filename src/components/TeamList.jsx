import React, { useState } from 'react';
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const TeamList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPosition, setFilterPosition] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterPosition(event.target.value);
  };

  const teams = Data.teams
    .filter(team => 
      team.teamname.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterPosition === '' || team.position === parseInt(filterPosition))
    );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Teams</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search teams"
          className="form-control"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="mb-3">
        <select className="form-control" value={filterPosition} onChange={handleFilter}>
          <option value="">All Positions</option>
          {Array.from(new Set(Data.teams.map(team => team.position))).map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>
      <div className="row">
        {teams.map((team) => (
          <div key={team.team_id} className="col-md-4 mb-4">
            <div className="card h-100 border-primary">
              <div className="card-body">
                <h5 className="card-title text-primary">{team.teamname}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <span className="badge badge-primary">Position: {team.position}</span>
                </h6>
                <p className="card-text text-muted">Home stadion: {team.stadion}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-block">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
