import React from 'react';

import {useAuth} from '../contexts/AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const MainNavigator = () => {
  const {user} = useAuth();

  return (
    <React.Fragment>
      {user !== null ? <AppStack /> : <AuthStack />}
    </React.Fragment>
  );
};

export default MainNavigator;
