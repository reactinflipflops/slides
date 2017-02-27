// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  // CodePane,
  Deck,
  // Heading,
  // ListItem,
  // List,
  // Quote,
  Slide,
  Image
  // Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../../assets/ReduxIntro/logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image width="100%" src={images.logo} />
        </Slide>
      </Deck>
    );
  }
}
