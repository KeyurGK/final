import React, { useEffect, useRef, useState } from "react";
import InputField from "./InputField";
import { ValidateForm } from "./ValidateForm";
import { useDispatch, useSelector } from "react-redux";
import {
  PostEmployeeAttchmentsdetail,
  PostEmployeepersonaldetail,
} from "../../Redux/WebFormReducer/action";
import { ToastContainer, toast } from "react-toastify";
import Joinningmodel from "../../model/Joinningmodel";
import { CandidateStatus } from "../../Redux/EmployeeLandingReducer/action";
import UserPhaseone from "../UserPhaseone/UserPhaseone";
import { CandidatesPrefilldata } from "../../Redux/DocumentsReducer/action";
import { handleKeyPress } from "../customcomponents/Validatehandlekeypress";
import ErrorModal from "../../model/ErrorModal";

const TestWebForm = ({ id, Emailid, setActiveTab }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [joiningformmodel, Setjoiningformmodel] = useState(false);
  const [prefilldisable, setprfilldisabled] = useState(true);
  const [errorm, setErrorm] = useState(null);

  const dispatch = useDispatch();
  const loggeddata = JSON.parse(localStorage.getItem("userlogged"));
  const candidateStatus = useSelector(
    (state) => state.EmployeeLandingReducer.CandidateStatus
  );
  const candidaterefill = useSelector(
    (state) => state.DocumentsReducer.Employeeprefilldata
  );
  const userEmailid = Emailid ? Emailid : loggeddata[0]?.EmailId;
  //  console.log("iddddd",id)
  //  console.log("========userEmailid=========",userEmailid)
  
  useEffect(() => {
    const loggeddata = JSON.parse(localStorage.getItem("userlogged"));
    // dispatch(CandidateStatus(loggeddata[0]?.EmailId));
    // dispatch(CandidatesPrefilldata(loggeddata[0]?.EmailId));
    dispatch(CandidateStatus(userEmailid));
    dispatch(CandidatesPrefilldata(userEmailid));
  }, [userEmailid]);

  const today = new Date().toISOString().split("T")[0];

  //  console.log("candidaterefill",candidaterefill)

  const newdatedata = new Date();
  const formattedToday = `${String(newdatedata.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(newdatedata.getDate()).padStart(
    2,
    "0"
  )}/${newdatedata.getFullYear()}`;

  useEffect(() => {
    if (candidaterefill) {
      setFormData({
        TotalExperienceInMonths: "",
        Yearsexp: "",
        monthexp: "",
        Resume: null,
        profilepic: null,
        Firstname: candidaterefill[0]?.FirstName || "",
        Lastname: candidaterefill[0]?.LastName || "",
        Gender: "",
        DOB: formData.DOB || "",
        // DOB: convertDateFormat(formData.DOB) || "",
        Emailid: candidaterefill[0]?.EmailId || "",
        BloodGroup: "",
        Qualification: "",
        Contactno1: "",
        Contactno2: "",
        FatherName: "",
        EmergencyContactName: "",
        EmergencyContactNo: "",
        PresentAddress: "",
        PermanentAddress: "",
        NameAsPerPAN: "",
        PANNo: "",
        Pancardpic: null,
        NameAsPerAadhar: "",
        AadharNo: "",
        AdhaarPhoto: null,
        UAN: "",
        PFno: "",
        ESIno: "",
        NomineeName: "",
        RelationshipWithNominee: "",
        NameAsPerBank: "",
        BankAccountNo: "",
        IFSCCode: "",
        BankName: "",
        MaritalStatus: "",

        SpouseName: "",
        SpouseDOB: "",
        SpouseGender: "",
        SpouseOccupation: "",
        NameOfChild1: "",
        DOBChild1: "",
        GenderChild1: "",
        NameOfChild2: "",
        DOBChild2: "",
        GenderChild2: "",
        S_Class: "",
        P_Class: "",
        G_Class: "",
        PG_Class: "",
        S_MajorSubject: "",
        P_MajorSubject: "",
        G_MajorSubject: "",
        PG_MajorSubject: "",
        F_ReasonForLeaving: "",
        S_ReasonForLeaving: "",
        T_ReasonForLeaving: "",
        FT_ReasonForLeaving: "",
        S_SchoolName: "",
        S_Location: "",
        S_YearOfPassing: "",
        S_OverallPercent: "",
        S_pic: null,
        P_CollegeName: "",
        P_Location: "",
        P_YearOfPassing: "",
        P_OverallPercent: "",
        P_pic: null,
        G_CollegeName: "",
        G_Location: "",
        G_YearOfPassing: "",
        G_OverallPercent: "",
        G_pic: null,
        PG_CollegeName: "",
        PG_Location: "",
        PG_YearOfPassing: "",
        PG_OverallPercent: "",
        PG_pic: null,
        FT_CompanyName: "",
        FT_Designation: "",
        FT_DOJ: "",
        FT_DOL: "",
        FT_Process: "",
        FT_Salary: "",
        FT_Salary1: null,
        FT_Salary2: null,
        FT_Salary3: null,
        FT_ExperienceLetter: null,
        FT_OfferLetter: null,
        T_CompanyName: "",
        T_Designation: "",
        T_DOJ: "",
        T_DOL: "",
        T_Process: "",
        T_Salary: "",
        T_ExperienceLetter: null,
        T_OfferLetter: null,
        S_CompanyName: "",
        S_Designation: "",
        S_DOJ: "",
        S_DOL: "",
        S_Process: "",
        S_Salary: "",
        S_ExperienceLetter: null,
        S_OfferLetter: null,
        F_CompanyName: "",
        F_Designation: "",
        F_DOJ: "",
        F_DOL: "",
        F_Process: "",
        F_Salary: "",
        F_ExperienceLetter: null,
        F_OfferLetter: null,
        EnteredBy: loggeddata[0]?.EmailId || "",
      });
    }
  }, [candidaterefill]);

  const [formData, setFormData] = useState({
    TotalExperienceInMonths: "",
    Yearsexp: "",
    monthexp: "",
    Resume: null,
    profilepic: null,
    Firstname: candidaterefill[0]?.FirstName || "",
    Lastname: candidaterefill[0]?.LastName || "",
    Gender: "",
    DOB: "",
    Emailid: candidaterefill[0]?.EmailId || "",
    BloodGroup: "",
    Qualification: "",
    Contactno1: "",
    Contactno2: "",
    FatherName: "",
    EmergencyContactName: "",
    EmergencyContactNo: "",
    PresentAddress: "",
    PermanentAddress: "",
    NameAsPerPAN: "",
    PANNo: "",
    Pancardpic: null,
    NameAsPerAadhar: "",
    AadharNo: "",
    AdhaarPhoto: null,
    UAN: "",
    PFno: "",
    ESIno: "",
    NomineeName: "",
    RelationshipWithNominee: "",

    BankName: "",
    NameAsPerBank: "",
    BankAccountNo: "",
    IFSCCode: "",

    MaritalStatus: "",
    SpouseName: "",
    SpouseDOB: "",
    SpouseGender: "",
    SpouseOccupation: "",
    NameOfChild1: "",
    DOBChild1: "",
    GenderChild1: "",
    NameOfChild2: "",
    DOBChild2: "",
    GenderChild2: "",

    S_SchoolName: "",
    S_Location: "",
    S_YearOfPassing: "",
    S_Class: "",
    S_MajorSubject: "",
    S_OverallPercent: "",
    S_pic: null,

    P_CollegeName: "",
    P_Location: "",
    P_YearOfPassing: "",
    P_Class: "",
    P_MajorSubject: "",
    P_OverallPercent: "",
    P_pic: null,

    G_CollegeName: "",
    G_Location: "",
    G_YearOfPassing: "",
    G_Class: "",
    G_MajorSubject: "",
    G_OverallPercent: "",
    G_pic: null,

    PG_CollegeName: "",
    PG_Location: "",
    PG_YearOfPassing: "",
    PG_Class: "",
    PG_MajorSubject: "",
    PG_OverallPercent: "",
    PG_pic: null,

    FT_CompanyName: "",
    FT_Designation: "",
    FT_DOJ: "",
    FT_DOL: "",
    FT_ReasonForLeaving: "",
    FT_Process: "",
    FT_Salary: "",
    FT_Salary1: null,
    FT_Salary2: null,
    FT_Salary3: null,
    FT_ExperienceLetter: null,
    FT_OfferLetter: null,

    T_CompanyName: "",
    T_Designation: "",
    T_DOJ: "",
    T_DOL: "",
    T_ReasonForLeaving: "",
    T_Process: "",
    T_Salary: "",
    T_ExperienceLetter: null,
    T_OfferLetter: null,

    S_CompanyName: "",
    S_Designation: "",
    S_DOJ: "",
    S_DOL: "",
    S_ReasonForLeaving: "",
    S_Process: "",
    S_Salary: "",
    S_ExperienceLetter: null,
    S_OfferLetter: null,

    F_CompanyName: "",
    F_Designation: "",
    F_DOJ: "",
    F_DOL: "",
    F_ReasonForLeaving: "",
    F_Process: "",
    F_Salary: "",
    F_ExperienceLetter: null,
    F_OfferLetter: null,

    EnteredBy: loggeddata[0]?.EmailId || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.startsWith(" ")) {
      return;
    }

    setFormData((prevState) => {
      const updatedState = {
        ...prevState,
        [name]: value,
      };

      // Check if the input name is Yearsexp or monthexp
      if (name === "Yearsexp" || name === "monthexp") {
        const years = parseInt(updatedState.Yearsexp) || 0;
        const months = parseInt(updatedState.monthexp) || 0;
        updatedState.TotalExperienceInMonths = years * 12 + months;
      }

      // Check if the input name is MaritalStatus and if the value is Single
      if (name === "MaritalStatus" && value === "Single") {
        updatedState.SpouseName = "";
        updatedState.SpouseDOB = "";
        updatedState.SpouseGender = "";
        updatedState.SpouseOccupation = "";
        updatedState.NameOfChild1 = "";
        updatedState.DOBChild1 = "";
        updatedState.GenderChild1 = "";
        updatedState.NameOfChild2 = "";
        updatedState.DOBChild2 = "";
        updatedState.GenderChild2 = "";
      }

      return updatedState;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fieldName = e.target.name;
    const maxFileSize = 1 * 1024 * 1024; // 5 MB

    if (file) {
      if (file.size > maxFileSize) {
        // alert("File size exceeds 1 MB.");
        setErrorm("File size exceeds 1 MB.");
        e.target.value = null;
        return;
    }
      const fileExtension = file.name.split(".").pop();
      const fileName = `${fieldName}.${fileExtension}`;

      if (fieldName === "profilepic") {
        if (file.type === "image/jpeg") {
          const renamedFile = new File([file], fileName, { type: file.type });
          setFormData((prevState) => ({
            ...prevState,
            [fieldName]: renamedFile,
          }));
          setErrorm(null);
        } else {
          // alert("Invalid file type. Only JPEG images allowed.");
          setErrorm("Invalid file type. Only JPEG images allowed.");
          e.target.value = null;
        }
      } else {
        if (file.type === "application/pdf") {
          const renamedFile = new File([file], fileName, { type: file.type });

          setFormData((prevState) => ({
            ...prevState,
            [fieldName]: renamedFile,
          }));
          setErrorm(null);
        } else {
          // alert("Invalid file type. Only PDF files allowed.");
          setErrorm("Invalid file type. Only PDF files allowed.");
          e.target.value = null;
        }
      }
    } else {
      // alert("Please select a file.");
      setErrorm("Please select a file.");
    }
  };

  const years = Array.from({ length: 35 }, (_, i) => 1990 + i);
  // console.log("fomdata", formData);

  const attachmentKeys = [
    "profilepic",
    "Pancardpic",
    "Resume",
    "AdhaarPhoto",

    "FT_Salary1",
    "FT_Salary2",
    "FT_Salary3",
    "FT_ExperienceLetter",
    "FT_OfferLetter",

    "T_ExperienceLetter",
    "T_OfferLetter",

    "F_ExperienceLetter",
    "F_OfferLetter",

    "S_ExperienceLetter",
    "S_OfferLetter",

    "S_pic",
    "P_pic",
    "G_pic",
    "PG_pic",
  ];

  const handleSaveData = async (e, isSubmitted = false) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);

    const trimmedFormData = {};

    Object.keys(formData).forEach((key) => {
      trimmedFormData[key] =
        typeof formData[key] === "string"
          ? formData[key].trim()
          : formData[key];
    });

    const formDataValidationErrors = ValidateForm(trimmedFormData);
    setErrors(formDataValidationErrors);
    const attachments = {};
    const otherFormData = {};
    Object.keys(trimmedFormData).forEach((key) => {
      if (attachmentKeys.includes(key)) {
        attachments[key] = trimmedFormData[key];
      } else {
        otherFormData[key] =
          trimmedFormData[key] !== undefined ? trimmedFormData[key] : "";
      }
    });

    console.log(
      "==============formDataValidationErrors=========",
      formDataValidationErrors
    );

    const hasErrors = Object.keys(formDataValidationErrors).length > 0;

    console.log("==========hasErrors=========", hasErrors);
    const nonEmptyFields = Object.keys(otherFormData).filter(
      (key) => otherFormData[key] !== ""
    );

    if (!hasErrors && nonEmptyFields.length === 0) {
      setLoading(false);
      return;
    }

    console.log("=========otherformdata=====", otherFormData);
    console.log("=========attachments==========", attachments);

    if (!hasErrors) {
      if (isSubmitted) {
        try {
          const res = await dispatch(PostEmployeepersonaldetail(otherFormData));

          console.log("==========resdataforemployeedetails=========", res);

          if (
            res?.payload?.data[0].Column1 === "Candidate Details Already Exist"
          ) {
            // toast.error("User Already Exits");
            setErrorm("User Already Exits");
          }
          if (res.payload.data[0]?.TmpRowid) {
            if (Object.keys(attachments).length > 0) {
              const formDataattach = new FormData();
              Object.keys(attachments).forEach((key) => {
                if (attachments[key] !== null) {
                  formDataattach.append(key, attachments[key]);
                }
              });
              try {
                const attachmentRes = await dispatch(
                  PostEmployeeAttchmentsdetail(
                    res?.payload?.data[0]?.TmpRowid,
                    formDataattach
                  )
                );

                console.log(
                  "=======resdataforemployeedetails=========",
                  attachmentRes
                );

                if (attachmentRes?.payload?.data) {
                  Setjoiningformmodel(true);
                  setLoading(false);
                } else {
                  // alert("Attchment not Uploadeddd");
                  setErrorm("Memory limit exceed Connnect with team");
                }
              } catch (attachmentErr) {
                // console.log("Error while sending attachments", attachmentErr);
                setErrorm("Somethings went wrong contact to software team");
              }
            }
          }
        } catch (err) {
          console.log("Error", err);
        }
      }
    }
    // console.log("trimmedFormData",trimmedFormData)
    // console.log("formDataValidationErrors", formDataValidationErrors);
    if (hasErrors) {
      const errorField = Object.keys(formDataValidationErrors)[0];
      const fieldElement = document.querySelector(`[name="${errorField}"]`);
      if (fieldElement) {
        fieldElement.focus();
      }
    }

    setLoading(false);
  };

  const handleFormKeypress = (e) => {
    if (e.key === "Enter") {
      handleSaveData(e, false);
    }
  };

  // console.log("from tese from of Every single user by hr click id", id);

  const hnadleback = () => {
    setActiveTab("applicant segment");
  };

  const handleCloseErrorModal = () => {
    setErrorm(null);
  };

  const myStyle = {
    fontSize: "13px",
  };
  console.log("formdataaa", formData);

  return (
    <div style={myStyle}>
      <div className="w-full text-left bg-slate-300 p-2 relative">
        <h1 className="text-lg font-bold  text-gray-800">First Phase Form</h1>
      </div>
      {!candidateStatus.PHASE1 === "completed" ? (
        <button
          className="bg-slate-800 text-white px-3 py-1 rounded absolute right-[20px] top-[48px]"
          onClick={hnadleback}
        >
          Back
        </button>
      ) : (
        ""
      )}

      {candidateStatus.PHASE1 === "completed" ? (
        <UserPhaseone
          userEmailid={userEmailid}
          id={id}
          setActiveTab={setActiveTab}
        />
      ) : (
        <form
          onKeyPress={handleFormKeypress}
          // onSubmit={handleSaveData}
          onSubmit={(e) => handleSaveData(e, true)}
          className="bg-white px-4 py-2 w-full"
        >
          <h1 className="p-2 flex justify-between items-center bg-gray-100 border border-b-0  border-gray-300 rounded-tl-lg rounded-tr-lg text-[#023f79] text-[14px] font-bold">
            Personal Info
          </h1>
          <div className="border py-2 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <div>
                <label className="flex gap-2" htmlFor={"Yearsexp"}>
                  <span className="flex gap-2 text-start text-[#3B88C8] font-semibold border-s-[2px] border-slate-500 p-0 ps-1 leading-none mb-1">
                    Total Experiance *{" "}
                  </span>

                  {submitted && (
                    <span className="text-red-500 font-bold">
                      {errors.monthexp}
                    </span>
                  )}
                </label>

                <div className="grid grid-cols-4 gap-0">
                  <label className="inline-block bg-gray-100 border rounded-bl-lg rounded-tl-lg p-2">
                    Year
                  </label>
                  <input
                    className="inline-block border p-2 focus:outline-none focus:border-blue-500"
                    type="text"
                    id="years"
                    name="Yearsexp"
                    min="0"
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, "number", 2)}
                  />
                  <label className="inline-block bg-gray-100 border p-2">
                    Month
                  </label>
                  <select
                    className={`"
                          ${
                            formData.monthexp === ""
                              ? "border-2 border-blue-500 "
                              : ""
                          }
                    inline-block border rounded-br-lg rounded-tr-lg p-2 focus:outline-none focus:border-blue-500`}
                    id="months"
                    name="monthexp"
                    value={formData.monthexp}
                    onChange={handleInputChange}
                  >
                    <option value="" className="text-gray-400">
                      Select
                    </option>
                    {[...Array(12).keys()].map((month) => (
                      <option
                        key={month}
                        value={month}
                        className="text-gray-700"
                      >
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <InputField
                label="Resume"
                type="file"
                name="Resume"
                value={formData.Resume}
                onChange={handleFileChange}
                error={submitted && errors.Resume}
              />
              <InputField
                label="Profile Photo"
                type="file"
                name="profilepic"
                value={formData.profilepic}
                onChange={handleFileChange}
                error={submitted && errors.profilepic}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
              <InputField
                label="First Name"
                type="text"
                name="Firstname"
                value={formData.Firstname}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.Firstname}
                disabled={prefilldisable}
              />
              <InputField
                label="Last Name"
                type="text"
                name="Lastname"
                value={formData.Lastname}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.Lastname}
                disabled={prefilldisable}
              />
              <InputField
                label="Gender"
                type="select"
                name="Gender"
                value={formData.Gender}
                onChange={handleInputChange}
                options={["Male", "Female", "Other"]}
                error={submitted && errors.Gender}
              />
              <InputField
                label="DOB"
                type="date"
                name="DOB"
                // value={formatDateForInput(formData.DOB)}
                value={formData.DOB}
                onChange={handleInputChange}
                error={submitted && errors.DOB}
                max={today}
              />

              <InputField
                label="Email Id"
                type="text"
                name="Emailid"
                value={formData.Emailid}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "email", 100)}
                error={submitted && errors.Emailid}
                disabled={prefilldisable}
              />

              <InputField
                label="Blood Group"
                type="select"
                name="BloodGroup"
                value={formData.BloodGroup}
                onChange={handleInputChange}
                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                error={submitted && errors.BloodGroup}
              />
              <InputField
                label="Qualification"
                type="select"
                name="Qualification"
                value={formData.Qualification}
                onChange={handleInputChange}
                options={[
                  "NA",
                  "SSLC",
                  "PUC",
                  "Diploma",
                  "B Com",
                  "BBM",
                  "BA",
                  "B Sc",
                  "BCA",
                  "B Tech",
                  "B E",
                  "MBA",
                  "M Com",
                  "M Tech",
                  "M Sc",
                  "M E",
                  "MCA",
                  "Others",
                  "ICWAI",
                  "B.Pharm",
                  "M.Pharm",
                  "D.Pharm",
                ]}
                error={submitted && errors.Qualification}
              />

              <InputField
                label="Primary Mobile"
                type="text"
                name="Contactno1"
                value={formData.Contactno1}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 10)}
                error={submitted && errors.Contactno1}
              />
              <InputField
                label="Secondry Mobile"
                type="text"
                name="Contactno2"
                value={formData.Contactno2}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 10)}
                error={submitted && errors.Contactno2}
              />
              <InputField
                label="Father's Name"
                type="text"
                name="FatherName"
                value={formData.FatherName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.FatherName}
              />
              <InputField
                label="Emergency Contact Person Name"
                type="text"
                name="EmergencyContactName"
                value={formData.EmergencyContactName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.EmergencyContactName}
              />
              <InputField
                label="Emergency Contact Number"
                type="text"
                name="EmergencyContactNo"
                value={formData.EmergencyContactNo}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 10)}
                error={submitted && errors.EmergencyContactNo}
              />

              <InputField
                label="Present Address"
                type="textarea"
                name="PresentAddress"
                value={formData.PresentAddress}
                onChange={handleInputChange}
                // onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 500)}
                error={submitted && errors.PresentAddress}
              />
              <InputField
                label="Permanent Address"
                type="textarea"
                name="PermanentAddress"
                value={formData.PermanentAddress}
                onChange={handleInputChange}
                // onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 500)}
                error={submitted && errors.PermanentAddress}
              />

              <InputField
                label="Name As per PAN"
                type="text"
                name="NameAsPerPAN"
                value={formData.NameAsPerPAN}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.NameAsPerPAN}
              />

              <InputField
                label="Pan Number"
                type="text"
                name="PANNo"
                value={formData.PANNo}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 10)}
                error={submitted && errors.PANNo}
                clsclass={"uppercase"}
              />
              <InputField
                label="Pan "
                type="file"
                name="Pancardpic"
                value={formData.Pancardpic}
                onChange={handleFileChange}
                error={submitted && errors.Pancardpic}
              />
              <InputField
                label="Name as per Aadhar"
                type="text"
                name="NameAsPerAadhar"
                value={formData.NameAsPerAadhar}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 100)}
                error={submitted && errors.NameAsPerAadhar}
              />
              <InputField
                label="Aadhar Number"
                type="text"
                name="AadharNo"
                value={formData.AadharNo}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 12)}
                error={submitted && errors.AadharNo}
              />

              <InputField
                label="Adhaar "
                type="file"
                name="AdhaarPhoto"
                value={formData.AdhaarPhoto}
                onChange={handleFileChange}
                error={submitted && errors.AdhaarPhoto}
              />

              <InputField
                label="PF No"
                type="text"
                name="PFno"
                value={formData.PFno}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 50)}
                // error={submitted && errors.PFno}
              />
              <InputField
                label="UAN"
                type="text"
                name="UAN"
                value={formData.UAN}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 25)}
              />
              <InputField
                label="ESIno"
                type="text"
                name="ESIno"
                value={formData.ESIno}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 50)}
              />
              <InputField
                label="Nominee Name"
                type="text"
                name="NomineeName"
                value={formData.NomineeName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 100)}
                error={submitted && errors.NomineeName}
              />

              <InputField
                label="Relationship with Nominee"
                type="text"
                name="RelationshipWithNominee"
                value={formData.RelationshipWithNominee}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.RelationshipWithNominee}
              />

              {/*  */}

              <InputField
                label="Bank Name"
                type="text"
                name="BankName"
                value={formData.BankName}
                onChange={handleInputChange}
              />

              <InputField
                label="Name As per bank "
                type="text"
                name="NameAsPerBank"
                value={formData.NameAsPerBank}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.NameAsPerBank}
              />

              <InputField
                label="Bank A/C (Number)"
                type="text"
                name="BankAccountNo"
                value={formData.BankAccountNo}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 50)}
                error={submitted && errors.BankAccountNo}
              />

              <InputField
                label="IFSC Code"
                type="text"
                name="IFSCCode"
                value={formData.IFSCCode}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 50)}
                error={submitted && errors.IFSCCode}
              />

              {/* Spouse and children details */}

              <InputField
                label="Marital Status"
                type="select"
                name="MaritalStatus"
                value={formData.MaritalStatus}
                onChange={handleInputChange}
                options={["Married", "Single"]}
                error={submitted && errors.MaritalStatus}
              />

              {formData.MaritalStatus === "Married" && (
                <>
                  <InputField
                    label="Spouse Name"
                    type="text"
                    name="SpouseName"
                    value={formData.SpouseName}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, "text", 100)}
                    error={submitted && errors.SpouseName}
                  />

                  <InputField
                    label="Spouse DOB"
                    type="date"
                    name="SpouseDOB"
                    value={formData.SpouseDOB}
                    onChange={handleInputChange}
                    error={submitted && errors.SpouseDOB}
                    max={today}
                  />
                  <InputField
                    label="Spouse Gender"
                    type="select"
                    name="SpouseGender"
                    value={formData.SpouseGender}
                    onChange={handleInputChange}
                    options={["Male", "Female", "other"]}
                    error={submitted && errors.SpouseGender}
                  />

                  <InputField
                    label="Spouse Occupation"
                    type="text"
                    name="SpouseOccupation"
                    value={formData.SpouseOccupation}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, "text", 100)}
                    error={submitted && errors.SpouseOccupation}
                  />

                  {/* Children details if Have */}
                  <InputField
                    label="Name Of Child 1"
                    type="text"
                    name="NameOfChild1"
                    value={formData.NameOfChild1}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, "text", 100)}
                    error={submitted && errors.NameOfChild1}
                  />

                  <InputField
                    label="DOB  Child 1"
                    type="date"
                    name="DOBChild1"
                    value={formData.DOBChild1}
                    onChange={handleInputChange}
                    error={submitted && errors.DOBChild1}
                    max={today}
                  />
                  <InputField
                    label="Gender  Child 1"
                    type="select"
                    name="GenderChild1"
                    value={formData.GenderChild1}
                    onChange={handleInputChange}
                    options={["Male", "Female", "other"]}
                    error={submitted && errors.GenderChild1}
                  />

                  <InputField
                    label="Name Of Child 2"
                    type="text"
                    name="NameOfChild2"
                    value={formData.NameOfChild2}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, "text", 100)}
                    error={submitted && errors.NameOfChild2}
                  />

                  <InputField
                    label="DOB  Child 2"
                    type="date"
                    name="DOBChild2"
                    value={formData.DOBChild2}
                    onChange={handleInputChange}
                    error={submitted && errors.DOBChild2}
                    max={today}
                  />
                  <InputField
                    label="Gender  Child 2"
                    type="select"
                    name="GenderChild2"
                    value={formData.GenderChild2}
                    onChange={handleInputChange}
                    options={["Male", "Female", "other"]}
                    error={submitted && errors.GenderChild2}
                  />
                </>
              )}
            </div>
          </div>

          <h1 className="p-2 mt-2 bg-gray-100 border border-b-0  border-gray-300 rounded-tl-lg rounded-tr-lg text-[#023f79] text-[14px] font-bold">
            Educational Details
          </h1>

          <div className="border py-2 px-4">
            <h1 className="text-start border-l-4 border-blue-950 bg-slate-50 font-semibold  text-[#023f79] p-2">
              SSLC / 10th
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <InputField
                label="School Name"
                type="text"
                name="S_SchoolName"
                value={formData.S_SchoolName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 100)}
                error={submitted && errors.S_SchoolName}
              />
              <InputField
                label="School Location"
                type="text"
                name="S_Location"
                value={formData.S_Location}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.S_Location}
              />
              <InputField
                label="Year of Passing"
                type="select"
                name="S_YearOfPassing"
                value={formData.S_YearOfPassing}
                onChange={handleInputChange}
                options={years}
                error={submitted && errors.S_YearOfPassing}
              />
              <InputField
                label="Class/Rank"
                type="text"
                name="S_Class"
                value={formData.S_Class}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.S_Class}
              />
              <InputField
                label="Major Subject"
                type="text"
                name="S_MajorSubject"
                value={formData.S_MajorSubject}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.S_MajorSubject}
              />

              <InputField
                label="Overall % of Marks"
                type="text"
                name="S_OverallPercent"
                value={formData.S_OverallPercent}
                onChange={handleInputChange}
                error={submitted && errors.S_OverallPercent}
                onKeyPress={(e) => handleKeyPress(e, "percent", 6)}
              />
              <InputField
                label="10th Completion Certificate"
                type="file"
                name="S_pic"
                value={formData.S_pic}
                onChange={handleFileChange}
                error={submitted && errors.S_pic}
              />
            </div>

            <h1 className="text-start border-l-4 border-blue-950 bg-slate-50 font-semibold  text-[#023f79] p-2 mt-4">
              PUC /Diploma /12th
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <InputField
                label="College Name"
                type="text"
                name="P_CollegeName"
                value={formData.P_CollegeName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.P_CollegeName}
              />
              <InputField
                label="College  Location"
                type="text"
                name="P_Location"
                value={formData.P_Location}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.P_Location}
              />
              <InputField
                label="Year of Passing"
                type="select"
                name="P_YearOfPassing"
                value={formData.P_YearOfPassing}
                onChange={handleInputChange}
                options={years}
                error={submitted && errors.P_YearOfPassing}
              />
              <InputField
                label="Class/Rank"
                type="text"
                name="P_Class"
                value={formData.P_Class}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.P_Class}
              />
              <InputField
                label="Major Subject"
                type="text"
                name="P_MajorSubject"
                value={formData.P_MajorSubject}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.P_MajorSubject}
              />
              <InputField
                label="Overall % of Marks"
                type="text"
                name="P_OverallPercent"
                value={formData.P_OverallPercent}
                onChange={handleInputChange}
                error={submitted && errors.P_OverallPercent}
                onKeyPress={(e) => handleKeyPress(e, "percent", 6)}
              />
              <InputField
                label="12th Completion Certificate"
                type="file"
                name="P_pic"
                value={formData.P_pic}
                onChange={handleFileChange}
                error={submitted && errors.P_pic}
              />
            </div>

            <h1 className="text-start border-l-4 border-blue-950 bg-slate-50 font-semibold  text-[#023f79] p-2 mt-4">
              Graduation
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <InputField
                label="College Name"
                type="text"
                name="G_CollegeName"
                value={formData.G_CollegeName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.G_CollegeName}
              />
              <InputField
                label="College  Location"
                type="text"
                name="G_Location"
                value={formData.G_Location}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.G_Location}
              />
              <InputField
                label="Year of Passing"
                type="select"
                name="G_YearOfPassing"
                value={formData.G_YearOfPassing}
                onChange={handleInputChange}
                options={years}
                error={submitted && errors.G_YearOfPassing}
              />
              <InputField
                label="Class/Rank"
                type="text"
                name="G_Class"
                value={formData.G_Class}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.G_Class}
              />
              <InputField
                label="Major Subject"
                type="text"
                name="G_MajorSubject"
                value={formData.G_MajorSubject}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.G_MajorSubject}
              />
              <InputField
                label="Overall % of Marks"
                type="text"
                name="G_OverallPercent"
                value={formData.G_OverallPercent}
                onChange={handleInputChange}
                error={submitted && errors.G_OverallPercent}
                onKeyPress={(e) => handleKeyPress(e, "percent", 6)}
              />
              <InputField
                label="Completion Certificate"
                type="file"
                name="G_pic"
                value={formData.G_pic}
                onChange={handleFileChange}
                error={submitted && errors.G_pic}
              />
            </div>

            <h1 className="text-start border-l-4 border-blue-950 bg-slate-50 font-semibold  text-[#023f79] p-2 mt-4">
              Post Graduation
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <InputField
                label="College Name"
                type="text"
                name="PG_CollegeName"
                value={formData.PG_CollegeName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.PG_CollegeName}
              />
              <InputField
                label="College  Location"
                type="text"
                name="PG_Location"
                value={formData.PG_Location}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.PG_Location}
              />
              <InputField
                label="Year of Passing"
                type="select"
                name="PG_YearOfPassing"
                value={formData.PG_YearOfPassing}
                onChange={handleInputChange}
                options={years}
                error={submitted && errors.PG_YearOfPassing}
              />
              <InputField
                label="Class/Rank"
                type="text"
                name="PG_Class"
                value={formData.PG_Class}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.PG_Class}
              />
              <InputField
                label="Major Subject"
                type="text"
                name="PG_MajorSubject"
                value={formData.PG_MajorSubject}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.PG_MajorSubject}
              />
              <InputField
                label="Overall % of Marks"
                type="text"
                name="PG_OverallPercent"
                value={formData.PG_OverallPercent}
                onChange={handleInputChange}
                error={submitted && errors.PG_OverallPercent}
                onKeyPress={(e) => handleKeyPress(e, "percent", 6)}
              />
              <InputField
                label="Completion Certificate"
                type="file"
                name="PG_pic"
                value={formData.PG_pic}
                onChange={handleFileChange}
                error={submitted && errors.PG_pic}
              />
            </div>
          </div>

          <h1 className="p-2 mt-2 bg-gray-100 border border-b-0  border-gray-300 rounded-tl-lg rounded-tr-lg text-[#023f79] text-[14px] font-bold">
            Previous Company Details{" "}
            <span className="text-red-600">
              (Enter the last four company details in chronological order, from
              earliest to most recent. )
            </span>
          </h1>

          {/*  */}

          <div className="border py-2 px-4">
            <h1 className="text-start border-l-4 border-blue-950 bg-slate-50 font-semibold  text-[#023f79] p-2">
              Most Recent Company
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <InputField
                label="Company Name"
                type="text"
                name="FT_CompanyName"
                value={formData.FT_CompanyName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.FT_CompanyName}
              />
              <InputField
                label="Designation"
                type="text"
                name="FT_Designation"
                value={formData.FT_Designation}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.FT_Designation}
              />
              <InputField
                label="Date of Joining"
                type="date"
                name="FT_DOJ"
                value={formData.FT_DOJ}
                onChange={handleInputChange}
                error={submitted && errors.FT_DOJ}
                max={today}
              />
              <InputField
                label="Date of Leaving"
                type="date"
                name="FT_DOL"
                value={formData.FT_DOL}
                onChange={handleInputChange}
                error={submitted && errors.FT_DOL}
                max={today}
              />
              <InputField
                label="Reason For Leaving"
                type="textarea"
                name="FT_ReasonForLeaving"
                value={formData.FT_ReasonForLeaving}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "none", 100)}
                error={submitted && errors.FT_ReasonForLeaving}
              />
              <InputField
                label="Process"
                type="text"
                name="FT_Process"
                value={formData.FT_Process}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.FT_Process}
              />
              <InputField
                label="salary (Per Annum)"
                type="text"
                name="FT_Salary"
                value={formData.FT_Salary}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 10)}
                error={submitted && errors.FT_Salary}
              />
              <InputField
                label="Salary Slips1 "
                type="file"
                name="FT_Salary1"
                value={formData.FT_Salary1}
                onChange={handleFileChange}
                error={submitted && errors.FT_Salary1}
              />
              <InputField
                label="Salary Slips2 "
                type="file"
                name="FT_Salary2"
                value={formData.FT_Salary2}
                onChange={handleFileChange}
                error={submitted && errors.FT_Salary2}
              />
              <InputField
                label="Salary Slips3 "
                type="file"
                name="FT_Salary3"
                value={formData.FT_Salary3}
                onChange={handleFileChange}
                error={submitted && errors.FT_Salary3}
              />

              <InputField
                label="Experience Letter / Relieving Letter"
                type="file"
                name="FT_ExperienceLetter"
                value={formData.FT_ExperienceLetter}
                onChange={handleFileChange}
                error={submitted && errors.FT_ExperienceLetter}
              />
              <InputField
                label="Offer Letter"
                type="file"
                name="FT_OfferLetter"
                value={formData.FT_OfferLetter}
                onChange={handleFileChange}
                error={submitted && errors.FT_OfferLetter}
              />
            </div>

            <h1 className="text-start border-l-4 border-blue-950 bg-slate-50 font-semibold  text-[#023f79] p-2 mt-4">
              Second last Company
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <InputField
                label="Company Name"
                type="text"
                name="T_CompanyName"
                value={formData.T_CompanyName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.T_CompanyName}
              />
              <InputField
                label="Designation"
                type="text"
                name="T_Designation"
                value={formData.T_Designation}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.T_Designation}
              />
              <InputField
                label="Date of Joining"
                type="date"
                name="T_DOJ"
                value={formData.T_DOJ}
                onChange={handleInputChange}
                error={submitted && errors.T_DOJ}
                max={today}
              />
              <InputField
                label="Date of Leaving"
                type="date"
                name="T_DOL"
                value={formData.T_DOL}
                onChange={handleInputChange}
                error={submitted && errors.T_DOL}
                max={today}
              />
              <InputField
                label="Reason For Leaving"
                type="textarea"
                name="T_ReasonForLeaving"
                value={formData.T_ReasonForLeaving}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "none", 100)}
                error={submitted && errors.T_ReasonForLeaving}
              />
              <InputField
                label="Process"
                type="text"
                name="T_Process"
                value={formData.T_Process}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.T_Process}
              />
              <InputField
                label="salary (Per Annum)"
                type="text"
                name="T_Salary"
                value={formData.T_Salary}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 10)}
                error={submitted && errors.T_Salary}
              />

              <InputField
                label="Experience Letter / Relieving Letter"
                type="file"
                name="T_ExperienceLetter"
                value={formData.T_ExperienceLetter}
                onChange={handleFileChange}
                error={submitted && errors.T_ExperienceLetter}
              />
              <InputField
                label="Offer Letter"
                type="file"
                name="T_OfferLetter"
                value={formData.T_OfferLetter}
                onChange={handleFileChange}
                error={submitted && errors.T_OfferLetter}
              />
            </div>
            <h1 className="text-start border-l-4 border-blue-950 bg-slate-50 font-semibold  text-[#023f79] p-2 mt-4">
              Third last Company
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <InputField
                label="Company Name"
                type="text"
                name="S_CompanyName"
                value={formData.S_CompanyName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.S_CompanyName}
              />
              <InputField
                label="Designation"
                type="text"
                name="S_Designation"
                value={formData.S_Designation}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.S_Designation}
              />
              <InputField
                label="Date of Joining"
                type="date"
                name="S_DOJ"
                value={formData.S_DOJ}
                onChange={handleInputChange}
                error={submitted && errors.S_DOJ}
                max={today}
              />
              <InputField
                label="Date of Leaving"
                type="date"
                name="S_DOL"
                value={formData.S_DOL}
                onChange={handleInputChange}
                error={submitted && errors.S_DOL}
                max={today}
              />
              <InputField
                label="Reason For Leaving"
                type="textarea"
                name="S_ReasonForLeaving"
                value={formData.S_ReasonForLeaving}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "none", 100)}
                error={submitted && errors.S_ReasonForLeaving}
              />
              <InputField
                label="Process"
                type="text"
                name="S_Process"
                value={formData.S_Process}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.S_Process}
              />
              <InputField
                label="salary (Per Annum)"
                type="text"
                name="S_Salary"
                value={formData.S_Salary}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 10)}
                error={submitted && errors.S_Salary}
              />
              <InputField
                label="Experience Letter / Relieving Letter"
                type="file"
                name="S_ExperienceLetter"
                value={formData.S_ExperienceLetter}
                onChange={handleFileChange}
                error={submitted && errors.S_ExperienceLetter}
              />
              <InputField
                label="Offer Letter"
                type="file"
                name="S_OfferLetter"
                value={formData.S_OfferLetter}
                onChange={handleFileChange}
                error={submitted && errors.S_OfferLetter}
              />
            </div>

            <h1 className="text-start border-l-4 border-blue-950 bg-slate-50 font-semibold  text-[#023f79] p-2 mt-4">
              First last Company
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
              <InputField
                label="Company Name"
                type="text"
                name="F_CompanyName"
                value={formData.F_CompanyName}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.F_CompanyName}
              />
              <InputField
                label="Designation"
                type="text"
                name="F_Designation"
                value={formData.F_Designation}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.F_Designation}
              />
              <InputField
                label="Date of Joining"
                type="date"
                name="F_DOJ"
                value={formData.F_DOJ}
                onChange={handleInputChange}
                error={submitted && errors.F_DOJ}
                max={today}
              />
              <InputField
                label="Date of Leaving"
                type="date"
                name="F_DOL"
                value={formData.F_DOL}
                onChange={handleInputChange}
                error={submitted && errors.F_DOL}
                max={today}
              />
              <InputField
                label="Reason For Leaving"
                type="textarea"
                name="F_ReasonForLeaving"
                value={formData.F_ReasonForLeaving}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "none", 100)}
                error={submitted && errors.F_ReasonForLeaving}
              />
              <InputField
                label="Process"
                type="text"
                name="F_Process"
                value={formData.F_Process}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "text", 50)}
                error={submitted && errors.F_Process}
              />
              <InputField
                label="salary (Per Annum)"
                type="text"
                name="F_Salary"
                value={formData.F_Salary}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e, "number", 10)}
                error={submitted && errors.F_Salary}
              />
              <InputField
                label="Experience Letter / Relieving Letter"
                type="file"
                name="F_ExperienceLetter"
                value={formData.F_ExperienceLetter}
                onChange={handleFileChange}
                error={submitted && errors.F_ExperienceLetter}
              />
              <InputField
                label="Offer Letter"
                type="file"
                name="F_OfferLetter"
                value={formData.F_OfferLetter}
                onChange={handleFileChange}
                error={submitted && errors.F_OfferLetter}
              />
            </div>
          </div>
          {/*  Submit Button */}

          {loading && (
            <div
              className="fixed inset-0 flex items-center justify-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014.022 7.02L2.278 8.764l1.414 1.414 1.286-1.286A5.5 5.5 0 1010.5 17.5h-2.002zm2-10.582A8.006 8.006 0 0117.02 4.02L15.276 2.276A9.957 9.957 0 0012 2C6.486 2 2 6.486 2 12h4zm8 2.582A8.004 8.004 0 0119.978 16.98L21.722 15.24l-1.414-1.414-1.286 1.286a5.5 5.5 0 10-6.64-8.828l-1.287 1.286 1.414 1.414 1.25-1.25a8.001 8.001 0 017.748 10.496L19 21.016A9.956 9.956 0 0012 22c5.514 0 10-4.486 10-10h-4z"
                ></path>
              </svg>
            </div>
          )}

          <div className="px-4 py-2 w-[100%] border border-gray-300 rounded-bl-lg rounded-br-lg flex justify-center">
            <button
              className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
              type="submit"

              // disabled={loading}
            >
              {/* {loading ? "Submitting..." : "Submit"} */}
              Submit
            </button>
          </div>
        </form>
      )}

      <ToastContainer />

      {joiningformmodel && <Joinningmodel setActiveTab={setActiveTab} />}

      {errorm && <ErrorModal msg={errorm} onClose={handleCloseErrorModal} />}
    </div>
  );
};

export default TestWebForm;
