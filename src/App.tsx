import {useUsers} from 'api';
import React from 'react';
function App() {
  const {data} = useUsers();
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-sm font-medium text-gray-900">
          Surprise Mother Fucker
        </p>
      </header>
    </div>
  );
}

export default App;
