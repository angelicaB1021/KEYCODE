import React from 'react';

const Project = () => {
  return (
    <section className="py-10 bg-dark-700 text-pastel-100">
      <div className="container mx-auto">
        <h2 className="mb-4 text-4xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="p-4 rounded bg-dark-900">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p>Project description goes here...</p>
          </div>
          <div className="p-4 rounded bg-dark-900">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p>Project description goes here...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;