import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.container}>
      <p>Find contacts by name...</p>
      <input
        className={css.search}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}