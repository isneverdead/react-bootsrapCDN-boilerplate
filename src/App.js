import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <div class='jumbotron'>
        <h1 class='display-4'>Hello, world!</h1>
        <p class='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        {/* <hr class="my-4"> */}
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class='lead'>
          <a class='btn btn-primary btn-lg' href='#' role='button'>
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
