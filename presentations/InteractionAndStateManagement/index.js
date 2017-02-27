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
import Value from "../../assets/InteractionAndStateManagement/Value";
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
  vdom: require("../../assets/ReactBasics/vdom.svg")
};

const code = {
  HandleClick: require("!!raw-loader!../../assets/InteractionAndStateManagement/HandleClick.js"),
  Value: require("!!raw-loader!../../assets/InteractionAndStateManagement/Value.js"),
  DefaultValue: require("!!raw-loader!../../assets/InteractionAndStateManagement/DefaultValue.js"),
  ChangeWithoutUpdate: require("!!raw-loader!../../assets/InteractionAndStateManagement/ChangeWithoutUpdate.js"),
  ChangeWithForceUpdate: require("!!raw-loader!../../assets/InteractionAndStateManagement/ChangeWithForceUpdate.js"),
  ChangeSetStateInput: require("!!raw-loader!../../assets/InteractionAndStateManagement/ChangeSetStateInput.js"),
  ChangeSetState: require("!!raw-loader!../../assets/InteractionAndStateManagement/ChangeSetState.js"),
  ChangeParentState: require("!!raw-loader!../../assets/InteractionAndStateManagement/ChangeParentState.js"),
  Class: require("!!raw-loader!../../assets/InteractionAndStateManagement/Class.js")
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
          <Heading size={2} textColor="secondary">Interactions and State Management</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Interactions
          </Heading>
          <List>
            <Appear><ListItem textSize={38}>Clicking a button</ListItem></Appear>
            <Appear><ListItem textSize={38}>Updating an address field</ListItem></Appear>
            <Appear><ListItem textSize={38}>Submit a form</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Other Events changing State
          </Heading>
          <List>
            <Appear><ListItem textSize={38}>New data received from a request response</ListItem></Appear>
            <Appear><ListItem textSize={38}>New data received from a websocket message</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <HandleClick/>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.HandleClick}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 6] },
            { loc: [7, 14] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="html"
            source={`<!-- JSX -->
<button onClick={handleClick}>Click me</button>
<!-- HTML -->
<button onclick="handleClick()">Click me</button>`}
            textSize={22}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Synthetic Events
          </Heading>
          <Heading size={3} textColor="secondary">
            Fixing cross-browser issues 🙉🎉👌
          </Heading>
        </Slide>

        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.ChangeWithoutUpdate}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 7] },
            { loc: [8, 18] },
            { loc: [11, 14] },
            { loc: [14, 15] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <ChangeWithoutUpdate/>
        </Slide>

        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.Class}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 9] },
            { loc: [10, 19] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            React.Component
          </Heading>
          <List>
            <Appear><ListItem textSize={38}>`this` is available</ListItem></Appear>
            <Appear><ListItem textSize={38}>all sorts of lifecycle functions</ListItem></Appear>
            <Appear><ListItem textSize={38}>setState</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.ChangeWithForceUpdate}
          ranges={[
            { loc: [2, 8] },
            { loc: [9, 13] },
            { loc: [14, 24] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <ChangeWithForceUpdate/>
        </Slide>

        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.ChangeSetState}
          ranges={[
            { loc: [2, 10] },
            { loc: [11, 16] },
            { loc: [17, 27] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <ChangeSetState/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Forms & Inputs
          </Heading>
        </Slide>

        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.Value}
          ranges={[
            { loc: [6, 12] },
            { loc: [9, 10] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Value />
        </Slide>

        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.DefaultValue}
          ranges={[
            { loc: [9, 10] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <DefaultValue/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textSize={56} textColor="secondary">
            Uncontrolled Component<br />vs<br />Controlled Component
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <ChangeSetStateInput/>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.ChangeSetStateInput}
          ranges={[
            { loc: [2, 10] },
            { loc: [11, 16] },
            { loc: [19, 27] },
            { loc: [22, 24] }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Properties
          </Heading>
          <List>
            <Appear><ListItem textSize={38}>value</ListItem></Appear>
            <Appear><ListItem textSize={38}>defaultValue</ListItem></Appear>
            <Appear><ListItem textSize={38}>onChange</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            defaultValue
          </Heading>
          <Heading size={2} textColor="secondary">
            is not the same as
          </Heading>
          <Heading size={2} textColor="secondary">
            placeholder
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <ChangeParentState/>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.ChangeParentState}
          ranges={[
            { loc: [10, 18] },
            { loc: [19, 24] },
            { loc: [25, 40] },
            { loc: [28, 29] },
            { loc: [2, 9] },
            { loc: [19, 24] },
            { loc: [28, 29] }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            ProTip
          </Heading>
          <Text size={22} textColor="secondary">
            Visit this site in case you forget. I always do …
          </Text>
          <Text size={22} textColor="secondary" margin="20px 0 0 0">
            https://facebook.github.io/react/docs/forms.html
          </Text>
        </Slide>
      </Deck>
    );
  }
}
