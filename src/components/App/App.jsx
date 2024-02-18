import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";
import { useState, useEffect } from "react";

export default function App() {
  const getFeedbacks = () => {
    const savedFeedbacks = window.localStorage.getItem("Feedbacks");

    return savedFeedbacks !== null
      ? JSON.parse(savedFeedbacks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  };

  const [feedbacks, setFeedbacks] = useState(getFeedbacks);

  const updateFeedbacks = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("Feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  return (
    <>
      <Description></Description>
      <Options
        resetFeedbacks={resetFeedbacks}
        totalFeedbacks={totalFeedbacks}
        updateFeedbacks={updateFeedbacks}
      ></Options>
      {totalFeedbacks !== 0 ? (
        <Feedback feedbacks={feedbacks} totalFeedbacks={totalFeedbacks} />
      ) : (
        <Notification />
      )}
    </>
  );
}
