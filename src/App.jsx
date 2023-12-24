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
  Subscribe,
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
      <Subscribe />
    </Theme>
  );
}

export default App;
