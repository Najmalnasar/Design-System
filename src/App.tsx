import "./App.css";
import Button from "./components/atom/button/Button";

function App() {
  return (
    <>
      <Button
        type="button"
        className="bg-blue-400 py-5 px-6 font-bold
        rounded-lg hover:bg-blue-800 transition-all duration-100"
        disabled
        autoFocus
        text=""
      />
      Subscribe Design System page
    </>
  );
}

export default App;
