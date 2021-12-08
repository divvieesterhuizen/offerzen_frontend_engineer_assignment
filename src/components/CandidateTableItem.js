import moment from 'moment';
import { connect } from 'react-redux';
import { toggleCandidateArchiveStatus } from '../redux/candidatesActions';

const CandidateTableItem = ({
  candidates: { candidates, filteredCandidates },
  indexValue,
  toggleCandidateArchiveStatus,
}) => {
  let candidatesArray = candidates;
  if (filteredCandidates) {
    candidatesArray = filteredCandidates;
  }
  const { image, candidate, role, last_comms, salary, archived, sent_by } =
    candidatesArray[indexValue];

  const currencySymbol = 'R';

  const numberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const formatDate = (date_time) => {
    const today = new Date('2021-04-12 23:12:38').getTime();
    const candidateDate = new Date(date_time).getTime();
    const ddmmyyyy = moment(candidateDate).format('L');
    const hmm = moment(candidateDate).format('h:mma');
    const diffInHours = moment(today).diff(moment(candidateDate), 'hours');

    let returnDate = ddmmyyyy;

    if (diffInHours < 24) {
      returnDate = hmm;
    }
    if (diffInHours > 24 && diffInHours < 47) {
      returnDate = 'Yesterday';
    }

    return returnDate;
  };

  return (
    <div
      className={`flex candidate-table-inner-div border-bottom-light ${
        archived ? 'bg-gray' : 'bg-white'
      }`}
    >
      <div className='flex-child'>
        <p>
          <img
            width='30'
            height='30'
            style={{ marginRight: '10px' }}
            className='img-circle'
            src={image}
            alt='candidate'
          />{' '}
          {candidate}
        </p>
      </div>
      <div className='flex-child'>
        <p>{role ? role : '-'}</p>
      </div>
      <div className='flex-child'>
        <p>
          {last_comms.unread ? (
            <div className='green-oval'></div>
          ) : (
            <div className='white-oval'></div>
          )}{' '}
          {last_comms.description}{' '}
          <span className='text-small'>{formatDate(last_comms.date_time)}</span>
        </p>
      </div>
      <div className='flex-child'>
        <p>
          {currencySymbol}
          {numberWithSpaces(salary)}
        </p>
      </div>
      <div className='flex-child'>
        <p>{sent_by}</p>
      </div>
      <div className='flex-child'>
        <p
          onClick={() => {
            //toggleCandidateArchiveStatus(indexValue);
            toggleCandidateArchiveStatus(candidate);
          }}
        >
          {archived ? 'Unarchive' : 'Archive'}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

export default connect(mapStateToProps, { toggleCandidateArchiveStatus })(
  CandidateTableItem
);
