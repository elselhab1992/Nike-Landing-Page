import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Header, Hero, Popular } from "./components";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Hero />
      <Popular />
    </Theme>
  );
}

export default App;
