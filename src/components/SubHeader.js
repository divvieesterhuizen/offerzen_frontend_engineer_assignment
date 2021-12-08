import { connect } from 'react-redux';
import { toggleArchived, filterCandidates } from '../redux/candidatesActions';

import { FaSearch } from 'react-icons/fa';

const SubHeader = ({
  candidates: { showArchived },
  toggleArchived,
  filterCandidates,
}) => {
  return (
    <div className='bg-white py-10'>
      <div className='container'>
        <input
          placeholder='Search'
          type='text'
          style={{ width: '220px' }}
          onChange={(e) => {
            filterCandidates(e.target.value);
          }}
        />
        <FaSearch style={{ marginLeft: '-30px', color: '#DAE0E4' }} />

        <p style={{ float: 'right' }}>
          Show archived{' '}
          <input
            checked={!!showArchived && 'checked'}
            type='checkbox'
            style={{ bottom: '-2px', position: 'relative' }}
            onChange={() => {
              toggleArchived();
            }}
          />
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

export default connect(mapStateToProps, { toggleArchived, filterCandidates })(
  SubHeader
);
