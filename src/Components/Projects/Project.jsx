import React from 'react';
import './Project.css';

const projects = [
    {
        title: 'Movie Finder',
        description: 'A React-based web app for searching movies, viewing details, and marking favorites with smooth navigation and customer support.',
        link: 'https://movie-finder-sable-alpha.vercel.app/'
    },
    {
        title: 'Car Rental System',
        description: 'A web-based platform allowing users to browse cars and book rentals with real-time price calculations and an interactive UI.',
        link: 'https://manikantadev34.github.io/Car-Rental/'
    },
    {
        title: 'To-Do List App',
        description: 'A React app for managing daily tasks with add and delete features.',
        link: 'https://sensational-scone.netlify.app/'
    },
    {
        title: 'Weather App',
        description: 'A Weather App using HTML, CSS, and JavaScript that fetches real-time weather data dynamically.',
        link: 'https://manikantadev34.github.io/WeatherApp/'
    },
    {
        title: 'Light Bulb',
        description: 'A light bulb toggle using HTML, CSS, and JavaScript that switches between ON and OFF the bulb states when clicked.',
        link: 'https://manikantadev34.github.io/Light-Bulb/'
    },
    {
        title: 'Music Player',
        description: 'A music player using HTML, CSS, and JavaScript that lets users play, pause, and navigate through tracks. It features a responsive design with a stylish UI. Users can control volume, track progress.',
        link: 'https://manikantadev34.github.io/music-player/'
    }
];

export default function Projects() {
  return (
    <div className='projects'>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <div className="card-inner">
              <div className="card-front">
                <h3>{project.title}</h3>
              </div>
              <div className="card-back">
                <p>{project.description}</p>
                <a href={project.link} className='project-link' target='_blank' rel='noopener noreferrer'>
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
