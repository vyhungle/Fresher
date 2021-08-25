import React from 'react';

import AppNavigation from './src/navigation/main';
import {
  requestUserPermission,
  notificationListener,
} from './src/utils/notificationServices';

function App() {
  React.useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return <AppNavigation />;
}

export default App;
