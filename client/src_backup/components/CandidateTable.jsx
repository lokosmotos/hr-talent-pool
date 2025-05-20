import { useEffect, useState } from 'react';

export default function CandidateTable() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch('/api/candidates')
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <table className="min-w-full bg-white">
      {/* ... existing table code ... */}
    </table>
  );
}