// import { useState } from 'react';

import Header from './components/Header.js';
import SubHeader from './components/SubHeader.js';
import CandidateTable from './components/CandidateTable.js';

// import interviewRequests from './interviewRequests.json';
import './App.css';

import { Provider } from 'react-redux';

import store from './redux/store';

function App() {
  // const [interviewRequestsState, setInterviewRequestsState] =
  //   useState(interviewRequests);

  // const filterInterviewRequests = (searchText) => {
  //   const filteredRequests = interviewRequests.filter((x) => {
  //     return x.candidate.toLowerCase().includes(searchText.toLowerCase());
  //   });
  //   setInterviewRequestsState(filteredRequests);
  // };

  // const [showArchived, setShowArchived] = useState(true);

  // const toggleArchived = (index) => {
  //   let temp = interviewRequestsState;
  //   temp[index].archived = !temp[index].archived;
  //   setInterviewRequestsState([...temp]);
  // };

  return (
    <Provider store={store}>
      <div className='row'>
        <Header />
        <SubHeader
        // filterInterviewRequests={filterInterviewRequests}
        // showArchived={showArchived}
        // setShowArchived={setShowArchived}
        />
        <div className='container'>
          <CandidateTable
          // interviewRequests={interviewRequestsState}
          // showArchived={showArchived}
          // toggleArchived={toggleArchived}
          />
        </div>
      </div>
    </Provider>
  );
}

export default App;
