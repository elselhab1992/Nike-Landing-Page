import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Header, Hero, Popular, SuperQuality } from "./components";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Hero />
      <Popular />
      <SuperQuality />
    </Theme>
  );
}

export default App;
