import useDispatchActions from '../../../hooks/useDispatchActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const useProjects = () => {
  const projects = useTypedSelector((state) => state.projects);

  const postProject = (project: any) => useDispatchActions(project);

  return {
    projects,
    postProject,
  };
};
export default useProjects;
