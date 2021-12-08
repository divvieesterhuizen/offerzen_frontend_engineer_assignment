import {
  GET_CANDIDATES,
  FILTER_CANDIDATES,
  TOGGLE_ARCHIVED,
  TOGGLE_CANDIDATE_ARCHIVE_STATUS,
} from './types';

import interviewRequests from '../interviewRequests.json';

export const getCandidates = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_CANDIDATES,
        payload: interviewRequests,
      });
    } catch (err) {
      console.error(err.response);
    }
  };
};

export const filterCandidates = (text) => {
  return {
    type: FILTER_CANDIDATES,
    payload: text,
  };
};

export const toggleArchived = () => {
  return {
    type: TOGGLE_ARCHIVED,
  };
};

export const toggleCandidateArchiveStatus = (index) => {
  return {
    type: TOGGLE_CANDIDATE_ARCHIVE_STATUS,
    payload: index,
  };
};
