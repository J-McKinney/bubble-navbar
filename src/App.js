import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="navigation">
          <ul>
            <li className="list active">
              <a href="/">
                <span className="icon">
                  <ion-icon name="home"></ion-icon>
                </span>
                <span className="text">Home</span>
              </a>
            </li>
            <li className="list">
              <a href="/">
                <span className="icon">
                  <ion-icon name="person"></ion-icon>
                </span>
                <span className="text">Profile</span>
              </a>
            </li>
            <li className="list">
              <a href="/">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <span className="text">Messages</span>
              </a>
            </li>
            <li className="list">
              <a href="/">
                <span className="icon">
                  <ion-icon name="camera"></ion-icon>
                </span>
                <span className="text">Photos</span>
              </a>
            </li>
            <li className="list">
              <a href="/">
                <span className="icon">
                  <ion-icon name="settings"></ion-icon>
                </span>
                <span className="text">Settings</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
