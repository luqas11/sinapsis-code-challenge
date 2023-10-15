import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CustomRouter } from "./routing";

function App() {
  const queryClient = new QueryClient();
  const customTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin + "/image-chooser",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <CustomRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default App;
