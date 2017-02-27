// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  // BlockQuote,
  // Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  // Quote,
  Slide,
  // Image
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import Components
import HandleClick from "../../assets/InteractionAndStateManagement/HandleClick";
import DefaultValue from "../../assets/InteractionAndStateManagement/DefaultValue";
import ChangeWithoutUpdate from "../../assets/InteractionAndStateManagement/ChangeWithoutUpdate";
import ChangeWithForceUpdate from "../../assets/InteractionAndStateManagement/ChangeWithForceUpdate";
import ChangeSetStateInput from "../../assets/InteractionAndStateManagement/ChangeSetStateInput";
import ChangeSetState from "../../assets/InteractionAndStateManagement/ChangeSetState";
import ChangeParentState from "../../assets/InteractionAndStateManagement/ChangeParentState";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  // vdom: require("../../assets/ReactBasics/vdom.svg")
};

const code = {
  // HandleClick: require("!!raw-loader!../../assets/LifecycleEvents/HandleClick.js"),
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
          <Heading size={2} textColor="secondary">
            Lifecycle Events
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Use-cases
          </Heading>
          <List>
            <Appear>
              <ListItem>Listen to an event source only when the component is in the DOM</ListItem>
            </Appear>
            <Appear>
              <ListItem>Add a D3 chart and remove it once the component is removed</ListItem>
            </Appear>
            <Appear>
              <ListItem>Performance optimization, but by preventing React to re-evaluate the subtree</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={`componentWillMount(): void`}
            textSize={24}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={`componentDidMount(): void`}
            textSize={24}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={`componentWillReceiveProps(nextProps: Object): void`}
            textSize={26}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={`shouldComponentUpdate(
nextProps: Object, nextState: Object
): boolean`}
            textSize={24}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={`shouldComponentUpdate: (nextProps, nextState) => {
return nextProps.id !== this.props.id;
}`}
            textSize={24}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={`componentWillUpdate(
nextProps: Object, nextState: Object
): void`}
            textSize={24}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={`componentDidUpdate(
prevProps: Object, prevState: Object
): void`}
            textSize={24}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={`componentWillUnmount(): void`}
            textSize={24}
          />
        </Slide>
      </Deck>
    );
  }
}
