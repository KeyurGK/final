import * as types from "./actiotypes";

const initialState = {
  isLoading: false,
  IDCardgetdata: [],
  UserIdcarddata: [],
  Employeeverification: [],
  Personaldata: [],
  Applicantdata: [],
  Declartiondata: [],
  EPFnomineedata:[]
};

export const Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.IDCARDGETREQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.IDCARDGETSUCCESS:
      return {
        ...state,
        isLoading: false,
        IDCardgetdata: payload,
      };
    case types.USERIDCARDGETSUCCESS:
      return {
        ...state,
        isLoading: false,
        UserIdcarddata: payload,
      };

    case types.EMPLOYEEVERIFICATIONGETSUCCESS:
      return {
        ...state,
        isLoading: false,
        Employeeverification: payload,
      };
    case types.EMPLOYEEPERSONALDEATILSGETSUCCESS:
      return {
        ...state,
        isLoading: false,
        Personaldata: payload,
      };
    case types.CANDIDATEAPPLICANTGETSUCCESS:
      return {
        ...state,
        isLoading: false,
        Applicantdata: payload,
      };
    case types.CANDIDATEDECALARTIONFORMGETSUCCESS:
      return {
        ...state,
        isLoading: false,
        Declartiondata: payload,
      };
    case types.CANDIDATEEPFNOMINEEGETSUCCESS:
      return {
        ...state,
        isLoading: false,
        EPFnomineedata: payload,
      };

    default:
      return state;
  }
};
