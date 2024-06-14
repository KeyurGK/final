import React, { useEffect, useRef, useState } from "react";
import "./DeclarationForm.css";
import EPFOLogo from "./images/EPFO_Logo.png";
import {
  Attachmentsendtobackend,
  PUTndaform,
} from "../../../Redux/NdaDocumentReducer/action";
import html2pdf from "html2pdf.js";
import { useDispatch, useSelector } from "react-redux";
import SignatureNewModal from "../../../model/Signmodel";
import { GetCandidateInfo } from "../../../Redux/WebFormReducer/action";
import { handleKeyPress } from "../../customcomponents/Validatehandlekeypress";
import { GetCandidatedecalartion } from "../../../Redux/UserIDReducer/action";

export default function DeclarationForm() {
  const Candidateinfo = useSelector(
    (state) => state.WebFormReducer.Candidateinfo
  );
  const dispatch = useDispatch();
  const [combinedName, setCombinedName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailId, setEmailId] = useState("");
  const [uan, setUan] = useState("");
  const [dateOfExit, setDateOfExit] = useState("");
  const [schemeCertificate, setSchemeCertificate] = useState("");
  const [ppoNumber, setppoNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [passportStartDate, setPassportStartDate] = useState("");
  const [passportEndDate, setPassportEndDate] = useState("");
  const [memberSignature, setMemberSignature] = useState(null);
  const [employerSignature, setEmployerSignature] = useState(null);
  const [data, SetData] = useState("");
  const [employeeSignatureData, setEmployeeSignatureData] = useState(null);
  const [employerSignatureData, setEmployerSignatureData] = useState(null);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [signatureData, setSignatureData] = useState(null);
  const [TextData, setTextData] = useState(null);
  const [employerTextData, setEmployerTextData] = useState(null);
  const [employerDate, setEmployerDate] = useState("");
  const [editableEmployerDate, setEditableEmployerDate] = useState(false);
  const [signatureType, setSignatureType] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [approved, setApproved] = useState(false);
  const [approvedWithDSC, setApprovedWithDSC] = useState(false);
  const [isKycDetailsApproved, setIsKycDetailsApproved] = useState(false);
  const [isDscRegistered, setIsDscRegistered] = useState(false);
  const loggeddata = JSON.parse(localStorage.getItem("userlogged"));
  const Declartiondata = useSelector(
    (state) => state.UserIDReducer.Declartiondata
  );
  const userEmpId = loggeddata[0]?.EmailId;

  useEffect(() => {
    dispatch(GetCandidateInfo(userEmpId));
  }, [userEmpId]);

  const handleBlur = () => {
    setEditablePpo(false);
    setEditableScheme(false);
    setEditablePassport(false);
  };
  const handleEdit = (field) => {
    if (field === "ppoNumber") {
      setEditablePpo(true);
    } else if (field === "schemeCertificate") {
      setEditableScheme(true);
    } else if (field === "passportNumber") {
      setEditablePassport(true);
    } else if (field === "date") {
      setEditableEmployerDate(true);
    }
  };

  const handleInputChange_1 = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedCombinedName = combinedName.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedCombinedName.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedCombinedName[index] = value;
    }

    // Update combinedName state
    setCombinedName(updatedCombinedName.join(""));
  };
  const handleInputChange_2 = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedDateOfBirth = dateOfBirth.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedDateOfBirth.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedDateOfBirth[index] = value;
    }

    // Update combinedName state
    setDateOfBirth(updatedDateOfBirth.join("")); // Join the array back to a string and update combinedName state
  };

  const handleInputChange_3 = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedFatherName = fatherName.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedFatherName.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedFatherName[index] = value;
    }

    // Update combinedName state
    setFatherName(updatedFatherName.join("")); // Join the array back to a string and update combinedName state
  };

  const handleInputChange_6 = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedMobile = mobile.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedMobile.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedMobile[index] = value;
    }

    // Update combinedName state
    setMobile(updatedMobile.join("")); // Join the array back to a string and update combinedName state
  };

  const handleInputChange_7 = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedEmailId = emailId.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedEmailId.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedEmailId[index] = value;
    }

    // Update combinedName state
    setEmailId(updatedEmailId.join("")); // Join the array back to a string and update combinedName state
  };
  const handleInputChange_uan = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedUan = uan.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedUan.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedUan[index] = value;
    }

    // Update combinedName state
    setUan(updatedUan.join("")); // Join the array back to a string and update combinedName state
  };
  const handleInputChange_dateOfExit = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedDateOfExit = dateOfExit.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedDateOfExit.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedDateOfExit[index] = value;
    }

    // Update combinedName state
    setDateOfExit(updatedDateOfExit.join("")); // Join the array back to a string and update combinedName state
  };
  const handleInputChange_passportStartDate = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedPassportStartDate = passportStartDate.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedPassportStartDate.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedPassportStartDate[index] = value;
    }

    // Update combinedName state
    setPassportStartDate(updatedPassportStartDate.join("")); // Join the array back to a string and update combinedName state
  };
  const handleInputChange_passportEndDate = (event, index) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    const keyCode = event.keyCode || event.which; // Get the keyCode for the pressed key
    let updatedPassportEndDate = passportEndDate.split(""); // Convert combinedName to an array
    const rowIndex = Math.floor(index / 26); // Calculate rowIndex from index
    const colIndex = index % 26; // Calculate colIndex from index

    // Check if backspace key is pressed
    if (keyCode === 8 || keyCode === 46) {
      // If backspace is pressed, remove the character at the current index
      updatedPassportEndDate.splice(index, 1);
    } else {
      // Update the value at the specified index
      updatedPassportEndDate[index] = value;
    }

    // Update combinedName state
    setPassportEndDate(updatedPassportEndDate.join("")); // Join the array back to a string and update combinedName state
  };
  // Define handleArrowKeyPress function outside of generateInputs_1 and generateInputs_2
  const handleArrowKeyPress = (event, rowIndex, colIndex) => {
    const currentRowInputs =
      event.currentTarget.parentNode.parentNode.getElementsByTagName("input");
    const currentIndex = rowIndex * 10 + colIndex;

    if (event.key === "ArrowLeft") {
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        currentRowInputs[prevIndex].focus();
      }
    } else if (event.key === "ArrowRight") {
      const nextIndex = currentIndex + 1;
      if (nextIndex < currentRowInputs.length) {
        currentRowInputs[nextIndex].focus();
      }
    }
  };

 
  const handleInputFocus = (event, rowIndex, colIndex) => {
    const input = event.target;
    const maxLength = parseInt(input.maxLength);
    if (input.value.length >= maxLength && colIndex < 25) {
      const nextInput = input.parentNode.nextSibling.querySelector("input");
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  // generateInputs_1 function with handleArrowKeyPress as argument
  const generateInputs_1 = () => {
    const inputs = [];
    for (let i = 0; i < 3; i++) {
      const rowInputs = [];
      for (let j = 0; j < 26; j++) {
        const index = i * 26 + j;
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              maxLength="1"
              value={combinedName[index] || ""} // Display value from state
              onChange={(event) => handleInputChange_1(event, index)}
              onInput={(event) => handleInputFocus(event, i, j)}
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)}
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };

  // generateInputs_2 function with handleArrowKeyPress as argument
  const generateInputs_2 = () => {
    const inputs = [];
    for (let i = 0; i < 1; i++) {
      const rowInputs = [];
      for (let j = 0; j < 8; j++) {
        const index = i * 8 + j;
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              onKeyPress={(e) => handleKeyPress(e, "number", 10)}
              value={dateOfBirth[index] || ""}
              onInput={(event) => {
                event.target.value = Math.max(0, parseInt(event.target.value))
                  .toString()
                  .slice(0, 1);
                handleInputFocus(event, i, j);
              }}
              onChange={(event) => handleInputChange_2(event, index)}
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)}
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };
  const generateInputs_3 = () => {
    const inputs = [];
    for (let i = 0; i < 3; i++) {
      // Adjust the loop for the number of rows you need
      const rowInputs = [];
      for (let j = 0; j <= 25; j++) {
        // Adjust the loop for the number of columns you need
        const index = i * 25 + j;
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              maxLength="1"
              value={fatherName[index] || ""} // Display value from state
              onChange={(event) => handleInputChange_3(event, index)}
              onInput={(event) => handleInputFocus(event, i, j)}
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)} // Calculate index based on row and column
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };

  const generateInputs_6 = () => {
    const inputs = [];
    for (let i = 0; i < 1; i++) {
      // Adjust the loop for the number of rows you need
      const rowInputs = [];
      for (let j = 0; j < 10; j++) {
        // Adjust the loop for the number of columns you need
        const index = i * 10 + j;
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              maxLength="1"
              value={mobile[index] || ""}
              onKeyPress={(e) => handleKeyPress(e, "number", 10)}
              onInput={(event) => handleInputFocus(event, i, j)}
              onChange={(event) => handleInputChange_6(event, index)}
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)} // Calculate index based on row and column
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };
  const generateInputs_7 = () => {
    const inputs = [];
    for (let i = 0; i < 3; i++) {
      // Adjust the loop for the number of rows you need
      const rowInputs = [];
      for (let j = 0; j <= 25; j++) {
        const index = i * 25 + j;
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              maxLength="1"
              value={emailId[index] || ""}
              onChange={(event) => handleInputChange_7(event, index)}
              onInput={(event) => handleInputFocus(event, i, j)}
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)} // Calculate index based on row and column
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };
  const generateInputs_uan = () => {
    const inputs = [];
    for (let i = 0; i < 1; i++) {
      // Adjust the loop for the number of rows you need
      const rowInputs = [];
      for (let j = 0; j < 12; j++) {
        // Adjust the loop for the number of columns you need
        const index = i * 12 + j;
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              maxLength="1"
              value={uan[index] || ""}
              onKeyPress={(e) => handleKeyPress(e, "number", 10)}
              onChange={(event) => handleInputChange_uan(event, index)}
              onInput={(event) => handleInputFocus(event, i, j)}
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)} // Calculate index based on row and column
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };
  const generateInputs_dateOfExit = () => {
    const inputs = [];
    for (let i = 0; i < 1; i++) {
      // Adjust the loop for the number of rows you need
      const rowInputs = [];
      for (let j = 0; j < 8; j++) {
        const index = i * 8 + j;
        // Adjust the loop for the number of columns you need
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              maxLength="1"
              onKeyPress={(e) => handleKeyPress(e, "number", 10)}
              value={dateOfExit[index] || ""}
              onInput={(event) => handleInputFocus(event, i, j)}
              onChange={(event) => handleInputChange_dateOfExit(event, index)} // Calculate index based on row and column
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)}
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };
  const generateInputs_passportStartDate = () => {
    const inputs = [];
    for (let i = 0; i < 1; i++) {
      // Adjust the loop for the number of rows you need
      const rowInputs = [];
      for (let j = 0; j < 8; j++) {
        const index = i * 8 + j;
        // Adjust the loop for the number of columns you need
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              maxLength="1"
              value={passportStartDate[index] || ""}
              onKeyPress={(e) => handleKeyPress(e, "number", 50)}
              onInput={(event) => handleInputFocus(event, i, j)}
              onChange={(event) =>
                handleInputChange_passportStartDate(event, index)
              } // Calculate index based on row and column
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)}
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };
  const generateInputs_passportEndDate = () => {
    const inputs = [];
    for (let i = 0; i < 1; i++) {
      // Adjust the loop for the number of rows you need
      const rowInputs = [];
      for (let j = 0; j < 8; j++) {
        // Adjust the loop for the number of columns you need
        const index = i * 8 + j;
        rowInputs.push(
          <td key={j}>
            <input
              type="text"
              maxLength="1"
              value={passportEndDate[index] || ""}
              onKeyPress={(e) => handleKeyPress(e, "number", 50)}
              onInput={(event) => handleInputFocus(event, i, j)}
              onChange={(event) =>
                handleInputChange_passportEndDate(event, index)
              } // Calculate index based on row and column
              onKeyDown={(event) => handleArrowKeyPress(event, i, j)}
            />
          </td>
        );
      }
      inputs.push(<tr key={i}>{rowInputs}</tr>);
    }
    return inputs;
  };
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
    //console.log(selectedTitle, "new");
  };

  const renderTick = (title) => {
    if (selectedTitle === title) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };

  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (cell) => {
    setSelectedCell(cell);
  };
  //console.log(selectedCell, "relation");

  const renderRelationTick = (cell) => {
    if (selectedCell === cell) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };

  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };
  console.log(selectedGender, "gender");

  const renderGenderTick = (gender) => {
    if (selectedGender === gender) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };

  const [member1952, setMember1952] = useState(null);

  const handleMember1952Click = (option) => {
    setMember1952(option);
  };
  //console.log(member1952, "1952");
  const renderMember1952Tick = (option) => {
    if (member1952 === option) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };
  const [member1995, setMember1995] = useState(null);

  const handleMember1995Click = (option) => {
    setMember1995(option);
    //console.log(member1995);
  };

  const renderMember1995Tick = (option) => {
    if (member1995 === option) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };
  const [previousPf, setpreviousPf] = useState({
    regionCode: "",
    officeCode: "",
    establishmentId: "",
    extension: "",
    accountNumber: "",
  });
  //console.log(previousPf, "previousPf");
  const handlePfChange = (e, fieldName) => {
    const value = e.target.value;
    setpreviousPf({ ...previousPf, [fieldName]: value });
  };
  const [educationLevels, setEducationLevels] = useState({
    illiterate: false,
    nonMatric: false,
    matric: false,
    seniorSecondary: false,
    graduate: false,
    postGraduate: false,
    doctor: false,
    technicalProfessional: false,
  });
  const validateEducationLevels = () => {
    const educationValues = Object.values(educationLevels);
    if (!educationValues.some((value) => value === true)) {
      highlightFields(["Education"]);
      scrollToRef(educationalRef);
      alert("Please select at least one education level at (14).");
      return false;
    }
    return true;
  };

  const handleEducationLevelChange = (level) => {
    setEducationLevels({
      ...educationLevels,
      [level]: !educationLevels[level],
    });
  };

  const renderEducationTick = (level) => {
    return educationLevels[level] ? (
      <span className="tick" style={{ fontWeight: "bold" }}>
        &#10003;
      </span>
    ) : null;
  };
  const [marriageStatus, setMarriageStatus] = useState(null);

  const handleMarriageClick = (marriage) => {
    setMarriageStatus(marriage);
  };

  const renderMarriageTick = (marriage) => {
    if (marriageStatus === marriage) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };
  const [speciallyAbled, setSpeciallyAbled] = useState(null);

  const handleSpeciallyAbledClick = (ableness) => {
    setSpeciallyAbled(ableness);
  };

  const renderSpeciallyAbledTick = (ableness) => {
    if (speciallyAbled === ableness) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };

  const [speciallyAbledType, setSpeciallyAbledType] = useState(null);

  const handleSpeciallyAbledTypeClick = (ablenessType) => {
    setSpeciallyAbledType(ablenessType);
  };

  const renderSpeciallyAbledTypeTick = (ablenessType) => {
    if (speciallyAbledType === ablenessType) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const renderCountryTick = (country) => {
    if (selectedCountry === country) {
      return (
        <span className="tick" style={{ fontWeight: "bold" }}>
          &#10003;
        </span>
      );
    }
    return null;
  };
  const [kycData, setKycData] = useState({
    bankAccount1: { name: "", number: "", ifscCode: "" },
    aadhaar: { name: "", number: "", remarks: "" },
    pan: { name: "", number: "", remarks: "" },
    passport: { name: "", number: "", expiryDate: "" },
    drivingLicence: { name: "", number: "", expiryDate: "" },
    electionCard: { name: "", number: "", remarks: "" },
    rationCard: { name: "", number: "", remarks: "" },
    esicCard: { name: "", number: "", remarks: "" },
  });
  const handleKycChange = (event, documentType, field) => {
    const { value } = event.target;
    setKycData((prevData) => ({
      ...prevData,
      [documentType]: {
        ...prevData[documentType],
        [field]: value,
      },
    }));
  };
  const renderRows = () => {
    return Object.keys(kycData).map((documentType, index) => (
      <tr key={index}>
        <td>{documentType.toUpperCase()}</td>
        <td>
          <input
            type="text"
            value={kycData[documentType].name}
            onChange={(e) => handleKycChange(e, documentType, "name")}
          />
        </td>
        <td>
          <input
            type="text"
            value={kycData[documentType].number}
            onChange={(e) => handleKycChange(e, documentType, "number")}
          />
        </td>
        <td>
          <input
            type="text"
            value={
              kycData[documentType].remarks ||
              kycData[documentType].ifscCode ||
              kycData[documentType].expiryDate
            }
            onChange={(e) => handleKycChange(e, documentType, "remarks")}
            placeholder={
              kycData[documentType].ifscCode
                ? "IFSC CODE*"
                : kycData[documentType].expiryDate
                ? "EXPIRY DATE"
                : ""
            }
          />
        </td>
      </tr>
    ));
  };

  const handleSaveSignature = (data) => {
    
    switch (signatureType) {
      case "employeeSignature":
        setEmployeeSignatureData(data.data);
        break;
      case "employerSignature":
        setEmployerSignatureData(data.data);
        break;
      default:
        break;
    }
    closeSignatureModal();
  };
  const openSignatureModal = (role) => {
    setShowSignatureModal(true);
    switch (role) {
      case "employeeSignature":
        setSignatureType("employeeSignature");
        break;
      case "employerSignature":
        setSignatureType("employerSignature");
        break;
      default:
        break;
    }
  };

  const closeSignatureModal = () => {
    setShowSignatureModal(false);
  };

  const sendPdfToBackend = async (formData) => {
   
    dispatch(Attachmentsendtobackend(Candidateinfo[0]?.EmpID, formData))
      .then((res) => {
        console.log("rees", res);

        console.log("PDF sent successfully.");
        // Update employee information
        const payload = {
          EmpID: Candidateinfo[0]?.EmpID,
          EmpName: employeeName,
        };

        const param = "PFDeclaration/UpdatePFDeclarationForm/";
        dispatch(PUTndaform(param, payload))
          .then((res) => {
            console.log("res", res);
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const [highlightedFields, setHighlightedFields] = useState([]);
  const combinedNameRef = useRef(null);
  const mobileRef = useRef(null);
  const fatherNameRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const emailIdRef = useRef(null);
  const uanRef = useRef(null);
  const dateOfExitRef = useRef(null);
  const passportStartDateRef = useRef(null);
  const memberSignatureRef = useRef(null);
  const showSignatureModalRef = useRef(null);
  const passportEndDateRef = useRef(null);
  const selectedGenderRef = useRef(null);
  const selectedCellRef = useRef(null);
  const marriageRef = useRef(null);
  const speciallyAbledRef = useRef(null);
  const employeeSignatureRef = useRef(null);
  const educationalRef = useRef(null);
  const kycRef = useRef(null);
  const [editablePpo, setEditablePpo] = useState(false);
  const [editableScheme, setEditableScheme] = useState(false);
  const [editablePassport, setEditablePassport] = useState(false);

  const highlightFields = (fields) => {
    setHighlightedFields(fields);
    setTimeout(() => {
      setHighlightedFields([]);
    }, 5000); // Adjust the duration as needed
  };
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
 


  //  Get Declartion data request 
 
   console.log("============Declartiondata===========",Declartiondata)
  useEffect(() => {
      dispatch(GetCandidatedecalartion(Candidateinfo[0]?.EmpID))
  }, [Candidateinfo]);

   useEffect(() =>{
    if(Declartiondata.length>0){
      setCombinedName(Declartiondata[0]?.EmpName);
      setFatherName(Declartiondata[0]?.FatherORHusbandName);
      setDateOfBirth(Declartiondata[0]?.EmpDOB);
      setMobile(Declartiondata[0]?.MobileNumber);
      setEmailId(Declartiondata[0]?.EmailID);
      setUan(Declartiondata[0]?.UAN);
      setDateOfExit(Declartiondata[0]?.DateOfExit);
      setSchemeCertificate(Declartiondata[0]?.SchemeCertificateNumber);
      setppoNumber(Declartiondata[0]?.PPONumber);
      setPassportNumber(Declartiondata[0]?.PassportNumber);
      setPassportStartDate(
        Declartiondata[0]?.InternationalWorkerPassportValidFrom
      );
      setPassportEndDate(Declartiondata[0]?.InternationalWorkerPassportValidTo);
      //setMemberSignature(Declartiondata[0]?.EmpName);
      setSelectedTitle(Declartiondata[0]?.EmpNameTitle);
      //console.log(selectedTitle, "title");
      //setSelectedCell(Declartiondata[0]?.EmpName);
      setSelectedGender(Declartiondata[0]?.EmpGender);
      setMember1952(Declartiondata[0]?.EarlierMemberOfEPF);
      setMember1995(Declartiondata[0]?.EarlierMemberOfEPS);
      setpreviousPf({
        regionCode: Declartiondata[0]?.PFMemberIDRegionCode,
        officeCode: Declartiondata[0]?.PFMemberIDOfficeCode,
        establishmentId: Declartiondata[0]?.PFMemberIDEstablishmentID,
        extension: Declartiondata[0]?.PFMemberIDExtension,
        accountNumber: Declartiondata[0]?.PFMemberIDAccNumber,
      });
      setMarriageStatus(Declartiondata[0]?.MaritalStatus);
      setSpeciallyAbled(Declartiondata[0]?.SpeciallyAbled);
      //console.log(speciallyAbled, "abled");
      setSpeciallyAbledType(Declartiondata[0]?.EmpName);
      setKycData({
        bankAccount1: {
          name: Declartiondata[0]?.NameAsPerBank,
          number: Declartiondata[0]?.BankAccountNumber,
          ifscCode: Declartiondata[0]?.IFSCCode,
        },
        aadhaar: {
          name: Declartiondata[0]?.NameAsPerAadhar,
          number: Declartiondata[0]?.AadharNumber,
          remarks: Declartiondata[0]?.AadharRemarks,
        },
        pan: {
          name: Declartiondata[0]?.NameAsPerPAN,
          number: Declartiondata[0]?.PANNumber,
          remarks: Declartiondata[0]?.PANRemarks,
        },
        passport: {
          name: Declartiondata[0]?.NameAsPerPassport,
          number: Declartiondata[0]?.PassportNumber,
          expiryDate: Declartiondata[0]?.PassportExpiryDate,
        },
        drivingLicence: {
          name: Declartiondata[0]?.NameAsPerDrivingLicense,
          number: Declartiondata[0]?.DLNo,
          expiryDate: Declartiondata[0]?.DLExpiryDate,
        },
        electionCard: {
          name: Declartiondata[0]?.NameAsPerElectionCard,
          number: Declartiondata[0]?.ElectionCardNumber,
          remarks: Declartiondata[0]?.ElectionCardRemarks,
        },
        rationCard: {
          name: Declartiondata[0]?.NameAsPerRationCard,
          number: Declartiondata[0]?.RationCardNumber,
          remarks: Declartiondata[0]?.RationCardRemarks,
        },
        esicCard: {
          name: Declartiondata[0]?.NameAsPerESIC,
          number: Declartiondata[0]?.ESICNumber,
          remarks: Declartiondata[0]?.ESICRemarks,
        },
      });

    }
   },[Declartiondata])

 
  const generatePdf = () => {
    // if (selectedDate === "") {
    //   alert("Please select Date fields before saving the PDF.");
    //   return;
    // }
    // if (department.trim() === "") {
    //   alert("Please enter the department before saving the PDF.");
    //   return;
    // }
    if (combinedName === "") {
      highlightFields(["CombinedName"]);
      scrollToRef(combinedNameRef);
      alert("Please add your name before saving the PDF.");
      return;
    }
    if (dateOfBirth === "") {
      alert("Please add your date of birth before saving the PDF.");
      highlightFields(["DateOfBirth"]);
      scrollToRef(dateOfBirthRef);
      return;
    }
    if (fatherName === "") {
      alert("Please add your father/husband name before saving the PDF.");
      highlightFields(["FatherName"]);
      scrollToRef(fatherNameRef);
      return;
    }
    if (selectedCell === "") {
      alert(
        "Please select your relation with father/husband before saving the PDF at (4)"
      );
      highlightFields(["SelectedCell"]);
      scrollToRef(selectedCellRef);
      return;
    }
    if (selectedGender === "") {
      highlightFields(["Gender"]);
      scrollToRef(selectedGenderRef);
      alert("Please select your gender before saving the PDF.");
      return;
    }
    if (mobile === "") {
      alert("Please add our mobile number before saving the PDF.");
      highlightFields(["Mobile"]);
      scrollToRef(mobileRef);
      return;
    }
    if (emailId === "") {
      highlightFields(["EmailId"]);
      scrollToRef(emailIdRef);
      alert("Please add your email id before saving the PDF.");
      return;
    }
    if (member1952 === "YES" || member1995 === "YES") {
      if (
        uan === "" &&
        (previousPf.regionCode === "" ||
          previousPf.officeCode === "" ||
          previousPf.establishmentId === "" ||
          previousPf.extension === "" ||
          previousPf.accountNumber === "")
      ) {
        alert(
          "Please enter either the UAN or previous PF details before saving the PDF at (10,11 & 12) ."
        );
        return;
      }
      if (dateOfExit === "") {
        highlightFields(["DateOfExit"]);
        scrollToRef(dateOfExitRef);
        alert("Please enter the date of Exit before saving the PDF at 11.");
        return;
      }
    }

    if (employeeSignatureData === null) {
      highlightFields(["EmployeeSignature"]);
      scrollToRef(employeeSignatureRef);
      alert("Please Sign the Document before saving the PDF.");

      return;
    }
    //console.log(employeeSignatureData, "employer sign");

   
    if (marriageStatus === "") {
      highlightFields(["Marriage"]);
      scrollToRef(marriageRef);
      alert("Please select your martial status before saving the PDF at (15)");
      return;
    }

    if (speciallyAbled === "") {
      highlightFields(["SpeciallyAbled"]);
      scrollToRef(speciallyAbledRef);
      alert("Please tick before saving the PDF at (16)");
      return;
    }
    if (
      kycData.bankAccount1.name === "" &&
      kycData.bankAccount1.number === "" &&
      kycData.bankAccount1.ifscCode === ""
    ) {
      highlightFields(["KYC"]);
      scrollToRef(kycRef);
      alert("Please fill bank details before saving the PDF at (17)");
      return;
    }
    const input = document.getElementById("pdf-content");
    if (!input) {
      console.error("Element with id 'pdf-content' not found.");
      return;
    }
  
    html2pdf()
      .from(input)
      .set({
        margin: [2, 2], // Adjust margins as needed
        filename: "EPFO.pdf",
        html2canvas: {
          scale: 1, // Adjust scale if necessary
          windowWidth: document.documentElement.clientWidth,
        },
        jsPDF: { unit: "mm", format: "a3", orientation: "portrait" },
        pagebreak: { before: ".page-break" },
      })
      .save()
      .outputPdf("blob")
      .then((blob) => {
        const formData = new FormData();
        formData.append("file", blob, "EPFO.pdf");
        const signatureBlob = base64ToBlob(employeeSignatureData, "image/png");
        formData.append("signature", signatureBlob, "signature_epfo.png");
                sendPdfToBackend(formData);
      });
  };

  const base64ToBlob = (base64, mime) => {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mime });
  };
  
 
  function convertToYYYYMMDD(dateString) {
    // Extract day, month, and year from the input string
    const day = dateString?.slice(0, 2);
    const month = dateString?.slice(2, 4);
    const year = dateString?.slice(4);

    // Format the date string as "yyyy/mm/dd"
    const formattedDate = `${year}/${month}/${day}`;

    return formattedDate;
  }

  const responseData = {
    EmpID: "7005",
    EmpNameTitle: selectedTitle,
    EmpName: combinedName,
    EmpDOB: convertToYYYYMMDD(dateOfBirth),
    FatherORHusbandTitle: "Mr",
    FatherORHusbandName: fatherName,
    RelationshipInRespectOfFatherHusband: "",
    EmpGender: selectedGender,
    MobileNumber: mobile,
    EmailID: emailId,
    EarlierMemberOfEPF: member1952,
    EarlierMemberOfEPS: member1995,
    UAN: uan,
    PFMemberIDRegionCode: previousPf.regionCode,
    PFMemberIDOfficeCode: previousPf.officeCode,
    PFMemberIDEstablishmentID: previousPf.establishmentId,
    PFMemberIDExtension: previousPf.extension,
    PFMemberIDAccNumber: previousPf.accountNumber,
    DateOfExit: convertToYYYYMMDD(dateOfExit),
    SchemeCertificateNumber: schemeCertificate,
    PPONumber: ppoNumber,
    InternationalWorker: "",
    CountryOfOriginIndia: "",
    OtherThanIndia: "",
    InternationalWorkerPassportNumber: passportNumber,
    InternationalWorkerPassportValidFrom: convertToYYYYMMDD(passportStartDate),
    InternationalWorkerPassportValidTo: convertToYYYYMMDD(passportEndDate),
    //EducationalQualification: EducationalQualification,
    MaritalStatus: marriageStatus,
    SpeciallyAbled: speciallyAbled,
    SpeciallyAbledIfYes: speciallyAbledType,
    NameAsPerBank: kycData.bankAccount1.name,
    BankAccountNumber: kycData.bankAccount1.number,
    IFSCCode: kycData.bankAccount1.ifscCode,
    NameAsPerAadhar: kycData.aadhaar.name,
    AadharNumber: kycData.aadhaar.number,
    AadharRemarks: kycData.aadhaar.ifscCode,
    NameAsPerPAN: kycData.pan.name,
    PANNumber: kycData.pan.number,
    PANRemarks: kycData.pan.remarks,
    NameAsPerPassport: kycData.passport.name,
    PassportNumber: kycData.passport.number,
    PassportExpiryDate: kycData.passport.expiryDate,
    NameAsPerDrivingLicense: kycData.drivingLicence.name,
    DLNo: kycData.drivingLicence.number,
    DLExpiryDate: kycData.drivingLicence.expiryDate,
    NameAsPerElectionCard: kycData.electionCard.name,
    ElectionCardNumber: kycData.electionCard.number,
    ElectionCardRemarks: kycData.electionCard.remarks,
    NameAsPerRationCard: kycData.rationCard.name,
    RationCardNumber: kycData.rationCard.number,
    RationCardRemarks: kycData.rationCard.remarks,
    NameAsPerESIC: kycData.esicCard.name,
    ESICNumber: kycData.esicCard.number,
    ESICRemarks: kycData.esicCard.remarks,
    EmpDate: "",
    EmpPlace: "",
    EmployerSectionEmpName: "",
    EmpDOJ: "",
    EmployerSectionPFNo: "",
    EmployerSectionUANNo: "",
    KycUANOptions: "",
    EarlierMemberOfEPFSchemeOptions: "",
    EmployerDate: "",
    UpdatedBy: "mkone@test.com",
  };

  // const respData = {
  //   EmpID: "7005",
  //   EmpNameTitle: "Mr",
  //   EmpName: combinedName,
  //   EmpDOB: "1985-05-15",
  //   FatherORHusbandTitle: "Mr",
  //   FatherORHusbandName: fatherName,
  //   RelationshipInRespectOfFatherHusband: "Father",
  //   EmpGender: "Male",
  //   MobileNumber: mobile,
  //   EmailID: "john.doe@example.com",
  //   EarlierMemberOfEPF: "Yes",
  //   EarlierMemberOfEPS: "Yes",
  //   UAN: "100200300400",
  //   PFMemberIDRegionCode: "MH",
  //   PFMemberIDOfficeCode: "001",
  //   PFMemberIDEstablishmentID: "1234567",
  //   PFMemberIDExtension: "000",
  //   PFMemberIDAccNumber: "7654321",
  //   DateOfExit: "2023-12-31",
  //   SchemeCertificateNumber: "SC123456",
  //   PPONumber: "PPO123456",
  //   InternationalWorker: "No",
  //   CountryOfOriginIndia: "Yes",
  //   OtherThanIndia: "No",
  //   InternationalWorkerPassportNumber: "N12345678",
  //   InternationalWorkerPassportValidFrom: "2020-01-01",
  //   InternationalWorkerPassportValidTo: "2030-01-01",
  //   MaritalStatus: "Single",
  //   SpeciallyAbled: "No",
  //   SpeciallyAbledIfYes: "",
  //   NameAsPerBank: "John Doe",
  //   BankAccountNumber: "1234567890123456",
  //   IFSCCode: "SBIN0001234",
  //   NameAsPerAadhar: "John Doe",
  //   AadharNumber: "123456789012",
  //   AadharRemarks: "",
  //   NameAsPerPAN: "John Doe",
  //   PANNumber: "ABCDE1234F",
  //   PANRemarks: "",
  //   NameAsPerPassport: "John Doe",
  //   PassportNumber: "N12345678",
  //   PassportExpiryDate: "2030-01-01",
  //   NameAsPerDrivingLicense: "John Doe",
  //   DLNo: "DL-123456789012",
  //   DLExpiryDate: "2030-01-01",
  //   NameAsPerElectionCard: "John Doe",
  //   ElectionCardNumber: "ELC1234567",
  //   ElectionCardRemarks: "",
  //   NameAsPerRationCard: "John Doe",
  //   RationCardNumber: "RC1234567",
  //   RationCardRemarks: "",
  //   NameAsPerESIC: "John Doe",
  //   ESICNumber: "ESIC1234567",
  //   ESICRemarks: "",
  //   CreatedBy: "mkone@test.com",
  // };


  const myStyle = {
    fontSize: "15px",
    fontFamily: "Arial, Helvetica, sans-serif"	
  };


  return (
    <div>
      <div
      style={myStyle}
        id="pdf-content"
        onClick={(e) => e.stopPropagation()}
        className="m-auto w-full"
      >
        {/* ---------------------------First Page--------------------------- */}

        <div className="clswrapper">
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <th width="178" rowspan="5">
                <img src={EPFOLogo} alt="EPFO_Logo" width="150" />
              </th>
              <th width="822" align="right" valign="top">
                <h2 className="clsh2">Declaration Form</h2>
                <span>
                  (To be retained by the Employer for future reference)
                </span>
              </th>
            </tr>
            <tr>
              <th height="8"></th>
            </tr>
            <tr>
              <th align="center" valign="top">
                <h1 className="clsh1">
                  Employees’ Provident Fund Organization
                </h1>
              </th>
            </tr>
            <tr>
              <th align="center" valign="top"></th>
            </tr>
            <tr>
              <th align="center" valign="top">
                <h3 className="clsh3">
                  THE EMPLOYEES’ PROVIDENT FUNDS SCHEME, 1952 (PARAGRAPH-34 &
                  57)
                </h3>
                <h3 className="clsh3">&</h3>
                <h3 className="clsh3">
                  THE EMPLOYEES’ PENSION SCHEME, 1995 (PARAGRAPH-24)
                </h3>
              </th>
            </tr>
            <tr>
              <th align="center" valign="top" colspan="2"></th>
            </tr>
            <tr>
              <th align="center" valign="top" colspan="2">
                {" "}
                <h4>
                  {" "}
                  <u>
                    DECLARATION BY A PERSON TAKING UP EMPLOYMENT IN AN
                    ESTABLISHMENT ON WHICH EMPLOYEES’ PROVIDENT FUND SCHEME,
                  </u>{" "}
                </h4>
                <h4>
                  <u>
                    1952 AND/OR EMPLOYEES’ PENSION SCHEME, 1995 IS APPLICABLE.
                  </u>
                </h4>
                <h3 className="clsh3">(PLEASE GO THROUGH THE INSTRUCTIONS)</h3>
              </th>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div>1) NAME</div>
                  <div className="clsflexcolumn">
                    <div>(TITLE)</div>
                    {/* <div><span className="clsmr">MR.</span><span className="clsmr">MS.</span><span className="clsmr">MRS.</span></div> */}
                    <div>
                      <span
                        className={
                          selectedTitle === "MR." ? "clsmr selected" : "clsmr"
                        }
                        onClick={() => handleTitleClick("Mr")}
                      >
                        {renderTick("Mr")} MR.
                      </span>
                      <span
                        className={
                          selectedTitle === "MS." ? "clsmr selected" : "clsmr"
                        }
                        onClick={() => handleTitleClick("Ms")}
                      >
                        {renderTick("Ms")} MS.
                      </span>
                      <span
                        className={
                          selectedTitle === "MRS." ? "clsmr selected" : "clsmr"
                        }
                        onClick={() => handleTitleClick("Mrs")}
                      >
                        {renderTick("Mrs")} MRS.
                      </span>
                    </div>
                    <div>(PLEASE TICK)</div>
                  </div>
                  <div
                    ref={combinedNameRef}
                    className={`relative ${
                      highlightedFields.includes("CombinedName")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl clsbordercollapse clstbl"
                    >
                      <tbody>{generateInputs_1()}</tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "52px" }}>2) DATE OF BIRTH</div>
                  <div
                    ref={dateOfBirthRef}
                    className={`relative ${
                      highlightedFields.includes("DateOfBirth")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl clsbordercollapse clstbl"
                    >
                      <thead>
                        <tr>
                          <th>D</th>
                          <th>D</th>
                          <th>M</th>
                          <th>M</th>
                          <th>Y</th>
                          <th>Y</th>
                          <th>Y</th>
                          <th>Y</th>
                        </tr>
                      </thead>
                      <tbody>{generateInputs_2()}</tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div>
                    3) FATHER’S/
                    <br />
                    <span style={{ marginLeft: "16px" }}>HUSBAND’S NAME</span>
                  </div>
                  <div className="clsflexcolumn">
                    <div>
                      <span className="clsmr">MR.</span>
                    </div>
                  </div>
                  <div
                    ref={fatherNameRef}
                    className={`relative ${
                      highlightedFields.includes("FatherName")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl clsbordercollapse clstbl"
                    >
                      <tbody>{generateInputs_3()}</tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "10px" }}>
                    4) RELATIONSHIP IN RESPECT OF (3) ABOVE
                    <br />
                    <span style={{ marginLeft: "15px" }}>(PLEASE TICK)</span>
                  </div>
                  <div
                    ref={selectedCellRef}
                    className={`relative ${
                      highlightedFields.includes("SelectedCell")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tbody>
                        <tr>
                          <th
                            width="120"
                            style={{
                              height: "40px",
                              verticalAlign: "text-top",
                            }}
                          >
                            FATHER
                          </th>
                          <th
                            width="120"
                            style={{
                              height: "40px",
                              verticalAlign: "text-top",
                            }}
                          >
                            HUSBAND
                          </th>
                        </tr>
                        <tr>
                          <td onClick={() => handleCellClick("father")}>
                            <span className="clsspanbtn">
                              {renderRelationTick("father")}
                            </span>
                          </td>
                          <td onClick={() => handleCellClick("husband")}>
                            <span className="clsspanbtn">
                              {renderRelationTick("husband")}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "10px" }}>
                    5) GENDER
                    <br />
                    <span style={{ marginLeft: "15px" }}>(PLEASE TICK)</span>
                  </div>
                  <div
                    ref={selectedGenderRef}
                    className={`relative ${
                      highlightedFields.includes("Gender")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tbody>
                        <tr>
                          <th
                            width="140"
                            style={{
                              height: "40px",
                              verticalAlign: "text-top",
                            }}
                          >
                            MALE
                          </th>
                          <th
                            width="140"
                            style={{
                              height: "40px",
                              verticalAlign: "text-top",
                            }}
                          >
                            FEMALE
                          </th>
                          <th
                            width="140"
                            style={{
                              height: "40px",
                              verticalAlign: "text-top",
                            }}
                          >
                            TRANSGENDER
                          </th>
                        </tr>
                        <tr>
                          <td onClick={() => handleGenderClick("Male")}>
                            <span className="clsspanbtn">
                              {renderGenderTick("Male")}
                            </span>
                          </td>
                          <td onClick={() => handleGenderClick("Female")}>
                            <span className="clsspanbtn">
                              {renderGenderTick("Female")}
                            </span>
                          </td>
                          <td onClick={() => handleGenderClick("Transgender")}>
                            <span className="clsspanbtn">
                              {renderGenderTick("Transgender")}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "10px" }}>
                    6) MOBILE NUMBER
                    <br />
                    <span style={{ marginLeft: "15px" }}>(IF ANY)</span>
                  </div>
                  <div
                    ref={mobileRef}
                    className={`relative ${
                      highlightedFields.includes("Mobile")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl clsbordercollapse clstbl"
                    >
                      <tbody>{generateInputs_6()}</tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "10px" }}>
                    7) EMAIL ID (IF ANY)
                  </div>
                  <div
                    ref={emailIdRef}
                    className={`relative ${
                      highlightedFields.includes("EmailId")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl clsbordercollapse clstbl"
                    >
                      <tbody>{generateInputs_7()}</tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                8) WHETHER EARLIER A MEMBER OF THE EMPLOYEES’ PROVIDENT FUND
                SCHEME, 1952 ?
              </td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div
                    style={{
                      marginRight: "10px",
                      marginLeft: "200px",
                      marginTop: "15px",
                    }}
                  >
                    (PLEASE TICK)
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tbody>
                        <tr>
                          <th
                            width="200"
                            valign="middle"
                            onClick={() => handleMember1952Click("Yes")}
                          >
                            <span className="clsspanbtn">
                              {renderMember1952Tick("Yes")} YES
                            </span>
                          </th>
                          <th
                            width="200"
                            valign="middle"
                            onClick={() => handleMember1952Click("No")}
                          >
                            <span className="clsspanbtn">
                              {renderMember1952Tick("No")} NO
                            </span>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                9) WHETHER EARLIER A MEMBER OF THE EMPLOYEES’ PENSION SCHEME,
                1995?
              </td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <div className="clsflex">
                  <div
                    style={{
                      marginRight: "10px",
                      marginLeft: "200px",
                      marginTop: "15px",
                    }}
                  >
                    (PLEASE TICK)
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tbody>
                        <tr>
                          <th
                            width="200"
                            valign="middle"
                            onClick={() => handleMember1995Click("Yes")}
                          >
                            <span className="clsspanbtn">
                              {renderMember1995Tick("Yes")} YES
                            </span>
                          </th>
                          <th
                            width="200"
                            valign="middle"
                            onClick={() => handleMember1995Click("No")}
                          >
                            <span className="clsspanbtn">
                              {renderMember1995Tick("No")} NO
                            </span>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="left" valign="top">
                <h4>
                  {" "}
                  IF RESPONSE TO ANY OR BOTH OF (8) & (9) ABOVE IS YES, THEN{" "}
                  <u>MANDATORILY</u> FILL UP THE PREVIOUS EMPLOYMENT DETAILS
                  <br />
                  AT (10,11&12):{" "}
                </h4>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td colspan="2" align="center" valign="middle">
                <em>
                  Page <strong>1</strong> of <strong>3</strong>
                </em>
              </td>
            </tr>
          </table>
        </div>

        {/* ---------------------------Second Page--------------------------- */}

        <div className="clswrapper2" style={{ marginTop: "130px" }}>
          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            className="clsbordercollapse"
          >
            <tr>
              <td
                align="left"
                valign="top"
                style={{
                  padding: "5px 0px 10px 15px",
                  verticalAlign: "text-top",
                  backgroundColor: "#cccccc",
                  display: "block",
                  lineHeight: "normal",
                }}
              >
                <strong>A. PREVIOUS EMPLOYMENT DETAILS</strong>
              </td>
            </tr>
            <tr>
              <td align="left" valign="middle" height="30">
                <span style={{ marginLeft: "0px" }}>
                  10) THE DETAILS OF THE UNIVERSAL ACCOUNT NUMBER (UAN) OR
                  PREVIOUS PF MEMBER ID:
                </span>
              </td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <div className="clsflex" style={{ marginTop: "5px" }}>
                  <div
                    style={{
                      paddingLeft: "24px",
                      marginTop: "12px",
                      width: "276px",
                    }}
                  >
                    <strong>UAN</strong>
                    <br />
                    OR
                    <br />
                    <strong>PREVIOUS PF MEMBER ID</strong>
                  </div>
                  <div>
                    <div style={{ width: "80%" }}>
                      <table
                        width="100%"
                        border="1"
                        cellspacing="0"
                        cellpadding="0"
                        className="clsnametbl clsbordercollapse clstbl"
                      >
                        <tbody>{generateInputs_uan()}</tbody>
                      </table>
                    </div>
                    <div style={{ marginTop: "15px", paddingLeft: "15px" }}>
                      <table
                        width="100%"
                        border="1"
                        cellspacing="0"
                        cellpadding="0"
                        className="clsPFtbl clsbordercollapse clstbl"
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style={{
                                height: "40px",
                                verticalAlign: "text-top",
                              }}
                            >
                              REGION CODE
                            </td>
                            <td
                              align="center"
                              style={{
                                height: "40px",
                                verticalAlign: "text-top",
                              }}
                            >
                              OFFICE CODE
                            </td>
                            <td
                              align="center"
                              style={{
                                height: "40px",
                                verticalAlign: "text-top",
                              }}
                            >
                              ESTABLISHMENT ID
                            </td>
                            <td
                              align="center"
                              style={{
                                height: "40px",
                                verticalAlign: "text-top",
                              }}
                            >
                              EXTENSION
                            </td>
                            <td
                              align="center"
                              style={{
                                height: "40px",
                                verticalAlign: "text-top",
                              }}
                            >
                              ACCOUNT NUMBER
                            </td>
                          </tr>
                          <tr>
                            {Object.keys(previousPf).map((fieldName, index) => (
                              <td key={index}>
                                <input
                                  type="text"
                                  value={previousPf[fieldName]}
                                  onChange={(e) => handlePfChange(e, fieldName)}
                                />
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "7px" }}>
                    11) DATE OF EXIT FOR PREVIOUS
                    <br />
                    <span style={{ marginLeft: "29px" }}>
                      MEMBER ID (DD/MM/YYYY)
                    </span>
                  </div>

                  <div
                    ref={dateOfExitRef}
                    className={`relative ${
                      highlightedFields.includes("DateOfExit")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl clsbordercollapse clstbl"
                    >
                      <thead>
                        <tr>
                          <th>D</th>
                          <th>D</th>
                          <th>M</th>
                          <th>M</th>
                          <th>Y</th>
                          <th>Y</th>
                          <th>Y</th>
                          <th>Y</th>
                        </tr>
                      </thead>
                      <tbody>{generateInputs_dateOfExit()}</tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td align="left" valign="top">
                {" "}
                12) (A) IF SCHEME CERTIFICATE ISSUED FOR PREVIOUS EMPLOYMENT,
                THEN SCHEME CERTIFICATE NUMBER:
                {editableScheme ? (
                  <input
                    type="text"
                    value={schemeCertificate}
                    onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 20)}
                    onChange={(e) => {
                      setSchemeCertificate(e.target.value);
                    }}
                    className="clsinputbar"
                  />
                ) : (
                  <span
                    className="px-2 inline-block"
                    onClick={() => handleEdit("schemeCertificate")}
                  >
                    {schemeCertificate || "Enter Scheme Certificate"}
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "30px" }} align="left" valign="top">
                (B) IF PENSION PAYMENT ORDER (PPO) ISSUED FOR PREVIOUS
                EMPLOYMENT, THEN PPO NUMBER:
                {editablePpo ? (
                  <input
                    type="text"
                    value={ppoNumber}
                    onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 20)}
                    onChange={(e) => {
                      setppoNumber(e.target.value);
                    }}
                    className="clsinputbar"
                  />
                ) : (
                  <span
                    className="px-2 inline-block"
                    onClick={() => handleEdit("ppoNumber")}
                  >
                    {ppoNumber || "Enter PPO"}
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style={{
                  padding: "5px 0px 10px 15px",
                  verticalAlign: "text-top",
                  backgroundColor: "#cccccc",
                  display: "block",
                  lineHeight: "normal",
                }}
              >
                <strong>B. OTHER DETAILS</strong>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "10px" }}>
                    5) GENDER
                    <br />
                    <span style={{ marginLeft: "15px" }}>(PLEASE TICK)</span>
                  </div>

                  <div>
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tbody>
                        <tr>
                          <th
                            width="140"
                            style={{
                              height: "40px",
                              verticalAlign: "text-top",
                            }}
                          >
                            MALE
                          </th>
                          <th
                            width="140"
                            style={{
                              height: "40px",
                              verticalAlign: "text-top",
                            }}
                          >
                            FEMALE
                          </th>
                        </tr>
                        <tr>
                          <td onClick={() => handleGenderClick("Male")}>
                            <span className="clsspanbtn">
                              {renderGenderTick("Male")}
                            </span>
                          </td>
                          <td onClick={() => handleGenderClick("Female")}>
                            <span className="clsspanbtn">
                              {renderGenderTick("Female")}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="15"></td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "15px" }} align="left" valign="top">
                <strong>
                  IF THE REPLY TO (13) ABOVE IS YES, THEN ENTER THE DETAILS IN
                  13(A), 13(B) & 13(C):
                </strong>
                <br />
                13(A) COUNTRY OF ORIGIN (Please Tick)
                <div style={{ marginLeft: "50px", marginTop: "5px" }}>
                  <table
                    border="1"
                    cellspacing="0"
                    cellpadding="0"
                    className="clsnametbl2 clsbordercollapse clstbl"
                  >
                    <tr>
                      <td align="center" width="200">
                        INDIA
                      </td>
                      <td
                        align="center"
                        width="350"
                        style={{ paddingBottom: "10px" }}
                      >
                        OTHER THAN INDIA (IF YES, PLEASE
                        <br />
                        MENTION NAME OF THE COUNTRY)
                      </td>
                    </tr>
                    <tr>
                      <td
                        onClick={() => handleCountryClick("india")}
                        style={{ height: "40px", verticalAlign: "text-top" }}
                      >
                        <span className="clsspanbtn">
                          {renderCountryTick("india")}
                        </span>
                      </td>
                      <td
                        onClick={() => handleCountryClick("other")}
                        style={{ height: "40px", verticalAlign: "text-top" }}
                      >
                        <span className="clsspanbtn">
                          {renderCountryTick("other")}
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "15px" }} align="left" valign="top">
                13(B) PASSPORT NUMBER
                {editablePassport ? (
                  <input
                    type="text"
                    value={passportNumber}
                    onKeyPress={(e) => handleKeyPress(e, "alphanumeric", 20)}
                    onChange={(e) => {
                      setPassportNumber(e.target.value);
                    }}
                    className="clsinputbar px-2"
                  />
                ) : (
                  <span
                    className="px-2 inline-block"
                    onClick={() => handleEdit("passportNumber")}
                  >
                    {passportNumber || "Enter Passport Number"}
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "15px" }} align="left" valign="top">
                <div className="clsflex">
                  <div>13(C) PASSPORT VALID FROM</div>
                  <div style={{ marginLeft: "50px" }}>
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl clsbordercollapse clstbl"
                    >
                      <thead>
                        <tr>
                          <th>D</th>
                          <th>D</th>
                          <th>M</th>
                          <th>M</th>
                          <th>Y</th>
                          <th>Y</th>
                          <th>Y</th>
                          <th>Y</th>
                        </tr>
                      </thead>

                      <tbody>{generateInputs_passportStartDate()}</tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "15px" }} align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginLeft: "231px" }}>to</div>
                  <div style={{ marginLeft: "50px" }}>
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl clsbordercollapse clstbl"
                    >
                      <thead>
                        <tr>
                          <th>D</th>
                          <th>D</th>
                          <th>M</th>
                          <th>M</th>
                          <th>Y</th>
                          <th>Y</th>
                          <th>Y</th>
                          <th>Y</th>
                        </tr>
                      </thead>

                      <tbody>{generateInputs_passportEndDate()}</tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "10px" }}>
                    14) EDUCATIONAL
                    <br />
                    <span style={{ marginLeft: "28px" }}>QUALIFICATION</span>
                    <br />
                    <span style={{ marginLeft: "28px" }}>(PLEASE TICK)</span>
                  </div>

                  <div
                    ref={educationalRef}
                    className={`relative ${
                      highlightedFields.includes("Education")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tbody>
                        <tr>
                          <td
                            width="140"
                            align="center"
                            style={{ padding: "5px 5px 10px 5px" }}
                            onClick={() =>
                              handleEducationLevelChange("illiterate")
                            }
                          >
                            ILLITERATE
                            {renderEducationTick("illiterate")}
                          </td>
                          <td
                            width="140"
                            align="center"
                            style={{ padding: "5px 5px 10px 5px" }}
                            onClick={() =>
                              handleEducationLevelChange("nonMatric")
                            }
                          >
                            NON-MATRIC
                            {renderEducationTick("nonMatric")}
                          </td>
                          <td
                            width="140"
                            align="center"
                            style={{ padding: "5px 5px 10px 5px" }}
                            onClick={() => handleEducationLevelChange("matric")}
                          >
                            MATRIC
                            {renderEducationTick("matric")}
                          </td>
                          <td
                            width="140"
                            align="center"
                            style={{ padding: "5px 5px 10px 5px" }}
                            onClick={() =>
                              handleEducationLevelChange("seniorSecondary")
                            }
                          >
                            SENIOR SECONDARY
                            {renderEducationTick("seniorSecondary")}
                          </td>
                          <td
                            width="140"
                            align="center"
                            style={{ padding: "5px 5px 10px 5px" }}
                            onClick={() =>
                              handleEducationLevelChange("graduate")
                            }
                          >
                            GRADUATE
                            {renderEducationTick("graduate")}
                          </td>
                          <td
                            width="140"
                            align="center"
                            style={{ padding: "5px 5px 10px 5px" }}
                            onClick={() =>
                              handleEducationLevelChange("postGraduate")
                            }
                          >
                            POST GRADUATE
                            {renderEducationTick("postGraduate")}
                          </td>
                          <td
                            width="140"
                            align="center"
                            style={{ padding: "5px 5px 10px 5px" }}
                            onClick={() => handleEducationLevelChange("doctor")}
                          >
                            DOCTOR
                            {renderEducationTick("doctor")}
                          </td>
                          <td
                            width="140"
                            align="center"
                            style={{ padding: "5px 5px 10px 5px" }}
                            onClick={() =>
                              handleEducationLevelChange(
                                "technicalProfessional"
                              )
                            }
                          >
                            TECHNICAL/PROFESSIONAL
                            {renderEducationTick("technicalProfessional")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "10px" }}>
                    15) MARITAL STATUS
                    <br />
                    <span style={{ marginLeft: "28px" }}>(PLEASE TICK)</span>
                  </div>

                  <div
                    ref={marriageRef}
                    className={`relative ${
                      highlightedFields.includes("Marriage")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tr>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          MARRIED
                        </td>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          UNMARRIED
                        </td>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          WIDOW / WIDOWER
                        </td>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          DIVORCEE
                        </td>
                      </tr>
                      <tr>
                        <td
                          onClick={() => handleMarriageClick("MARRIED")}
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          <span className="clsspanbtn">
                            {renderMarriageTick("MARRIED")}
                          </span>
                        </td>
                        <td
                          onClick={() => handleMarriageClick("UNMARRIED")}
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          <span className="clsspanbtn">
                            {renderMarriageTick("UNMARRIED")}
                          </span>
                        </td>
                        <td
                          onClick={() => handleMarriageClick("WIDOW")}
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          <span className="clsspanbtn">
                            {renderMarriageTick("WIDOW")}
                          </span>
                        </td>
                        <td
                          onClick={() => handleMarriageClick("DIVORCEE")}
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          <span className="clsspanbtn">
                            {renderMarriageTick("DIVORCEE")}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <div className="clsflex">
                  <div style={{ marginRight: "10px" }}>
                    16) SPECIALLY ABLED
                    <br />
                    <span style={{ marginLeft: "28px" }}>(PLEASE TICK)</span>
                  </div>

                  <div
                    ref={speciallyAbledRef}
                    className={`relative ${
                      highlightedFields.includes("SpeciallyAbled")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tr>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          YES
                        </td>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          NO
                        </td>
                      </tr>
                      <tr>
                        <td
                          onClick={() => handleSpeciallyAbledClick("Yes")}
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          <span className="clsspanbtn">
                            {renderSpeciallyAbledTick("Yes")}
                          </span>
                        </td>
                        <td
                          onClick={() => handleSpeciallyAbledClick("No")}
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          <span className="clsspanbtn">
                            {renderSpeciallyAbledTick("No")}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div style={{ marginLeft: "40px" }}>
                    <table
                      border="1"
                      cellspacing="0"
                      cellpadding="0"
                      className="clsnametbl2 clsbordercollapse clstbl"
                    >
                      <tr>
                        <td
                          colspan="3"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          IF YES, TICK THE CATEGORY
                        </td>
                      </tr>
                      <tr>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          LOCOMOTIVE
                        </td>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          VISUAL
                        </td>
                        <td
                          width="140"
                          align="center"
                          style={{ padding: "5px 5px 10px 5px" }}
                        >
                          HEARING
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ padding: "5px 5px 10px 5px" }}
                          onClick={() =>
                            handleSpeciallyAbledTypeClick("LOCOMOTIVE")
                          }
                        >
                          <span className="clsspanbtn">
                            {renderSpeciallyAbledTypeTick("LOCOMOTIVE")}
                          </span>
                        </td>
                        <td
                          style={{ padding: "5px 5px 10px 5px" }}
                          onClick={() =>
                            handleSpeciallyAbledTypeClick("VISUAL")
                          }
                        >
                          <span className="clsspanbtn">
                            {renderSpeciallyAbledTypeTick("VISUAL")}
                          </span>
                        </td>
                        <td
                          style={{ padding: "5px 5px 10px 5px" }}
                          onClick={() =>
                            handleSpeciallyAbledTypeClick("HEARING")
                          }
                        >
                          <span className="clsspanbtn">
                            {renderSpeciallyAbledTypeTick("HEARING")}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="105"></td>
            </tr>
            <tr>
              <td colspan="2" align="center" valign="middle">
                <em>
                  Page <strong>2</strong> of <strong>3</strong>
                </em>
              </td>
            </tr>
          </table>
        </div>

        {/* ---------------------------Third Page--------------------------- */}

        <div className="clswrapper2" style={{ marginTop: "90px" }}>
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="left" valign="top">
                <div className="clsflex" style={{ width: "100%" }}>
                  <div style={{ width: "14%" }}>17) KYC DETAILS</div>
                  <div
                    ref={kycRef}
                    style={{ width: "86%" }}
                    className={`relative ${
                      highlightedFields.includes("KYC")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <table
                      width="100%"
                      border="1"
                      cellspacing="0"
                      cellpadding="3"
                      className="clskyctbl clsbordercollapse clstbl"
                    >
                      {renderRows()}
                      <tr>
                        <td colspan="4">
                          *{" "}
                          <strong>
                            Mandatory Field (NOTE: BANK ACCOUNT NUMBER ALONG
                            WITH IFSC CODE) IS MANDATORY.
                          </strong>{" "}
                          YOU
                          <br />
                          ARE HOWEVER ADVISED TO PROVIDE ALL KYC DOCUMENTS
                          AVAILABLE WITH YOU IN ADDITION TO MANDATORY KYCS TO
                          AVAIL BETTER SERVICES.{" "}
                          <strong>
                            SELF-ATTESTED PHOTOCOPIES OF THE DOCUMENTS
                          </strong>{" "}
                          MUST BE ATTACHED WITH THIS FORM.
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="10"></td>
            </tr>
            <tr>
              <td
                align="left"
                valign="top"
                style={{
                  padding: "5px 0px 10px 15px",
                  verticalAlign: "text-top",
                  backgroundColor: "#cccccc",
                  display: "block",
                  lineHeight: "normal",
                }}
              >
                <strong>C. UNDERTAKING:</strong>
              </td>
            </tr>
            <tr>
              <td height="15"></td>
            </tr>
            <tr>
              <td align="left" valign="middle" style={{ lineHeight: "25px" }}>
                <div style={{ marginLeft: "20px" }}>
                  <strong>
                    A. I CERTIFY THAT ALL THE INFORMATION GIVEN ABOVE IS TRUE TO
                    THE BEST OF MY KNOWLEDGE AND BELIEF.
                    <br />
                    B. IN CASE, EARLIER A MEMBER OF EPF SCHEME, 1952 AND/OR EPS,
                    1995,
                    <br />
                  </strong>
                </div>
                <div style={{ marginLeft: "40px" }}>
                  <strong>
                    (I) I HAVE ENSURED THE CORRECTNESS OF MY UAN/ PREVIOUS PF
                    MEMBER ID.
                  </strong>
                </div>
                <div style={{ marginLeft: "40px", textAlign: "justify" }}>
                  <strong>
                    (II) THIS MAY ALSO BE TREATED AS MY REQUEST FOR TRANSFER OF
                    FUNDS AND SERVICE DETAILS IF APPLICABLE FROM THE PREVIOUS
                    ACCOUNT AS DECLARED ABOVE TO THE PRESENT P.F. ACCOUNT. (THE
                    TRANSFER WOULD BE POSSIBLE ONLY IF THE IDENTIFIED KYC
                    DETAILS APPROVED BY PREVIOUS EMPLOYER HAS BEEN VERIFIED BY
                    PRESENT EMPLOYER USING HIS DIGITAL SIGNATURE CERTIFICATE).
                  </strong>
                  <br />
                  <strong>
                    (III) I AM AWARE THAT I CAN SUBMIT MY NOMINATION FORM
                    THROUGH UAN BASED MEMBER PORTAL.{" "}
                  </strong>
                </div>
              </td>
            </tr>
            <tr>
              <td height="25"></td>
            </tr>
            <tr>
              <td align="left" valign="top" height="30">
                {" "}
                DATE:
                <input type="date" className="clsinputbgnone" />
              </td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <div className="clsflex" style={{ width: "100%" }}>
                  <div style={{ width: "50%" }}>
                    PLACE:
                    <input type="text" className="bgnone" />
                  </div>
                  <div
                    className={`relative ${
                      highlightedFields.includes("EmployeeSignature")
                        ? "border border-red-500 animate-pulse"
                        : ""
                    }`}
                  >
                    <div
                      onClick={() => openSignatureModal("employeeSignature")}
                      className="sign px-2 py-1"
                    >
                      {employeeSignatureData ? (
                        <>
                          <img
                            src={employeeSignatureData}
                            alt="signature"
                            style={{ height: "80px" }}
                          />
                          <p>SIGNATURE OF MEMBER</p>
                        </>
                      ) : (
                        "SIGNATURE OF MEMBER"
                      )}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="10"></td>
            </tr>
            <tr>
              <td
                align="center"
                valign="top"
                style={{
                  padding: "5px 0px 10px 15px",
                  verticalAlign: "text-top",
                  backgroundColor: "#cccccc",
                  display: "block",
                  lineHeight: "normal",
                }}
              >
                <strong>DECLARATION BY PRESENT EMPLOYER</strong>
              </td>
            </tr>
            <tr>
              <td height="10"></td>
            </tr>
            <tr>
              <td align="left" valign="top">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" valign="top" width="25">
                      A.
                    </td>
                    <td align="left" valign="top">
                      THE MEMBER Mr./Ms./Mrs.
                      <input
                        type="text"
                        className="clsinputbar"
                        value={combinedName}
                      />
                      HAS JOINED ON
                      <input type="text" className="clsinputbar" />
                      AND HAS BEEN ALLOTTED PF MEMBER ID
                      <input type="text" className="clsinputbar" />
                    </td>
                  </tr>
                  <tr>
                    <td height="25"></td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" width="25">
                      B.
                    </td>
                    <td align="left" valign="top">
                      <div>
                        IN CASE THE PERSON WAS EARLIER NOT A MEMBER OF EPF
                        SCHEME, 1952 AND EPS, 1995:
                      </div>
                      <div>
                        <ul
                          style={{
                            margin: "0px",
                            marginLeft: "20px",
                            padding: "0px",
                            listStyle: "disc",
                          }}
                        >
                          <li>
                            <strong>(POST ALLOTMENT OF UAN)</strong> THE UAN
                            ALLOTTED FOR THE MEMBER IS
                            <input type="text" className="clsinputbar" />
                          </li>
                          <li>
                            <strong>PLEASE TICK THE APPROPRIATE OPTION:</strong>
                          </li>
                        </ul>
                        <div style={{ marginLeft: "80px", lineHeight: "25px" }}>
                          THE KYC DETAILS OF THE ABOVE MEMBER IN THE UAN
                          DATABASE
                          <br />
                          <div
                            className="checkbox-item"
                            onClick={() => setUploaded(!uploaded)}
                          >
                            <span
                              className="clschkbtn"
                              style={{ paddingBottom: "20px" }}
                            >
                              {uploaded && (
                                <span
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  &#10003;
                                </span>
                              )}
                            </span>
                            <span>HAVE NOT BEEN UPLOADED</span>
                          </div>
                          <div
                            className="checkbox-item"
                            onClick={() => setApproved(!approved)}
                          >
                            <span
                              className="clschkbtn"
                              style={{ paddingBottom: "20px" }}
                            >
                              {approved && (
                                <span
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  &#10003;
                                </span>
                              )}
                            </span>
                            <span>HAVE BEEN UPLOADED BUT NOT APPROVED</span>
                          </div>
                          <div
                            className="checkbox-item"
                            onClick={() => setApprovedWithDSC(!approvedWithDSC)}
                          >
                            <span
                              className="clschkbtn"
                              style={{ paddingBottom: "20px" }}
                            >
                              {approvedWithDSC && (
                                <span
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  &#10003;
                                </span>
                              )}
                            </span>
                            <span>
                              HAVE BEEN UPLOADED AND APPROVED WITH{" "}
                              <strong>DSC</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td height="10"></td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" width="25">
                      C.
                    </td>
                    <td align="left" valign="top">
                      <div>
                        IN CASE THE PERSON WAS EARLIER A MEMBER OF{" "}
                        <strong>EPF</strong> SCHEME, <strong>1952</strong> AND
                        EPS, <strong>1995</strong>:
                      </div>
                      <div>
                        <ul
                          style={{
                            margin: "0",
                            marginLeft: "20px",
                            padding: "0",
                            listStyle: "disc",
                          }}
                        >
                          <li>
                            THE ABOVE MEMBER ID OF THE MEMBER AS MENTIONED IN
                            (A) ABOVE HAS BEEN TAGGED WITH HIS/HER UAN/PREVIOUS
                            MEMBER <strong>ID</strong> AS DECLARED BY MEMBER.{" "}
                          </li>
                          <li>
                            <strong>
                              PLEASE TICK THE APPROPRIATE OPTION:-
                            </strong>
                          </li>
                        </ul>
                        <div style={{ marginLeft: "80px", lineHeight: "25px" }}>
                          <div
                            className="checkbox-item"
                            onClick={() =>
                              setIsKycDetailsApproved(!isKycDetailsApproved)
                            }
                          >
                            <span
                              className="clschkbtn"
                              style={{ paddingBottom: "20px", width: "20px" }}
                            >
                              {isKycDetailsApproved && (
                                <span
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  &#10003;
                                </span>
                              )}
                            </span>
                            <span>
                              {" "}
                              THE KYC DETAILS OF THE ABOVE MEMBER IN THE UAN
                              DATABASE HAVE BEEN APPROVED WITH DIGITAL SIGNATURE
                              CERTIFICATE AND TRANSFER REQUEST HAS BEEN
                              GENERATED ON PORTAL.
                            </span>
                          </div>
                          <div
                            className="checkbox-item"
                            onClick={() => setIsDscRegistered(!isDscRegistered)}
                          >
                            <span
                              className="clschkbtn"
                              style={{ paddingBottom: "20px", width: "20px" }}
                            >
                              {isDscRegistered && (
                                <span
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  &#10003;
                                </span>
                              )}
                            </span>
                            <span>
                              {" "}
                              AS THE <strong>DSC</strong> OF ESTABLISHMENT ARE
                              NOT REGISTERED WITH <strong>EPFO</strong>, THE
                              MEMBER HAS BEEN INFORMED TO FILE PHYSICAL CLAIM (
                              <strong>FORM-13</strong>) FOR TRANSFER OF FUNDS
                              FROM HIS PREVIOUS ESTABLISHMENT.
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td height="50"></td>
            </tr>
            <tr>
              <td>
                <div className="clsflex">
                  <div className="clsw-50">
                    <strong>DATE:</strong>
                    {editableEmployerDate ? (
                      <input
                        type="date"
                        value={employerDate}
                        onBlur={handleBlur}
                        onChange={(e) => setEmployerDate(e.target.value)}
                        className=" px-2 w-full"
                        autoFocus
                      />
                    ) : (
                      <span
                        className="px-2 w-full inline-block"
                        onClick={() => handleEdit("date")}
                      >
                        {employerDate}
                      </span>
                    )}
                  </div>
                  <div
                    className="clsw-50"
                    onClick={() => openSignatureModal("employerSignature")}
                    style={{ textAlign: "right" }}
                  >
                    {employerSignatureData ? (
                      <img
                        src={employerSignatureData}
                        alt="Employer Signature"
                        style={{ height: "80px" }}
                      />
                    ) : (
                      "SIGNATURE OF EMPLOYER WITH SEAL OF ESTABLISHMENT"
                    )}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td height="10"></td>
            </tr>
            <tr>
              <td align="center" valign="middle" style={{ height: "40px" }}>
                <em>
                  Page <strong>3</strong> of <strong>3</strong>
                </em>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="modal-footer flex justify-end items-center px-4 py-2 bg-gray-100 border-t border-gray-200">
        <button
          // onClick={() => SetNdamodal(false)}
          className="btn-cancel py-2 px-2  bg-red-600 text-white rounded border-2 mr-2"
        >
          Cancel
        </button>
        <button
          onClick={generatePdf}
          className="py-2 px-4  bg-green-600 text-white rounded border-2 btn-save"
        >
          Save
        </button>
      </div>
      {showSignatureModal && (
        <SignatureNewModal
          onSave={handleSaveSignature}
          onClose={closeSignatureModal}
        />
      )}
    </div>
  );
}
