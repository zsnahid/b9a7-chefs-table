import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";

export default function App() {
  return (
    <section className="w-11/12 max-w-screen-2xl mx-auto font-lexend">
      <Header />
      <Recipes />
    </section>
  );
}
