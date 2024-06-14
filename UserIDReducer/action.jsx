import axios from "axios";
import * as types from "./actiotypes";

// Load particular candidate ID Card

const idgetReq = () => {
  return {
    type: types.IDCARDGETREQ,
  };
};

const idgetSucess = (payload) => {
  return {
    type: types.IDCARDGETSUCCESS,
    payload,
  };
};

const idgetFail = () => {
  return {
    type: types.IDCARDGETFAILURE,
  };
};

export const GetIDcarddata = (EmpID) => (dispatch) => {
  // console.log("errr",EmpID)
  dispatch(idgetReq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/IdCardRequestForm/PreFillIdCardRequestForm/${EmpID}/`
    )
    .then((res) => {
      return dispatch(idgetSucess(res.data));
    })
    .catch((err) => {
      dispatch(idgetFail());
    });
};

// // Load particular candidate Ndas Known details

const useridgetReq = () => {
  return {
    type: types.USERIDCARDGETREQ,
  };
};

const useridgetSucess = (payload) => {
  return {
    type: types.USERIDCARDGETSUCCESS,
    payload,
  };
};

const useridgetFail = () => {
  return {
    type: types.USERIDCARDGETFAILURE,
  };
};

export const GetUserIDcarddetails = (EmpID) => (dispatch) => {
  // console.log("errr",EmpID)
  dispatch(useridgetReq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/UserIdRequestForm/PreFillUserIdRequestForm/${EmpID}/`
    )
    .then((res) => {
      return dispatch(useridgetSucess(res.data));
    })
    .catch((err) => {
      dispatch(useridgetFail());
    });
};


//  Employee Verification api


const employeegetReq = () => {
  return {
    type: types.EMPLOYEEVERIFICATIONGETREQ,
  };
};

const employeegetSucess = (payload) => {
  return {
    type: types.EMPLOYEEVERIFICATIONGETSUCCESS,
    payload,
  };
};

const employeegetFail = () => {
  return {
    type: types.EMPLOYEEVERIFICATIONGETFAILURE,
  };
};

export const GetEmployeeverifications = (EmpID) => (dispatch) => {
  // console.log("errr",EmpID)
  dispatch(employeegetReq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/EmpVerificationForm/PreFillEmpVerificationForm/${EmpID}//`
    )
    .then((res) => {
      return dispatch(employeegetSucess(res.data));
    })
    .catch((err) => {
      dispatch(employeegetFail());
    });
};


//  Personal details  get Api


const PersonalgetReq = () => {
  return {
    type: types.EMPLOYEEPERSONALDEATILSGETREQ,
  };
};

const PersonalgetSucess = (payload) => {
  return {
    type: types.EMPLOYEEPERSONALDEATILSGETSUCCESS,
    payload,
  };
};

const PersonalgetFail = () => {
  return {
    type: types.EMPLOYEEPERSONALDEATILSGETFAILURE,
  };
};

export const GetPersonalverifications = (EmpID) => (dispatch) => {
  // console.log("errr",EmpID)
  dispatch(PersonalgetReq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/PersonalDetailsForm/PreFillPersonalDetailsForm/${EmpID}/`
    )
    .then((res) => {
      return dispatch(PersonalgetSucess(res.data));
    })
    .catch((err) => {
      dispatch(PersonalgetFail());
    });
};


// https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/EmploymentApplicationForm/PreFillEmploymentApplicationForm/{EmpID}


  //  Application form get APi  

const CandidateapplicantgetReq = () => {
  return {
    type: types.CANDIDATEAPPLICANTGETREQ,
  };
};

const CandidateapplicantgetSucess = (payload) => {
  return {
    type: types.CANDIDATEAPPLICANTGETSUCCESS,
    payload,
  };
};

const CandidateapplicantgetFail = () => {
  return {
    type: types.CANDIDATEAPPLICANTGETFAILURE,
  };
};

export const GetCandidateApplicant = (EmpID) => (dispatch) => {
  // console.log("errr",EmpID)
  dispatch(CandidateapplicantgetReq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/EmploymentApplicationForm/PreFillEmploymentApplicationForm/${EmpID}/`
    )
    .then((res) => {
      return dispatch(CandidateapplicantgetSucess(res.data));
    })
    .catch((err) => {
      dispatch(CandidateapplicantgetFail());
    });
};



//  Get  Decalartion form
//  Application form get APi  

const CandidatedecalartiongetReq = () => {
  return {
    type: types.CANDIDATEDECALARTIONFORMGETREQ,
  };
};

const CandidatdecalartiontgetSucess = (payload) => {
  return {
    type: types.CANDIDATEDECALARTIONFORMGETSUCCESS,
    payload,
  };
};

const CandidatedecalartiongetFail = () => {
  return {
    type: types.CANDIDATEDECALARTIONFORMGETFAILURE,
  };
};

export const GetCandidatedecalartion = (EmpID) => (dispatch) => {
  // console.log("errr",EmpID)
  dispatch(CandidatedecalartiongetReq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/PFDeclaration/PreFillPFDeclarationForm/${EmpID}/`
    )
    .then((res) => {
      return dispatch(CandidatdecalartiontgetSucess(res.data));
    })
    .catch((err) => {
      dispatch(CandidatedecalartiongetFail());
    });
};


//  EPF nomieee form data 


const CandidateepfnomineegetReq = () => {
  return {
    type: types.CANDIDATEEPFNOMINEEGETREQ,
  };
};

const CandidatdepfnomineegetSucess = (payload) => {
  return {
    type: types.CANDIDATEEPFNOMINEEGETSUCCESS,
    payload,
  };
};

const CandidateepfnomineegetFail = () => {
  return {
    type: types.CANDIDATEEPFNOMINEEGETFAILURE,
  };
};

export const GetCandidateEpfnomineee = (EmpID) => (dispatch) => {
  // console.log("errr",EmpID)
  dispatch(CandidateepfnomineegetReq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/PFNomineeForm/PreFillPFNomineeForm/${EmpID}/`
    )
    .then((res) => {
      return dispatch(CandidatdepfnomineegetSucess(res.data));
    })
    .catch((err) => {
      dispatch(CandidateepfnomineegetFail());
    });
};

// Post candidate

const CandidateepfnomineepostReq = () => {
  return {
    type: types.CANDIDATEEPFNOMINEEPOSTREQ,
  };
};

const CandidatdepfnomineepostSucess = (payload) => {
  return {
    type: types.CANDIDATEEPFNOMINEEPOSTSUCCESS,
    payload,
  };
};

const CandidateepfnomineepostFail = () => {
  return {
    type: types.CANDIDATEEPFNOMINEEPOSTFAILURE,
  };
};

export const PostCandidateEpfnomineee = (params,payload) => (dispatch) => {
  console.log("errrsdfgsdfgdfs",params,payload)
  dispatch(CandidateepfnomineepostReq());
  return axios
    .post(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/${params}`,payload
    )
    .then((res) => {
      return dispatch(CandidatdepfnomineepostSucess(res.data));
    })
    .catch((err) => {
      dispatch(CandidateepfnomineepostFail());
    });
};

