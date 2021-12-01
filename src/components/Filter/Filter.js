import s from './Filter.module.css';

export default function Filter({ onFilterInputEnter, onFilterOut }) {
  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        type="text"
        className={s.filterInput}
        onChange={onFilterInputEnter}
        onBlur={onFilterOut}
      />
    </label>
  );
}
