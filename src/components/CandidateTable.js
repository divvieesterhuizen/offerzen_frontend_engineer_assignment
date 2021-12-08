import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCandidates } from '../redux/candidatesActions';

import { FaArrowsAltV } from 'react-icons/fa';

import CandidateTableItem from './CandidateTableItem';

const CandidateTable = ({
  // interviewRequests,
  candidates: { candidates, showArchived, filteredCandidates },
  getCandidates,
}) => {
  useEffect(() => {
    getCandidates();
    // eslint-disable-next-line
  }, [candidates]);

  return (
    <div>
      <div>
        <p style={{ textAlign: 'right', marginTop: '30px' }}>
          {candidates !== null && candidates.length} interview requests
        </p>
      </div>
      <div className='candidate-table-box'>
        {/* headings */}
        <div className='flex candidate-table-inner-div bg-gray text-dark text-semi-bold hide-under-950'>
          <div className='flex-child'>
            <p>Candidate</p>
          </div>
          <div className='flex-child'>
            <p>Role</p>
          </div>
          <div className='flex-child'>
            <p>
              Last Communication <FaArrowsAltV />
            </p>
          </div>
          <div className='flex-child'>
            <p>Salary</p>
          </div>
          <div className='flex-child'>
            <p>Sent By</p>
          </div>
          <div className='flex-child'></div>
        </div>
        {/* Candidates */}

        {candidates &&
          !filteredCandidates &&
          candidates.map((item, index) => {
            if (showArchived) {
              return <CandidateTableItem key={index} indexValue={index} />;
            } else {
              if (item.archived === false) {
                return <CandidateTableItem key={index} indexValue={index} />;
              }
            }
            return '';
          })}
        {/* Filtered Candidates */}
        {filteredCandidates &&
          filteredCandidates.length > 0 &&
          filteredCandidates.map((item, index) => {
            if (showArchived) {
              return <CandidateTableItem key={index} indexValue={index} />;
            } else {
              if (item.archived === false) {
                return <CandidateTableItem key={index} indexValue={index} />;
              }
            }
            return '';
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

export default connect(mapStateToProps, { getCandidates })(CandidateTable);
