import "./App.css";

import Router from "./routes/routes.index";
import ThemeConfig from "./theme/theme";
import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <ThemeConfig>
      <div className="App" theme={theme}>
        <Router />
      </div>
    </ThemeConfig>
  );
}

export default App;
