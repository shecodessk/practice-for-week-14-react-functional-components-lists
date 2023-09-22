import { moves } from "./data";
import PokeMoveCard from "./PokeMoveCard";

const PokeMoves = () => {
  return (
    <div>
      <h1>Poke Moves</h1>
      <ul>
        {moves.map((item) => (
          <PokeMoveCard key={item.id} {...item} />

          /*<li key={item.id}>
            {item.id}. {item.move}
          </li>*/
        ))}
      </ul>
    </div>
  );
};
export default PokeMoves;
