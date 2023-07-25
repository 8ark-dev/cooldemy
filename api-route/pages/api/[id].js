import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
    const id = req.query.id;
    const filePath  = buildFeedbackPath();
    const feedbackData = extractFeedback(filePath);

    const selectedFeedback = feedbackData.find(feedback => feedback.id === id);

    if(!selectedFeedback) {
        res.status(404).json({message: 'No feedback found!'});
    }else {
        res.status(200).json({feedback: selectedFeedback});
    }

}

export default handler;