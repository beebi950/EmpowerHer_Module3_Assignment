import MessageCard from "./MessageCard";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MessageCard
        title="Welcome"
        message="This is the first reusable card"
      />

      <MessageCard
        title="React Props"
        message="Props allow data to be passed to components"
      />

      <MessageCard
        title="Reusable Component"
        message="Same component, different content"
      />

      <MessageCard
        title="Success"
        message="You have successfully completed Q3"
      />
    </div>
  );
}

export default App;
