import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialProjects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Developed a modern, responsive portfolio using PrimeVue to showcase projects and skills.',
    github: 'https://github.com/deepz2930/MadeBy_Deepika',
  },
  {
    id: 2,
    title: 'Pinia Project',
    description: 'Implemented state management in a Vue.js application using Pinia to streamline data flow.',
    github: 'https://github.com/deepz2930/pinia',
  },
  {
    id: 3,
    title: 'E-Commerce Website',
    description: 'Built a simple e-commerce site with shopping cart functionality, product listings, and user interactions.',
    github: 'https://github.com/deepz2930/Ecommerce',
  },
  {
    id: 4,
    title: 'Personal Website',
    description: 'Created a personal portfolio using basic HTML and CSS as a front-end learning project.',
    github: 'https://github.com/deepz2930/personalwebsite',
  },
];

const Projects = () => {
  const [projects, setProjects] = useLocalStorage('projects', initialProjects);
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const debouncedSearch = useDebounce(search);

  const addProject = () => {
    if (title.trim()) {
      const newProject = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        github: github.trim(),
      };
      setProjects([...projects, newProject]);
      setTitle('');
      setDescription('');
      setGithub('');
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>

      <div className="grid gap-2 mb-4 md:grid-cols-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          placeholder="Project Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          placeholder="Description"
        />
        <input
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="border p-2 rounded"
          placeholder="GitHub Link"
        />
      </div>

      <button
        onClick={addProject}
        className="bg-purple-600 text-white px-4 py-2 rounded mb-4"
      >
        Add Project
      </button>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        placeholder="Search projects"
      />

      <ul className="space-y-4">
        {filteredProjects.map((project) => (
          <li
            key={project.id}
            className="border p-4 rounded shadow-sm bg-white dark:bg-gray-900"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              {project.description}
            </p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View on GitHub
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
