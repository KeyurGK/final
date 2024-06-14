import axios from "axios";
import * as types from "./actiotypes";

// Load particular candidate Ndas Known details

const NdagetReq = () => {
  return {
    type: types.NDAFORMGETREQ,
  };
};

const NdagetSucess = (payload) => {
  return {
    type: types.NDAFORMGETSUCCESS,
    payload,
  };
};

const NdagetFail = () => {
  return {
    type: types.NDAFORMGETFAILURE,
  };
};

export const Getndaknown = (EmpID) => (dispatch) => {
  // console.log("errr",EmpID)
  dispatch(NdagetReq());
  return axios
    .get(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/NDA/PreFillNDAForm/${EmpID}/`
    )
    .then((res) => {
      return dispatch(NdagetSucess(res.data));
    })
    .catch((err) => {
      dispatch(NdagetFail());
    });
};

// 




// Update particular candidate Ndas Known details

const NdaputReq = () => {
  return {
    type: types.NDAFORMPUTREQ,
  };
};

const NdaputSucess = (payload) => {
  return {
    type: types.NDAFORMPUTSUCCESS,
    payload,
  };
};

const NdaputFail = () => {
  return {
    type: types.NDAFORMPUTFAILURE,
  };
};

export const PUTndaform = (param,payload) => (dispatch) => {
      
  dispatch(NdaputReq());
  return axios
    .put(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/${param}`,
      payload
    )
    .then((res) => {
      return dispatch(NdaputSucess(res));
    })
    .catch((err) => {
     return dispatch(NdaputFail(err));
    });
};




// For Attchment api second phase for user 



const NdaacttachmentReq = () => {
  return {
    type: types.NDAATTACHMENTREQ,
  };
};

const NdaacttachmentSucess = (payload) => {
  return {
    type: types.NDAATTACHMENTSUCCESS,
    payload,
  };
};

const NdaacttachmentFail = () => {
  return {
    type: types.NDAATTACHMENTFAILURE,
  };
};

export const Attachmentsendtobackend = (EmpId, payload) => (dispatch) => {
  console.log("========EmpId=====",EmpId)
  dispatch(NdaacttachmentReq());

  return axios
    .post(
      `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/NDA/uploadAttachments/${EmpId}`,
      payload
    )
    .then((res) => {
      return dispatch(NdaacttachmentSucess(res));
    })
    .catch((err) => {
      dispatch(NdaacttachmentFail());
    });
};