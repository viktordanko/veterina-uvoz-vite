import { AboutUs } from '@components/AboutUs';
import { Contact } from '@components/Contact';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Intro } from '@components/Intro';
import { Main } from '@components/Main';
import { Map } from '@components/Map';
import { OpeningHours } from '@components/OpeningHours';
import { WhyUs } from '@components/WhyUs';

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Intro spacing="xl" />
        <AboutUs />
        <OpeningHours />
        <WhyUs />
        <Contact />
        <Map />
      </Main>
      <Footer />
    </>
  );
}
