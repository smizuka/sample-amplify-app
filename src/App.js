import './App.css';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>sample react app</h1>
        <h2>
          {/* <a className='App-link' href='.' onClick={signOut}>
            Sign Out
          </a> */}
          <button onClick={signOut}>Sign out</button>
        </h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);