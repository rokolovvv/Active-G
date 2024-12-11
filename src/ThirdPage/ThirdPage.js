import React from "react";
import "./ThirdPage.css";

const projects = [
    { id: 1, title: "ACTIVE G Academy" },
    { id: 2, title: "ЯПокоління" },
    { id: 3, title: 'Онлайн-Табір із Соціальної Реклами "Думка"' },
    { id: 4, title: 'Програма тренінгів "Introduction to Success"' },
    { id: 5, title: "Літній BootCamp Лідерства 2024 в Миколаєві" },
    { id: 6, title: 'Перший студентський форум "Горизонт Лідерства"' },
    { id: 7, title: "Initiative StartUp BootCamp Лідерства 2024 в Миколаєві" },
  ];

  const Projects = () => {
    return (
      <section className="projects-section">
        <h1 className="section-title">Наші Проекти</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <a href="https://platforma.volunteer.country/organizations/active-generation" className="project-button">Читати більше</a>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Projects;
