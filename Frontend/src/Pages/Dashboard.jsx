// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Parent div with max-width */}
      <div className="max-w-[70vw] mx-auto p-6 text-center">
        {/* Intro Section */}
        <h2 className="text-2xl font-bold mb-4 text-indigo-500">Welcome to Your Productivity Hub</h2>
        <p className="text-gray-700 mb-8 text-lg">
          Manage your daily tasks with ease. Stay organized, stay focused, and achieve your goals effortlessly.
        </p>

        {/* Summary of the App */}
        <div className="mb-8 max-w-lg mx-auto text-gray-700">
          <p className="mb-4 text-lg ">
            Our ToDo app is designed to help you streamline your day-to-day activities. Whether it's managing your personal errands or professional projects, this app makes it simple to organize tasks, set priorities, and stay on track.
          </p>
          <p className='text-lg  '>
            With an intuitive interface, you can quickly add, edit, and complete tasks. Stay on top of your to-do list and never miss a deadline again!
          </p>
        </div>

        {/* Motivational Quote */}
        <div className="p-6 bg-indigo-500 text-white rounded-lg shadow-md max-w-md mx-auto">
          <p className="italic text-lg ">"The secret of getting ahead is getting started." — Mark Twain</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
