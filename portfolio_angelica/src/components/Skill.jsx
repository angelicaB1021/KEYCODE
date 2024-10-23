import React from 'react';

const Skill = () => {
  return (
    <section className="py-10 bg-dark-700 text-pastel-100">
      <div className="container mx-auto">
        <h2 className="mb-4 text-4xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="p-4 rounded bg-dark-900">HTML</div>
          <div className="p-4 rounded bg-dark-900">CSS</div>
          <div className="p-4 rounded bg-dark-900">JavaScript</div>
          <div className="p-4 rounded bg-dark-900">React</div>
        </div>
      </div>
    </section>
  );
};

export default Skill;