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
  Footer,
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
      <Footer />
    </Theme>
  );
}

export default App;
