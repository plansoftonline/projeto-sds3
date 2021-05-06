import NavBar  from "components/navbar";
import Footer  from "components/footer";
import DataTable from "components/DataTable"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
          <h1 className="text-primary">Olá Mundo !</h1>
      </div>
      <DataTable />
      <Footer />

  </>
);
}

export default App;
