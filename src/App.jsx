import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import {
  Header,
  Hero,
  Popular,
  SuperQuality,
  Services,
  SpecialOffer,
} from "./components";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Hero />
      <Popular />
      <SuperQuality />
      <Services />
      <SpecialOffer />
    </Theme>
  );
}

export default App;
