import css from "./Options.module.css";
export default function Options({
  totalFeedbacks,
  updateFeedbacks,
  resetFeedbacks,
}) {
  return (
    <>
      <button className={css.btn} onClick={() => updateFeedbacks("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedbacks("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedbacks("bad")}>
        Bad
      </button>
      {totalFeedbacks !== 0 && (
        <button className={css.btn} onClick={() => resetFeedbacks()}>
          Reset
        </button>
      )}
    </>
  );
}
