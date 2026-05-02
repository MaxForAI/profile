import ProjectPage from '../components/ProjectPage';
import { projectContents } from '../data/projectContent';

const ProjectOne = () => {
  return <ProjectPage content={projectContents.projectOne} />;
};

export default ProjectOne;
