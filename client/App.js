import React from 'react';
import {useDispatch} from 'react-redux';

import AppNavigation from './src/navigation/main';
import {
  requestUserPermission,
  notificationListener,
} from './src/utils/notificationServices';

function App() {
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    requestUserPermission();
    notificationListener(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppNavigation />;
}

export default App;
