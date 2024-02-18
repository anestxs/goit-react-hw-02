export default function Feedback({
  feedbacks: { good, neutral, bad },
  totalFeedbacks,
}) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedbacks}</p>
      <p>Positive: {Math.round(((good + neutral) / totalFeedbacks) * 100)}%</p>
    </>
  );
}
