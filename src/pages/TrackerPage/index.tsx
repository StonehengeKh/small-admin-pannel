import React, { useEffect, useState } from 'react';

import BackBtn from '../../components/BackBtn';
import useUsers from '../ListPage/hooks/useUsers';
import useProjects from './hooks/useProjects';
import useRouter from '../../hooks/useRouter';

const TrackerPage = () => {
  const { goBack } = useRouter();
  const { users, getUsers } = useUsers();
  const { projects, postProject } = useProjects();

  useEffect(() => {
    if (users!) {
      getUsers();
    }
  }, []);

  const [projectNow, setProjectNow] = useState({
    id: null,
    userId: '',
    title: '',
    time: 0,
  });

  const [isShowNewProjectFields, setIsShowNewProjectFields] = useState(false);
  const updateIsShowNewProjectFields = () => {
    setIsShowNewProjectFields(
      (isShowNewProjectFields) => !isShowNewProjectFields,
    );
  };
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [timeProject, setTimeProject] = useState(0);

  useEffect(() => {
    if (!users) {
      getUsers();
    }
  }, []);

  const sendProject = () => {
    const projectData = {
      id: selectedProject,
      userId: selectedUser,
      title: projectNow.title,
      time: !!projectNow.time ? projectNow.time + timeProject : timeProject,
    };
    projectData.id &&
      projectData.userId &&
      projectData.title &&
      projectData.time &&
      postProject(projectData);
    goBack();
  };

  const onSelectProject = (event: any) => {
    setSelectedProject(event.target.value);
    const project =
      projects && projects.find((el: any) => el.id === event.target.value);
    // @ts-ignore
    project && setProjectNow(project);
  };

  const onSelectUser = (event: any) => {
    setSelectedUser(event.target.value);
  };

  const addProjectTime = (event: any) => {
    setTimeProject(event.target.value);
  };

  return (
    <>
      <BackBtn />
      <h3>Tracker Page</h3>
      <span
        onClick={updateIsShowNewProjectFields}
        style={{ cursor: 'pointer' }}
      >
        Add time to the project
      </span>
      {isShowNewProjectFields && (
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={sendProject}
        >
          <select onChange={onSelectProject}>
            <option value={''}>---</option>
            {projects &&
              projects.map(({ id, title }) => (
                <option key={id} value={id}>
                  {title}
                </option>
              ))}
          </select>
          <select onChange={onSelectUser}>
            <option value={''}>---</option>
            {users &&
              users.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
          </select>
          <input
            type={'number'}
            placeholder={'Add time'}
            onChange={addProjectTime}
          />
          <button onClick={sendProject}>Add</button>
        </form>
      )}
    </>
  );
};

export default TrackerPage;
