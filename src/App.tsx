import "./App.css";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import Template4 from "./components/Template4";

function App() {
  return (
    <main className="container">
      <div>
        <h1>Social Media Templates</h1>
      </div>
      <Template3
        title="Lorem Impsum Dolor Text That is Dope And Cool."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        img1="/images/template3-img.png"
        cta="Get Started"
      />

      <div className="separator"></div>
      <Template4
        logo="/images/figma.svg"
        title="Lore Ipsum Dolor Jarvis Dolores jksld jlsdjfl"
        img1="/images/template4-img1.png"
        img2="/images/template4-img2.png"
        cta="SALE"
        primaryColor="#FFB800"
        secondaryColor="#00FFC2"
      />

      <div className="separator"></div>
      <Template1
        title="Lorem Impsum Dolor Text That is Dope And Cool."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud e"
        img1="/images/template1-bg.png"
        cta="THE CTA COMES HERE"
      />

      <div className="separator"></div>

      <Template2
        title="Lorem Impsum Dolor Text That is Dope And Cool."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud e"
        img1="/images/template2-bg.png"
      />

      <div className="separator"></div>
    </main>
  );
}

export default App;
