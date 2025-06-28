import { Helmet } from 'react-helmet';

const Home = () => (
  <section className="p-6 text-center max-w-3xl mx-auto">
    <Helmet>
      <title>MadeIT | Home</title>
      <meta
        name="description"
        content="MadeIT helps developers track skills, build portfolios, and grow their career in tech."
      />
    </Helmet>

    <h2 className="text-4xl font-bold mb-4 text-purple-700">Welcome to MadeIT</h2>
    <p className="text-lg text-gray-700 mb-6">
      Your all-in-one platform to manage your developer journey — from tracking skills to showcasing your portfolio.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mt-10 text-left">
      <div className="p-4 border rounded shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">📁 Build Your Portfolio</h3>
        <p className="text-sm text-gray-600">
          Showcase your projects, tech stack, and GitHub links — all in one personalized portfolio.
        </p>
      </div>

      <div className="p-4 border rounded shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">🧠 Track Your Skills</h3>
        <p className="text-sm text-gray-600">
          Categorize, search, and update your skills as you grow in your frontend or full-stack career.
        </p>
      </div>

      <div className="p-4 border rounded shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">👤 Developer Profile</h3>
        <p className="text-sm text-gray-600">
          Present your summary, experience, and education in a professional and elegant way.
        </p>
      </div>
    </div>

    <p className="mt-10 text-sm text-gray-500">
      Start your journey with <strong>MadeIT</strong> and build a portfolio that speaks for your skills.
    </p>
  </section>
);

export default Home;
