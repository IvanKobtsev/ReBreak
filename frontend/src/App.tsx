import { Loading } from "solid-js";
import { Router } from "@/router.ts";
import "@/styles/index.xcss";

export default function App() {
  return (
    <Router>
      {(props) => (
        <main>
          <Loading fallback={<p>Loading...</p>}>{props.children}</Loading>
        </main>
      )}
    </Router>
  );
}
