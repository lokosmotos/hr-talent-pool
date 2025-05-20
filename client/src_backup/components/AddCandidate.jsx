export default function AddCandidate({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    branch: 'JB',
    status: 'Applied'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/candidates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        onAdd(data); // Update parent state
        setForm({ name: '', branch: 'JB', status: 'Applied' }); // Reset form
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-50 rounded">
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})}
        placeholder="Full Name"
        className="mr-2 p-2 border"
        required
      />
      {/* Add more fields here */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Candidate
      </button>
    </form>
  );
}