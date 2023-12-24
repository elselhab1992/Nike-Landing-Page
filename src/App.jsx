import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Header, Hero } from "./components";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Hero />
    </Theme>
  );
}

export default App;
