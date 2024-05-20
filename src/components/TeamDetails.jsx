import React from 'react';
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamDetails = ({ teamId }) => {
  const team = Data.teams.find((team) => team.team_id === teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary">{team.teamname}</h2>
          <h3 className="card-subtitle mb-2 text-muted">Matches</h3>
          {team.matches.map((match, index) => (
            <div key={index} className="card my-3 border-secondary">
              <div className="card-body">
                <p className="card-text">
                  <strong>Opponent:</strong> <span className="text-info">{match.opponent}</span> | 
                  <strong> Outcome:</strong> <span className={`text-${match.outcome === 'Win' ? 'success' : match.outcome === 'Loss' ? 'danger' : 'warning'}`}>{match.outcome}</span> | 
                  <strong> Score:</strong> <span className="text-dark">{match.score}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
