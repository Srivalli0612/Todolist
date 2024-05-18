// src/App.js

import React from "react";
// Import the keyword styled from styled-components.
import styled from "styled-components";

// Create a component in the styled-components way using the styled keyword.
const StBox = styled.div`
	// And then we write our style code inside it. The style code is the same as CSS as we know it.
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
`;

const App = () => {
	// And use the styled-components we created just like we would use html tags in JSX.
  return <StBox>Box</StBox>;
};

export default App;
