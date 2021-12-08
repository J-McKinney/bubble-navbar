import "./App.css";

function App() {
  // let list = document.querySelectorAll(".list");
  // for (let i = 0; i < list.length; i++) {
  //   list[i].onmouseover = function () {
  //     let j = 0;
  //     while (j < list.length) {
  //       list[j++].className = "list";
  //     }
  //     list[i].className = "list active";
  //   };
  // }

  // list.forEach((elements) => {
  //   elements.addEventListener("mouseenter", function (event) {
  //     let bg = document.querySelector("body");
  //     let color = event.target.getAttribute("data-color");
  //     bg.style.backgroundColor = color;
  //   });
  // });

  // const list = document.querySelectorAll(".list");
  // function activeLink() {
  //   list.forEach((item) => item.classList.remove("active"));
  //   this.classList.add("active");
  // }

  // list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <>
      <div className="App">
        <div className="navigation">
          <ul>
            <li className="list">
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
