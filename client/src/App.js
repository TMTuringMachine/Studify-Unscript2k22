import "./App.css";

import Router from "./routes/routes.index";
import ThemeConfig from "./theme/theme";
import { useTheme } from "@mui/material";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const theme = useTheme();
  return (
    <ThemeConfig>
      <div className="App" theme={theme}>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </div>
    </ThemeConfig>
  );
}

export default App;
