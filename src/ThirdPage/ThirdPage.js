import React from "react";
import "./ThirdPage.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("translation", { keyPrefix: "projects" });

  const projects = [
    { id: 1, title: t("project1Title"), link: t("project1Link") },
    { id: 2, title: t("project2Title"), link: t("project2Link") },
    { id: 3, title: t("project3Title"), link: t("project3Link") },
    { id: 4, title: t("project4Title"), link: t("project4Link") },
    { id: 5, title: t("project5Title"), link: t("project5Link") },
    { id: 6, title: t("project6Title"), link: t("project6Link") },
    { id: 7, title: t("project7Title"), link: t("project7Link") },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="section-title">{t("projectsTitle")}</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <a href={project.link} className="project-button">
              {t("readMore")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
