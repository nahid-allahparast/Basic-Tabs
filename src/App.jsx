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
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];
const App = () => {
  const [activTab, setactivTab] = useState(1);
  //   const activTab = 2;
  return (
    <div className="tab">
      <div className="tab-header">
        {tabData.map((tab) => (
          <button
            onClick={() => setactivTab(tab.id)}
            key={tab.id}
            className={activTab === tab.id ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabData[activTab - 1].content}</div>
    </div>
  );
};



export default App;
