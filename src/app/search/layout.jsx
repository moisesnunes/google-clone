import "./../globals.css";
import SearchHeader from "../../components/SearchHeader";

export default function HomeSearch({ children }) {
  return (
    <div>
      <div>
        <SearchHeader />
        {children}
      </div>
    </div>
  );
}

