import React from "react";
import { render } from "react-dom";
import "./assets/prism/prism";
import "./assets/prism/prism-jsx.min";
import "./assets/prism/prism-default.css";

// import Presentation from "./presentations/ES2015andBeyond";
// import Presentation from "./presentations/ReactBasics";
// import Presentation from "./presentations/InteractionAndStateManagement";
import Presentation from "./presentations/LifecycleEvents";
// import Presentation from "./presentations/ReduxIntro";
// import Presentation from "./presentations/ReduxAdvanced";
// import Presentation from "./presentations/HigherOrderComponents";
// import Presentation from "./presentations/Example";

render(<Presentation/>, document.getElementById("root"));
