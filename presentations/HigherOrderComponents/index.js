// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Appear,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
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

const code = {
  higherOrderFunctionFilter: require("!!raw-loader!../../assets/HigherOrderComponents/higherOrderFunctionFilter.js"),
  higherOrderFunctionGreaterThan: require("!!raw-loader!../../assets/HigherOrderComponents/higherOrderFunctionGreaterThan.js")
};

const images = {
  andrewClark: require("../../assets/HigherOrderComponents/andrewClark.jpg"),
  history: require("../../assets/HigherOrderComponents/history.png"),
  recompose: require("../../assets/HigherOrderComponents/recompose.png")
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
          <Heading size={2} textColor="secondary">Higher Order Components</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Origin</Heading>
          <Text size={6} margin="150px 0 0" textColor="secondary" >
            In mathematics and computer science, a higher-order function (also functional, functional form or functor) is a function that does at least one of the following:
          </Text>
          <List>
            <Appear><ListItem textSize={38}>takes one or more functions as arguments (i.e., procedural parameters),</ListItem></Appear>
            <Appear><ListItem textSize={38}>returns a function as its result.</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Higher Order Function</Heading>
          <CodePane
            lang="jsx"
            source={code.higherOrderFunctionFilter}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Higher Order Function</Heading>
          <CodePane
            lang="jsx"
            source={code.higherOrderFunctionGreaterThan}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">A higher-order component is a function that takes a component and returns a new component.</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <Appear><ListItem textSize={38}>
              <Text>React-Router’s withRouter:</Text>
              <Code textSize={28}>const MyWrappedComponent = withRouter(MyComponent)</Code>
            </ListItem></Appear>
            <Appear><ListItem textSize={38}>
              <Text>Redux’s connect:</Text>
              <Code textSize={28}>const myContainer = connect(MyComponent)</Code>
            </ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/HigherOrderComponents/withDefaultName.js")}
            margin="20px"
            textSize={"1.2rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/HigherOrderComponents/withDefaultNameComponent.js")}
            margin="20px"
            textSize={"1.2rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/HigherOrderComponents/withDefaultNameApp.js")}
            margin="20px"
            textSize={"1.2rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">History</Heading>
          <Image width="100%" src={images.history} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Andrew Clark</Heading>
          <Image width="50%" src={images.andrewClark} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Recompose</Heading>
          <Image width="100%" src={images.recompose} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/HigherOrderComponents/recomposeWithState.js")}
            margin="20px"
            textSize={"1.2rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/HigherOrderComponents/recomposeWithReducer.js")}
            margin="20px"
            textSize={"1.2rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem textSize={38}>mapProps()</ListItem>
            <ListItem textSize={38}>withProps()</ListItem>
            <ListItem textSize={38}>withPropsOnChange()</ListItem>
            <ListItem textSize={38}>withHandlers()</ListItem>
            <ListItem textSize={38}>defaultProps()</ListItem>
            <ListItem textSize={38}>renameProp()</ListItem>
            <ListItem textSize={38}>renameProps()</ListItem>
            <ListItem textSize={38}>flattenProp()</ListItem>
            <ListItem textSize={38}>withState()</ListItem>
            <ListItem textSize={38}>withReducer()</ListItem>
            <ListItem textSize={38}>branch()</ListItem>
            <ListItem textSize={38}>renderNothing()</ListItem>
            <ListItem textSize={38}>shouldUpdate()</ListItem>
            <ListItem textSize={38}>pure()</ListItem>
            <ListItem textSize={38}>onlyUpdateForKeys()</ListItem>
            <ListItem textSize={38}>onlyUpdateForPropTypes()</ListItem>
            <ListItem textSize={38}>withContext()</ListItem>
            <ListItem textSize={38}>getContext()</ListItem>
            <ListItem textSize={38}>lifecycle()</ListItem>
            <ListItem textSize={38}>toClass()</ListItem>
            <ListItem textSize={38}>renderComponent()</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Nesting</Heading>
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/HigherOrderComponents/compositionExampleI.js")}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Composition</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Nesting</Heading>
          <CodePane
            lang="jsx"
            source={require("!!raw-loader!../../assets/HigherOrderComponents/compositionExampleII.js")}
            margin="20px"
            textSize={"1.4rem"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Form Validation As Higher Order Components</Heading>
          <List>
            <ListItem textSize={38}>https://medium.com/javascript-inside/form-validation-as-a-higher-order-component-pt-1-83ac8fd6c1f0#.30r0cghvl</ListItem>
            <ListItem textSize={38}>https://medium.com/javascript-inside/form-validation-as-a-higher-order-component-pt-2-1edb7881870d#.kxgv6b39g</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Lab</Heading>
          <List>
            <ListItem textSize={38}>Minimum length validation which can be wrapped around an input element (password or text). The minimum length is 7. In case the minimum required length is not fulfilled an error hint is shown. </ListItem>
            <ListItem textSize={38}>Range validation for a input element with number. The range can be provided to the higher order component as a parameter of the function. In case the number is not in the range an error hint is shown indicating the accepted range.</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
