import {useNavigate} from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useNavigate();

  function handleMeetup(meetupData) {
    fetch('https://udemy-react-60eb9-default-rtdb.firebaseio.com/meetups.json', {
      //data 저장을 위해 Post
      method: 'POST',
      body: JSON.stringify(meetupData), //js obj to json
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history('/', {
        replace: true
      }); //navigate to home page
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleMeetup} />
    </section>
  );
}

export default NewMeetupPage;
