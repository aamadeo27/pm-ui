import { StrictMode, useMemo } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import createApolloClient from "./apollo";
import WelcomePage from "./pages/Welcome";
import useAuth from "./hooks/useAuth";
import DashboardPage from "./pages/Dashboard";

function ShellElement({ title }: { title: string }) {
  return <div>{title}</div>;
}

function App() {
  const [auth] = useAuth();
  const client = useMemo(() => {
    if (!auth.ready) return null;

    return createApolloClient(auth);
  }, [auth]);

  if (!client) return "Loading...";

  return (
    <ApolloProvider client={client}>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/projects"
              element={<ShellElement title="Projects" />}
            />
            <Route path="/tasks" element={<ShellElement title="Tasks" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ShellElement title="Profile" />} />
            <Route
              path="*"
              element={<ShellElement title="Route Not Found" />}
            />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </ApolloProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
