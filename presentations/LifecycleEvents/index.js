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
import Button from "../../assets/LifecycleEvents/Button";
import CounterButton from "../../assets/LifecycleEvents/CounterButton";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  tree: require("../../assets/LifecycleEvents/tree.png")
};

const code = {
  Button: require("!!raw-loader!../../assets/LifecycleEvents/Button.js"),
  CounterButton: require("!!raw-loader!../../assets/LifecycleEvents/CounterButton.js")
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

const colors = [
  "blue",
  "green",
  "red"
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export default class Presentation extends React.Component {

  state = {
    color: "blue",
    other: true
  }

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

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Optimization performance with shouldComponentUpdate
          </Heading>
        </Slide>

        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.Button}
          ranges={[
            { loc: [0, 3] },
            { loc: [13, 20] },
            { loc: [4, 12] }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`<button onClick={() => this.setState({ color: getRandomColor() })}>
  Change Color
</button>
<Button color={this.state.color} />`}
            textSize={24}
          />
          <button onClick={() => this.setState({ color: getRandomColor() })}>
            Change Color
          </button>
          <Button color={this.state.color} />
        </Slide>

        <CodeSlide
          transition={["scale"]}
          lang="jsx"
          code={code.CounterButton}
          ranges={[
            { loc: [0, 8] },
            { loc: [22, 33] },
            { loc: [9, 21] }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`<button onClick={() => this.setState({ color: getRandomColor() })}>
  Change Color
</button>
<button onClick={() => this.setState((state) => ({ other: !state.other }))}>
  Change Other part of the state
</button>
<CounterButton color={this.state.color} />`}
            textSize={24}
          />
          <button onClick={() => this.setState({ color: getRandomColor() })}>
            Change Color
          </button>
          <button onClick={() => this.setState((state) => ({ other: !state.other }))}>
            Change Other part of the state
          </button>
          <CounterButton color={this.state.color} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Image width={"100%"} src={images.tree} />
        </Slide>
      </Deck>
    );
  }
}
