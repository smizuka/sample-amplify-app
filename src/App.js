import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>sample react app</h1>
        <h2>
          <a className='App-link' href='.' onClick={Auth.signOut}>Sign Out</a>
        </h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
