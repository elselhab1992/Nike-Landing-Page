import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import {
  Header,
  Hero,
  Popular,
  SuperQuality,
  Services,
  SpecialOffer,
  Customer,
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
      <Customer />
    </Theme>
  );
}

export default App;
