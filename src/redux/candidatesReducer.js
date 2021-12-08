import {
  GET_CANDIDATES,
  FILTER_CANDIDATES,
  TOGGLE_ARCHIVED,
  TOGGLE_CANDIDATE_ARCHIVE_STATUS,
} from './types';

const initialState = {
  candidates: null,
  filteredCandidates: null,
  showArchived: true,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES:
      return {
        ...state,
        candidates: action.payload,
      };
    case FILTER_CANDIDATES:
      return {
        ...state,
        filteredCandidates: state.candidates.filter((c) => {
          return c.candidate
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    case TOGGLE_ARCHIVED:
      return {
        ...state,
        showArchived: !state.showArchived,
      };
    case TOGGLE_CANDIDATE_ARCHIVE_STATUS:
      const name = action.payload;

      if (state.filteredCandidates) {
        return {
          ...state,
          filteredCandidates: state.filteredCandidates.map((candidate) => {
            if (candidate.candidate === name) {
              candidate.archived = !candidate.archived;
              return candidate;
            } else {
              return candidate;
            }
          }),
        };
      } else {
        return {
          ...state,
          candidates: state.candidates.map((candidate) => {
            if (candidate.candidate === name) {
              candidate.archived = !candidate.archived;
              return candidate;
            } else {
              return candidate;
            }
          }),
        };
      }

    default:
      return state;
  }
};
