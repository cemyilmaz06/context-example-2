import KullaniciProvider from "./context/KullanıcıProvider";
import GosterUsers from "./pages/GosterUsers";

function App() {
  return (
    <KullaniciProvider>
      <GosterUsers/>
    </KullaniciProvider>
  );
}

export default App;
