import axios from "axios";
import * as types from "./actionType";

// Get employeee  All Data of
const getdatareq = () => {
  return {
    type: types.GETDATAREQ,
  };
};

const getdatasuccess = (payload) => {
  return {
    type: types.GETDATASUCESSS,
    payload,
  };
};

const getdatafailure = () => {
  return {
    type: types.GETDATAFailure,
  };
};

export const GetDataemplyee = (dispatch) => {
  dispatch(getdatareq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/LoadCandidateDataHRView/`
    )
    .then((res) => {
      return dispatch(getdatasuccess(res.data));
    })
    .catch((err) => {
      dispatch(getdatafailure());
    });
};


//   Get Single data for Phase one 

export const Getsingleemployeereq = () => {
  return {
    type: types.GETDATASINGLEREQ,
  };
};

export const Getsingleemployeesuceess = (payload) => {
  return {
    type: types.GETDATASINGLEREQ,
    payload,
  };
};

export const Getsingleemployeefail = () => {
  return {
    type: types.GETDATASINGLEFailure,
  };
};

export const getSingleEmployee = (_id) => (dispatch) => {
  dispatch(Getsingleemployeereq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/LoadCandidateDataHRView/${_id}`
    )
    .then((res) => {
      return dispatch(Getsingleemployeesuceess(res.data));
    })
    .catch((e) => {
      return dispatch(Getsingleemployeefail());
    });
};

//  Post Employee details phase One  Joining details Start

const Postemployeedatareq = () => {
  return {
    type: types.EMPLOYEEPOSTDATAPENDING,
  };
};

const Postemployeedatasuccess = (payload) => {
  return {
    type: types.EMPLOYEEPOSTDATASUCESSS,
    payload,
  };
};

const Postemployeedatafailure = () => {
  return {
    type: types.EMPLOYEEPOSTDATAFailure,
  };
};

export const PostEmployeepersonaldetail = (payload) => (dispatch) => {
  dispatch(Postemployeedatareq());
  return axios
    .post(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/Post/`,
      payload
    )
    .then((res) => {
      return dispatch(Postemployeedatasuccess(res));
    })
    .catch((e) => {
      return dispatch(Postemployeedatafailure());
    });
};

//  Post Employee details phase  One  joining details Ends Here

// Employeess of  Attachments

const PostemployeeAttachmentreq = () => {
  return {
    type: types.EMPLOYEEPOSTATTACHMENTPENDING,
  };
};

const PostemployeeAttachmentsuccess = (payload) => {
  return {
    type: types.EMPLOYEEPOSTATTACHMENTSUCESSS,
    payload,
  };
};

const PostemployeeAttachmentfailure = () => {
  return {
    type: types.EMPLOYEEPOSTATTACHMENTFailure,
  };
};

export const PostEmployeeAttchmentsdetail =
  (Uniqueid, payload) => (dispatch) => {
    console.log("PostEmployeeAttchmentsdetail", Uniqueid, payload);
    dispatch(PostemployeeAttachmentreq());
    return axios
      .post(
        `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/uploadAttachments/${Uniqueid}/`,
        payload
      )
      .then((res) => {
        return dispatch(PostemployeeAttachmentsuccess(res));
      })
      .catch((e) => {
        return dispatch(PostemployeeAttachmentfailure());
      });
  };

{
  /**  HR Approved Api  HR Approval candidate information */
}

const HRApprovedreq = () => {
  return {
    type: types.UPDATESINGLEEMPLOYEEEREQ,
  };
};

const HRApprovedsuccess = (payload) => {
  return {
    type: types.UPDATESINGLEEMPLOYEEESUCESSS,
    payload,
  };
};

const HRApprovedfailure = () => {
  return {
    type: types.UPDATESINGLEEMPLOYEEEFailure,
  };
};

export const HrApproveddetail = (HrApprovedBy, CandiateID) => (dispatch) => {
  console.log("=====HrApprovedBy===", CandiateID, HrApprovedBy);

  dispatch(HRApprovedreq());
  return axios
    .put(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/HRVerificationUpdate/${HrApprovedBy}/${CandiateID}/`
    )
    .then((res) => {
      return dispatch(HRApprovedsuccess(res));
    })
    .catch((e) => {
      return dispatch(HRApprovedfailure());
    });
};

{
  /*** When HR updates Candidate information Phase One   */
}

const HRupdateApprovedreq = () => {
  return {
    type: types.UPDATESINGLEEMPLOYEEEREQ,
  };
};

const HRupdateApprovedsuccess = (payload) => {
  return {
    type: types.UPDATESINGLEEMPLOYEEESUCESSS,
    payload,
  };
};

const HRupdateApprovedfailure = () => {
  return {
    type: types.UPDATESINGLEEMPLOYEEEFailure,
  };
};

export const HrupdateCanditatedetail = (CandiateID, payload) => (dispatch) => {
  // console.log("HrApprovedBy", CandiateID, payload);
  dispatch(HRupdateApprovedreq());
  return axios
    .put(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/HRCandidateDataUpdate/${CandiateID}/`,
      payload
    )
    .then((res) => {
      return dispatch(HRupdateApprovedsuccess(res));
    })
    .catch((e) => {
      return dispatch(HRupdateApprovedfailure());
    });
};

{
  /** Hr Reject phase one user */
}

const HRupdateRejectPhaseonereq = () => {
  return {
    type: types.HRREJECTPHASEONEEMPLOYEEEREQ,
  };
};

const HRupdateRejectPhaseonesuccess = (payload) => {
  return {
    type: types.HRREJECTPHASEONEEMPLOYEEESUCESSS,
    payload,
  };
};

const HRupdateRejectPhaseonefailure = () => {
  return {
    type: types.HRREJECTPHASEONEEMPLOYEEEFailure,
  };
};

export const HrRejectCanditatePhaseone =
  (CandiateID, UpdatedBy) => (dispatch) => {
    console.log("HrApprovedBy", CandiateID, UpdatedBy);
    dispatch(HRupdateRejectPhaseonereq());
    return axios
      .put(
        `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/HRRejectCandidates/${CandiateID}/${UpdatedBy}/`
      )
      .then((res) => {
        return dispatch(HRupdateRejectPhaseonesuccess(res));
      })
      .catch((e) => {
        return dispatch(HRupdateRejectPhaseonefailure());
      });
  };

{
  /** Hr Reject phase one user Ends here */
}


// Load particular candidate information for Phase 2 data  filling

export const GetCandidateinforeq = () => {
  return {
    type: types.GETCANDIDATEINFOREQ,
  };
};

export const GetCandidateinfosuceess = (payload) => {
  return {
    type: types.GETCANDIDATEINFOSUCESSS,
    payload,
  };
};

export const GetCandidateinfofail = () => {
  return {
    type: types.GETCANDIDATEINFOFAILURE,
  };
};

export const GetCandidateInfo = (LoggedInEmailID) => (dispatch) => {
  //  console.log("LoggedInEmailID",LoggedInEmailID)
  dispatch(GetCandidateinforeq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/LoadCandidateDataPhaseTwo/${LoggedInEmailID}/`
    )
    .then((res) => {
      return dispatch(GetCandidateinfosuceess(res.data));
    })
    .catch((e) => {
      return dispatch(GetCandidateinfofail());
    });
};


{
  /*********** Second Phase  send data *****************/
}

const SECONDPHASEUPDATEDATAreq = () => {
  return {
    type: types.EMPLOYEEPUTSEONDPHASEPENDING,
  };
};

const SECONDPHASEUPDATEDATAsuccess = (payload) => {
  return {
    type: types.EMPLOYEEPUTSEONDPHASESUCESSS,
    payload,
  };
};

const SECONDPHASEUPDATEDATAfailure = () => {
  return {
    type: types.EMPLOYEEPUTSEONDPHASEFailure,
  };
};

export const Secondphasedetail = (EmpID, payload) => (dispatch) => {
  dispatch(SECONDPHASEUPDATEDATAreq());
  return axios
    .put(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/CandidatePhaseTwoUpdate/${EmpID}/Phase2`,
      payload
    )
    .then((res) => {
      return dispatch(SECONDPHASEUPDATEDATAsuccess(res));
    })
    .catch((e) => {
      return dispatch(SECONDPHASEUPDATEDATAfailure());
    });
};

{
  /*********** Second Phase  send data *****************/
}






// Get employeee documets  for phase one

const Getcandidatedocumentdetailreq = () => {
  return {
    type: types.EMPLOYEEATTACHMENTSTATUSPENDING,
  };
};

const Getcandidatedocumentdetailsuccess = (payload) => {
  return {
    type: types.EMPLOYEEATTACHMENTSTATUSSUCESSS,
    payload,
  };
};

const Getcandidatedocumentdetailfailure = () => {
  return {
    type: types.EMPLOYEEATTACHMENTSTATUSFailure,
  };
};

export const Candidatesdocuments = (CandidateID) => (dispatch) => {
  dispatch(Getcandidatedocumentdetailreq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/JoiningForm/GetFilenamesFromFolder/${CandidateID}/`
    )
    .then((res) => {
      return dispatch(Getcandidatedocumentdetailsuccess(res.data));
    })
    .catch((err) => {
      dispatch(Getcandidatedocumentdetailfailure());
    });
};
