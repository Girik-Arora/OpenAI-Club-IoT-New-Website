import React from 'react';
import { ProjectsSection } from '../components/ProjectsSection';

interface ProjectsPageProps {
  onContactClick: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onContactClick }) => {
  return (
    <div className="py-8">
      <ProjectsSection onContactClick={onContactClick} />
    </div>
  );
};
