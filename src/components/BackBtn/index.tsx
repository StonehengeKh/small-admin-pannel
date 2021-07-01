import React from 'react';
import useRouter from '../../hooks/useRouter';

const BackBtn = () => {
  const { goBack } = useRouter();

  const onPressBack = () => {
    goBack();
  };
  return <button onClick={onPressBack}>Back</button>;
};

export default BackBtn;
