// About.js
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Parent div with max-width */}
      <div className="max-w-[70vw] mx-auto p-6">
        
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold text-indigo-500 mb-4">About Our ToDo App</h1>
          <p className="text-gray-700 text-lg">
            Our ToDo app is designed to help you simplify your life. Whether you’re managing a project, organizing your personal tasks, or tracking professional goals, our app is the perfect tool to keep you on track.
          </p>
        </section>
        
        {/* Purpose Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4 text-center">Why We Built This App</h2>
          <p className="text-gray-700 text-lg text-center">
            We know how overwhelming life can get when you have too many tasks and not enough time. Our mission is to give you a simple, intuitive platform to manage your daily to-do list, ensuring you never miss a deadline and can stay productive.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-indigo-100 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-indigo-500 mb-2">Task Management</h3>
              <p className="text-gray-600 text-lg">Add, edit, and delete tasks effortlessly to stay on top of your workload.</p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-indigo-500 mb-2">Priority Setting</h3>
              <p className="text-gray-600 text-lg">Mark tasks as high priority to focus on what's most important first.</p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-indigo-500 mb-2">Cross-Platform</h3>
              <p className="text-gray-600 text-lg">Access your tasks from any device, whether you're on your phone, tablet, or computer.</p>
            </div>
          </div>
        </section>

        {/* Motivational Section */}
        <section className="text-center p-6 bg-indigo-500 text-white rounded-lg shadow-md max-w-md mx-auto">
          <p className="italic text-lg">"Your future is created by what you do today, not tomorrow." — Robert Kiyosaki</p>
        </section>
        
      </div>
    </div>
  );
};

export default About;
