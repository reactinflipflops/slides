// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  CodePane,
  Deck,
  Heading,
  // ListItem,
  // List,
  // Quote,
  Slide,
  Image,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  withReducer: require("../../assets/ReduxIntro/withReducer.jpg"),
  logo: require("../../assets/ReduxIntro/logo.png"),
  flow: require("../../assets/ReduxIntro/flow.png"),
  whenToUse: require("../../assets/ReduxIntro/whenToUse.png"),
  fileStructure: require("../../assets/ReduxIntro/fileStructure.png")
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
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Basic Principle</Heading>
          <Text size={12} margin="150px 0 0" textColor="tertiary" >(previousState, action) => newState</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Flow</Heading>
          <Image width="100%" src={images.flow} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Action</Heading>
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/ReduxIntro/action")}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Action Creator</Heading>
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/ReduxIntro/actionCreator")}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Reducer</Heading>
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/ReduxIntro/reducer")}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Store</Heading>
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/ReduxIntro/store")}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Connect with React Part I</Heading>
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/ReduxIntro/connectWithReactPartI")}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Connect with React Part II</Heading>
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/ReduxIntro/connectWithReactPartII")}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Let's get started … wait a minute</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="100%" src={images.whenToUse} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="75%" src={images.withReducer} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Basic File Structure</Heading>
          <Image width="50%" src={images.fileStructure} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Container Components</Heading>
          <Heading size={6} textColor="secondary">vs</Heading>
          <Heading size={6} textColor="secondary">Presentational Components</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Let's get started … for real 😃</Heading>
        </Slide>
      </Deck>
    );
  }
}
