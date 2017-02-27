// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Image,
  Heading,
  List,
  ListItem,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  atomEslintError: require("../../assets/ES2015andBeyond/atomEslintError.png"),
  babel: require("../../assets/ES2015andBeyond/babel.png"),
  babelUsersI: require("../../assets/ES2015andBeyond/babelUsersI.png"),
  babelUsersII: require("../../assets/ES2015andBeyond/babelUsersII.png"),
  es5Support: require("../../assets/ES2015andBeyond/es5Support.png"),
  es2015Support: require("../../assets/ES2015andBeyond/es2015Support.png"),
  eslintLogo: require("../../assets/ES2015andBeyond/eslintLogo.png"),
  facebookCompiled: require("../../assets/ES2015andBeyond/facebookCompiled.png")
};

const code = {
  arrowFunctions: require("!!raw-loader!../../assets/ES2015andBeyond/arrowFunctions.js"),
  arrowFunctionsThis: require("!!raw-loader!../../assets/ES2015andBeyond/arrowFunctionsThis.js"),
  blockScopeVar: require("!!raw-loader!../../assets/ES2015andBeyond/blockScopeVar.js"),
  blockScopeLet: require("!!raw-loader!../../assets/ES2015andBeyond/blockScopeLet.js"),
  blockScopeConst: require("!!raw-loader!../../assets/ES2015andBeyond/blockScopeConst.js"),
  templateStrings: require("!!raw-loader!../../assets/ES2015andBeyond/templateStrings.js"),
  destructuringArray: require("!!raw-loader!../../assets/ES2015andBeyond/destructuringArray.js"),
  destructuringObject: require("!!raw-loader!../../assets/ES2015andBeyond/destructuringObject.js"),
  class: require("!!raw-loader!../../assets/ES2015andBeyond/class.js"),
  classWithBindingThis: require("!!raw-loader!../../assets/ES2015andBeyond/classWithBindingThis.js"),
  moduleI: require("!!raw-loader!../../assets/ES2015andBeyond/moduleI.js"),
  moduleII: require("!!raw-loader!../../assets/ES2015andBeyond/moduleII.js"),
  spreadArray: require("!!raw-loader!../../assets/ES2015andBeyond/spreadArray.js"),
  spreadObjectI: require("!!raw-loader!../../assets/ES2015andBeyond/spreadObjectI.js"),
  spreadObjectII: require("!!raw-loader!../../assets/ES2015andBeyond/spreadObjectII.js"),
  spreadObjectIII: require("!!raw-loader!../../assets/ES2015andBeyond/spreadObjectIII.js")
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
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            ES2015
          </Heading>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            and beyond
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps>
            A bit of history
          </Heading>

          <List>
            <ListItem textSize={38}>Version 1/2 was published 1997/1998</ListItem>
            <ListItem textSize={38}>Version 3.1 was published in 1999</ListItem>
            <ListItem textSize={38}>Version 4 was abandoned mostly due political differences concerning language complexity</ListItem>
          </List>

          <Text textColor="secondary">
            time gap where little happened and it took them 10 years to publish the next version
          </Text>

          <List>
            <ListItem textSize={38}>Version 5 was published in 2009 (6 years)</ListItem>
            <ListItem textSize={38}>Version 2015 was published June 2015</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">
            Wait a minute …
          </Text>
          <Appear>
            <Text textColor="secondary" margin={"40px 0 0"}>
            I need to support IE9
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary" margin={"40px 0 0"}>
              Yeah, me too 😎
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="100%" src={images.es5Support} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="100%" src={images.es2015Support} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="100%" src={images.babel} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="100%" src={images.facebookCompiled} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="50%" src={images.babelUsersI} />
          <Image width="50%" src={images.babelUsersII} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Arrow Functions</Heading>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.arrowFunctions}
          ranges={[
            { loc: [0, 3], title: "ES5" },
            { loc: [4, 5], title: "ES2015 Expression Body", note: "Result: [2, 3, 5]" },
            { loc: [6, 7], title: "ES2015 Expression Body", note: "Result: [3, 3, 4]" },
            { loc: [8, 13], title: "ES2015 Statement Body" }
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.arrowFunctionsThis}
          ranges={[
            { loc: [0, 4], note: "Simple JS object" },
            { loc: [5, 10] },
            { loc: [7, 8], note: "Lexical this" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Block-scoped binding Constructs</Heading>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.blockScopeVar}
          ranges={[
            { loc: [0, 100], title: "Scopes with var" },
            { loc: [1, 2], note: "Defining variable x" },
            { loc: [2, 6] },
            { loc: [3, 4], note: "Defining variable x" },
            { loc: [4, 5], note: "Output: 71" },
            { loc: [6, 7], note: "Output: 71" }
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.blockScopeLet}
          ranges={[
            { loc: [0, 100], title: "Scopes with let" },
            { loc: [1, 2], note: "Defining variable x" },
            { loc: [2, 6] },
            { loc: [3, 4], note: "Defining variable x" },
            { loc: [4, 5], note: "Output: 71" },
            { loc: [6, 7], note: "Output: 31" }
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.blockScopeConst}
          ranges={[
            { loc: [0], title: "const" },
            { loc: [0, 1], note: "Defining variable hello" },
            { loc: [1, 2], note: "NOT ALLOWED!" },
            { loc: [3, 7], note: "Defining variable world" },
            { loc: [7, 8], note: "VALID" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Template Strings</Heading>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.templateStrings}
          ranges={[
            { loc: [0, 2], note: "Wanted: \"It's 14:20 in Las Palmas\"" },
            { loc: [3, 4], title: "ES5" },
            { loc: [5, 6], title: "ES2015" },
            { loc: [7, 12], title: "ES2015 Multiline strings" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Class</Heading>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.class}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 3] },
            { loc: [4, 8] },
            { loc: [9, 13] }
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.classWithBindingThis}
          ranges={[
            { loc: [9, 13] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Destructuring</Heading>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.destructuringArray}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 4], note: "What we would do in ES5" },
            { loc: [5, 6], note: "ES2015 Destructuring" }
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.destructuringObject}
          ranges={[
            { loc: [0, 5] },
            { loc: [6, 7], note: "others contains all properties of this.props except for className" },
            { loc: [6, 7], note: "className is 'photo box'" },
            { loc: [6, 7], note: "others is { isSquare: true, width: 200 }" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Spread</Heading>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.spreadArray}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 2], note: '["banana", "apple", "pear", "lemon"]' },
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.spreadObjectI}
          ranges={[
            { loc: [0, 4] },
            { loc: [5, 9] },
            { loc: [10, 15] },
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.spreadObjectII}
          ranges={[
            { loc: [0, 4] },
            { loc: [5, 10] },
            { loc: [11, 16] },
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.spreadObjectIII}
          ranges={[
            { loc: [0, 4] },
            { loc: [5, 10] },
            { loc: [11, 16] },
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Modules</Heading>
        </Slide>
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.moduleI}
          ranges={[
            { loc: [0, 3], title: "add.js" },
            { loc: [4, 7] },
            { loc: [8, 11] }
          ]}
        />
        <CodeSlide
          transition={["scale"]}
          lang="js"
          code={code.moduleII}
          ranges={[
            { loc: [0, 2], title: "app.js"  },
            { loc: [2, 3] },
            { loc: [4, 6] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="100%" src={images.atomEslintError} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">Let's have a break …</Heading>
        </Slide>
      </Deck>
    );
  }
}
