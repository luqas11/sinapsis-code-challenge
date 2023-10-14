import { CustomRouter } from "./routing";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CustomRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;
