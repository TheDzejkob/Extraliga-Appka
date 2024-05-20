import '../App.css';
import TeamDetails from '../components/TeamDetails';

function Zapasy() {
  const teamIdToShow = 1;
  return (
    <div className="Zapasy">
      <h2 className="text-center mb-4">Matches</h2>
      <TeamDetails teamId={1} />
      <TeamDetails teamId={2} />
      <TeamDetails teamId={3} />
      <TeamDetails teamId={4} />
      <TeamDetails teamId={5} />
      <TeamDetails teamId={6} />
      <TeamDetails teamId={7} />
    </div>
  );
}

export default Zapasy;
