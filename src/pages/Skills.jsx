import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const initialSkills = {
  Languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  'Frameworks/Libraries': [
    'Vue.js',
    'React.js',
    'Vue Router',
    'React Router',
    'Axios',
    'Tailwind CSS',
    'Bootstrap',
  ],
  'State Management': ['Vuex', 'Pinia', 'Context API', 'useReducer'],
  'Tools & Platforms': [
    'Git',
    'GitHub',
    'VS Code',
    'Postman',
    'Figma',
    'Webpack',
    'Vite',
  ],
};

const Skills = () => {
  const [skills, setSkills] = useState(initialSkills);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Languages');
  const [input, setInput] = useState('');
  const debouncedSearch = useDebounce(search);

  const addSkill = () => {
    if (input.trim()) {
      const updated = {
        ...skills,
        [category]: [...(skills[category] || []), input.trim()],
      };
      setSkills(updated);
      setInput('');
    }
  };

  const filteredSkills = Object.entries(skills).reduce((acc, [key, values]) => {
    const filtered = values.filter(skill =>
      skill.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[key] = filtered;
    }
    return acc;
  }, {});

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>

      <div className="grid gap-2 mb-4 md:grid-cols-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded"
          placeholder="Add a skill"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {Object.keys(skills).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          onClick={addSkill}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-6"
        placeholder="Search skills"
      />

      {Object.entries(filteredSkills).map(([cat, skillsList]) => (
        <div key={cat} className="mb-4">
          <h3 className="font-semibold text-lg mb-2">{cat}</h3>
          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
