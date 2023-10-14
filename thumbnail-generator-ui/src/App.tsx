import { CustomRouter } from "./routing";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const queryClient = new QueryClient();

  const customTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <CustomRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
