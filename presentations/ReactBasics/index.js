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
  Image
  // Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import Components
import HelloWorldI from "../../assets/ReactBasics/HelloWorldI";
import HelloWorldII from "../../assets/ReactBasics/HelloWorldII";
import HelloWorldIII from "../../assets/ReactBasics/HelloWorldIII";
import FriendIfElse from "../../assets/ReactBasics/FriendIfElse";
import FriendIfElseTernary from "../../assets/ReactBasics/FriendIfElseTernary";
import FriendAndAnd from "../../assets/ReactBasics/FriendAndAnd";
import Friends from "../../assets/ReactBasics/Friends";
import FriendsKey from "../../assets/ReactBasics/FriendsKey";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  vdom: require("../../assets/ReactBasics/vdom.svg"),
  vdomChange: require("../../assets/ReactBasics/vdomChange.svg"),
  hello: require("../../assets/ReactBasics/hello.png"),
  helloII: require("../../assets/ReactBasics/helloII.png")
};

const code = {
  hello: require("!!raw-loader!../../assets/ReactBasics/hello.html"),
  helloII: require("!!raw-loader!../../assets/ReactBasics/helloII.html"),
  HelloWorldI: require("!!raw-loader!../../assets/ReactBasics/HelloWorldI.js"),
  HelloWorldIUsage: require("!!raw-loader!../../assets/ReactBasics/HelloWorldIUsage.js"),
  HelloWorldII: require("!!raw-loader!../../assets/ReactBasics/HelloWorldII.js"),
  HelloWorldIII: require("!!raw-loader!../../assets/ReactBasics/HelloWorldIII.js"),
  HelloWorldIIIUsage: require("!!raw-loader!../../assets/ReactBasics/HelloWorldIIIUsage.js"),
  FriendIfElse: require("!!raw-loader!../../assets/ReactBasics/FriendIfElse.js"),
  FriendIfElseTernary: require("!!raw-loader!../../assets/ReactBasics/FriendIfElseTernary.js"),
  FriendAndAnd: require("!!raw-loader!../../assets/ReactBasics/FriendAndAnd.js"),
  Friends: require("!!raw-loader!../../assets/ReactBasics/Friends.js"),
  FriendsKey: require("!!raw-loader!../../assets/ReactBasics/FriendsKey.js")
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
          <Heading size={2} textColor="secondary">React Basics</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            What it is …
          </Heading>
          <List>
            <ListItem textSize={38}>Focus on the UI</ListItem>
            <ListItem textSize={38}>One-way reactive data flow (no two-way data binding)</ListItem>
            <ListItem textSize={38}>Virtual DOM</ListItem>
            <ListItem textSize={38}>Large ecosystem around it</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            What it isn't …
          </Heading>
          <List>
            <ListItem textSize={38}>Not an opinionated full front-end framework</ListItem>
            <ListItem textSize={38}>No routing</ListItem>
            <ListItem textSize={38}>No data fetching</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="html"
          code={code.hello}
          ranges={[
            { loc: [0, 2], title: "Basic React Example" },
            { loc: [2, 7] },
            { loc: [7, 9] },
            { loc: [9, 15] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Image width={"100%"} src={images.hello} />
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="html"
          code={code.helloII}
          ranges={[
            { loc: [9, 18] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Image width={"100%"} src={images.helloII} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            JSX
          </Heading>
          <List>
            <Appear>
              <ListItem textSize={38}>JSX is a preprocessor step that adds XML syntax to JavaScript</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={38}>Use curly braces are to provide data</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={38}>HTML attributes are camelCased</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={38}>className is used instead of class</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={38}>React's JSX uses the upper vs. lower case convention to distinguish between components and HTML tags</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`// Input (JSX):
const app = <h2>Conclusion</h2>;
// Output (JS):
const app = React.createElement("h2", null, "Conclusion");
`}
            textSize={20}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`// Input (JSX):
const app = <h2 id="headline5">Conclusion</h2>;
// Output (JS):
const app = React.createElement("h2", { id: "headline5" }, "Conclusion");
`}
            textSize={20}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`// Input (JSX):
const app = <Card color="white" active={true} />;
// Output (JS):
const app = React.createElement(Card, { color: "white", active: true });
`}
            textSize={20}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Components</Heading>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.HelloWorldI}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 5] },
            { loc: [6, 7] }
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.HelloWorldIUsage}
          ranges={[
            { loc: [0, 2] },
            { loc: [3, 6] },
            { loc: [7, 8] },
            { loc: [9, 10] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <HelloWorldI />
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.HelloWorldII}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 13] },
            { loc: [14, 15] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <HelloWorldII />
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.HelloWorldIII}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 9] },
            { loc: [10, 11] }
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.HelloWorldIIIUsage}
          ranges={[
            { loc: [0, 3] },
            { loc: [4, 5] },
            { loc: [6, 7] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`<Wrapper name="Maciej" />`}
            textSize={24}
          />
          <HelloWorldIII name="Maciej" />
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.FriendIfElse}
          ranges={[
            { loc: [0, 3] },
            { loc: [10, 17] },
            { loc: [3, 9] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`<Friend name="Maciej" lastActiveInSec="40" />
<Friend name="Max" lastActiveInSec="3020" />`}
            textSize={24}
          />
          <FriendIfElse name="Maciej" lastActiveInSec="40" />
          <FriendIfElse name="Max" lastActiveInSec="3020" />
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.FriendIfElseTernary}
          ranges={[
            { loc: [2, 10] },
            { loc: [6, 7] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`<Friend name="Maciej" lastActiveInSec="40" />
<Friend name="Max" lastActiveInSec="3020" />`}
            textSize={24}
          />
          <FriendIfElseTernary name="Maciej" lastActiveInSec="40" />
          <FriendIfElseTernary name="Max" lastActiveInSec="3020" />
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.FriendAndAnd}
          ranges={[
            { loc: [2, 10] },
            { loc: [6, 7] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`<Friend name="Maciej" isBrother={true} />
<Friend name="Max" isBrother={false} />`}
            textSize={24}
          />
          <FriendAndAnd name="Stefan" isBrother={true} />
          <FriendAndAnd name="Max" isBrother={false} />
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.Friends}
          ranges={[
            { loc: [3, 15] },
            { loc: [5, 12] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`<Friends friends={[{ name: "Max" }, { name: "Sebastian" }]} />`}
            textSize={24}
          />
          <Friends friends={[{ name: "Max" }, { name: "Sebastian" }]} />
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.FriendsKey}
          ranges={[
            { loc: [5, 12] },
            { loc: [7, 8] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`<Friends friends={[{ name: "Max" }, { name: "Sebastian" }]} />`}
            textSize={24}
          />
          <FriendsKey friends={[{ name: "Max" }, { name: "Sebastian" }]} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Reconciliation Strategy
          </Heading>
          <Heading size={3} textColor="secondary">
            aka VirtualDOM
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width={"100%"} src={images.vdom} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width={"100%"} src={images.vdomChange} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Let's code!</Heading>
        </Slide>
      </Deck>
    );
  }
}
