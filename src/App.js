import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Admin />
      </div>
    </QueryClientProvider>
  );
}

export default App;
