import img from '../../styles/load.png';
import '../../styles/load.css';

function Loading() {
  return (
    <div className="loading-container">
      <img src={img} alt="loading" className="loading" />
      <p>Loading cruises...</p>
    </div>
  );
}

export default Loading;
