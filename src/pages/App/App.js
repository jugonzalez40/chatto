import React from "react";
import Gate from "../Gate/Gate";

import "./App.scss";

function App() {
  return (
    <div className="app__container">
      {/* <Flex flexDirection="column" h='100%'>
          <Box p="4" flexGrow="1" bg="red.200">
            Chat Box
          </Box>
          <Box p="4"  bg="green.200">
            INPPUT
          </Box>
        </Flex> */}
      
        <Gate />
    </div>
  );
}

export default App;
