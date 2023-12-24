import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Header, Hero, Popular, SuperQuality, Services } from "./components";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Hero />
      <Popular />
      <SuperQuality />
      <Services />
    </Theme>
  );
}

export default App;
