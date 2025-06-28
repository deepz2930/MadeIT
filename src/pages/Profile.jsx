const Profile = () => {
  return (
    <section className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Profile</h2>

      <div>
        <h3 className="text-xl font-semibold">Summary</h3>
        <p>
          Frontend Developer with 2.5+ years of experience building responsive, scalable web applications using Vue.js and currently expanding expertise into React.js through self-driven learning and hands-on projects.
          Skilled in modern JavaScript, component architecture, state management, and API integration. Passionate about clean, maintainable code and building user-friendly interfaces.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Education</h3>
        <p>
          <strong>B.Tech – Information Technology</strong><br />
          Kamaraj College of Engineering and Technology (Aug 2019 – Mar 2023)
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Professional Experience</h3>
        <p>
          <strong>Xmplar Management Solutions (Jan 2023 – Present)</strong><br />
          - Developed SPAs using Vue.js, managing routing, component structure, and state<br />
          - Collaborated with backend teams to integrate RESTful APIs<br />
          - Designed reusable UI components and improved UI performance<br />
          - Contributed to UI redesigns to enhance engagement and reduce load times<br />
          - Began self-learning React.js and building React apps
        </p>
      </div>
    </section>
  );
};

export default Profile;
