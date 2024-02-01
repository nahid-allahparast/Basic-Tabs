import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "HOME",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "CART",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "USER",
    content: "Create new payment for the user 💰",
  },
];
const App = () => {
  const [activTab, setActivTab] = useState(1);
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button onClick={() => setIsShow((isShow) => !isShow)}>
        {isShow ? "HIDE" : "SHOW"}
      </button>
      {isShow && (
        <div className="tab">
          <div className="tab-header">
            {tabData.map((tab) => (
              <button
                onClick={() => setActivTab(tab.id)}
                key={tab.id}
                className={activTab === tab.id ? "active" : ""}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="tab-content">{tabData[activTab - 1].content}</div>
        </div>
      )}
    </div>
  );
};

export default App;
