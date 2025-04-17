import "./App.css";
import Typography from "./components/atom/typograhy/Typography";

function App() {
  return (
    <>
      <Typography
        tag="h1"
        text="welcome to Design Sysytem...."
        style={{ color: "red" }}
      />
      <Typography tag="h1" text="software" className="h2head">
        <span style={{ color: "blue" }}>&nbsp; Engineer</span>
      </Typography>
      <Typography tag="h1" role="React" style={{ color: "skyblue" }} />
      <Typography
        tag="strong"
        text="Front end Developer"
        style={{ fontSize: "90px", color: "green" }}
      />
    </>
  );
}

export default App;
