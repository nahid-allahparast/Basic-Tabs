import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];
const App = () => {
  const activTab = 1;
  return (
    <div className="tab">
      <div className="tab-header">
        {tabData.map((tab) => (
          <button className={activTab === tab.id ? "active" : ""}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabData[activTab - 1].content}</div>
    </div>
  );
};

export default App;
