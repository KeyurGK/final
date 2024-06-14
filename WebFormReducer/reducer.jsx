import * as types from "./actionType";
const intialstate = {
  token: "",
  isLoading: false,
  Getemployee: [],
  Candidateinfo:[],
  Candidatesdocuments:[]

};

export const Reducer = (state = intialstate, action) => {
  const { type, payload } = action;
  //    console.log("state",state)

  switch (type) {
    case types.EMPLOYEEPOSTDATAPENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.EMPLOYEEPOSTDATASUCESSS:
      return {
        ...state,
        isLoading: false,
      };
    case types.EMPLOYEEPOSTATTACHMENTPENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.EMPLOYEEPOSTATTACHMENTSUCESSS:
      return {
        ...state,
        isLoading: false,
      };

    case types.GETDATAREQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.GETDATASUCESSS:
      return {
        ...state,
        isLoading: false,
        Getemployee: payload,
      };
      case types.GETCANDIDATEINFOSUCESSS:
      return {
        ...state,
        isLoading: false,
        Candidateinfo: payload,
      };
      case types.EMPLOYEEATTACHMENTSTATUSSUCESSS:
        return {
          ...state,
          isLoading: false,
          Candidatesdocuments: payload,
        };

    default:
      return state;
  }
};
