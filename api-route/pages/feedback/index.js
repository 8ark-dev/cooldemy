import { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  function handleLoadFeedback(id) {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  if (!props.feedbackItems) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={handleLoadFeedback.bind(null, item.id)}>
              show details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default FeedbackPage;

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}
