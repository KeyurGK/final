import React, { useRef, useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
// import EPFOLogo from "./../Decalartion_Form/images/EPFO_Logo.png";
import EPFOLogo from "./Declaration_Form/images/EPFO_Logo.png";
import SignatureNewModal from "../../model/Signmodel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetCandidateInfo } from "../../Redux/WebFormReducer/action";
import { GetCandidateEpfnomineee, PostCandidateEpfnomineee } from "../../Redux/UserIDReducer/action";
import {
  Attachmentsendtobackend,
  PUTndaform,
} from "../../Redux/NdaDocumentReducer/action";
import { DatePicker } from 'rsuite';
import { format } from 'date-fns';
import InputField from "./InputField";
import InputFieldNominee from "./InputNominee/InputFieldNominee";

const EPFNomineeForm = ({ Setshownominee }) => {
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [signatureData, setSignatureData] = useState(null);
  const [signatureType, setSignatureType] = useState("");
  const dispatch = useDispatch();
  const [employeeSignatureData, setEmployeeSignatureData] = useState(null);
  const [employerSignatureData, setEmployerSignatureData] = useState(null);
  const [employerPlace, setEmployerPlace] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [editableEmployerPlace, setEditableEmployerPlace] = useState(false);
  const [editableNomineeIndex, setEditableNomineeIndex] = useState(null);
  const [TextData, setTextData] = useState(null);
  const [getData,setGetData] = useState('');
  const [employeeSelectedDate, setEmployeeSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const [employerSelectedDate, setEmployerSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const loggeddata = JSON.parse(localStorage.getItem("userlogged"));

  const Candidateinfo = useSelector(
    (state) => state.WebFormReducer.Candidateinfo
  );

  const nomineepfinfo = useSelector(
    (state) => state.UserIDReducer.EPFnomineedata
  );
  const [editableEmployeeDate, setEditableEmployeeDate] = useState(false);
  const [editableEmployerDate, setEditableEmployerDate] = useState(false);
  console.log("nomineepfinfo", nomineepfinfo);
  console.log(nomineepfinfo.Response,"responsssss=ss");
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

 
 

  
  
  // console.log("==========Candidateinfo======",Candidateinfo)



  const userEmpId = loggeddata[0]?.EmailId;

  useEffect(() => {
    dispatch(GetCandidateInfo(userEmpId))
    // .then((res) => {
    //   console.log("resfromget", res);
    //   setGetData(res.data);
    // })
    // .catch((err) => {
    //   console.log("errfromget", err);
    // });
  }, [userEmpId]);

  useEffect(() => {
    if (Candidateinfo.length > 0) {
      dispatch(GetCandidateEpfnomineee(Candidateinfo[0]?.EmpID));
    }
  }, [Candidateinfo]);



  const [data, SetData] = useState("");
  const employeeNameRef = useRef(null);
  const accountNoRef = useRef(null);
  const genderRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const martialStatusRef = useRef(null);
  const addressRef = useRef(null);


  const [basicData, setBasicData] = useState({
    employeeName: "",
    dateOfBirth: new Date().toISOString().split('T')[0],
    accountNo: "",
    gender: "",
    martialStatus: "",
    address: "",
  });


  const [editableBasicData, setEditableBasicData] = useState({
    employeeName: false,
    dateOfBirth: false,
    accountNo: false,
    gender: false,
    martialStatus: false,
    address: false,
  });

  

  const [nominees, setNominees] = useState(
    Array.from({ length: 6 }, () => ({
      name: "",
      address: "",
      relationship: "",
      dob: "",
      amount: "",
      guardian: "",
    }))
  );

const handlePostDetails = (nomineePutResponse)=>{
  const params = `PFNomineeForm/SubmitPFNomineeForm/`;
  console.log(nomineePutResponse,'nomienresrsdr======================')
  dispatch(PostCandidateEpfnomineee(params,nomineePutResponse))
  .then((res) => {
    console.log("res from post===============", res);
    // if(res.payload.data){
    //   alert("PDF saved succesfully!!!")
    // }
  })
  .catch((err) => {
    console.log("err", err);
  });
}




  console.log(nominees[0][1],'nominees out 1')
  const handleNomineeChange = (rowIndex, colIndex, value) => {
    const newNominees = [...nominees];
 
    newNominees[rowIndex][colIndex] = value;
   
  
    // console.log((newNominees[rowIndex][colIndex].split('').reverse().join('')), 'entered newNominees');
    // const updatedNominees = newNominees;
    
   
  };


  // const handleNomineeChange = (rowIndex, colIndex, value) => {
  //   const newNominees = [...nominees];
  //   console.log(typeof(value),'valueeeeee')
  //   newNominees[rowIndex][colIndex] = value;
  //   let newValue = value;
  //   console.log(typeof(newValue),'new   valueeeeee')
  //   setNominees((prevState) =>
  //     prevState.map((nominee, index) => {
  //       if (index === rowIndex) {
  //         // Update the nominee at the specified rowIndex
  //         return {
  //           ...nominee,
  //           name: value, // Assuming you're updating the name field
  //           // Update other fields as needed
  //         };
  //       }
  //      console.log(nominees)
  //       return nominee;
  //     })
  //   );
  // };
  

  // const handleNomineeChange = (rowIndex, colIndex, value) => {
  //   const newNominees = nominees.map((row, index) => {
  //     if (index === rowIndex) {
  //       return {
  //         ...row,
  //         [colIndex]: value,
  //       };
  //     }
  //     return row;
  //   });
  //   console.log(newNominees)
  //   setNominees(newNominees);
  // };
  const [familyMembers, setFamilyMembers] = useState(
    Array.from({ length: 3 }, () => ({
      nameAddress: "",
      age: "",
      relationship: "",
    }))
  );

  // const [familyMembers2, setFamilyMembers2] = useState(
  //   Array.from({ length: 3 }, () => ({
  //     nameAddress: "",
  //     dob: "",
  //     relationship: "",
  //   }))
  // );


  const [familyMembers2, setFamilyMembers2] = useState([
    {
      nameAddress: "",
      dob:new Date().toISOString().split('T')[0],
      relationship: "",
    },
    // Add two more initial members if needed
    {
      nameAddress: "",
      dob:new Date().toISOString().split('T')[0],
      relationship: "",
    },
    {
      nameAddress: "",
      dob: new Date().toISOString().split('T')[0],
      relationship: "",
    },
  ]);

  const handleFamilyMemberChange = (index, col, value) => {
    const newFamilyMembers = [...familyMembers];
    newFamilyMembers[index][col] = value;
   
  };

  const handleFamilyMemberChange2 = (index, col, value) => {
    const newFamilyMembers2 = [...familyMembers2];
    newFamilyMembers2[index][col] = value;
  
  };

  function convertDateFormat(inputDate) {
    // Check if inputDate is null or undefined
    if (inputDate === null || inputDate === undefined) {
      return null;
    }

    // Split the input date string by '/'
    const parts = inputDate.split("/");

    // Check if the input date has three parts (day, month, year)
    if (parts.length === 3) {
      // Extract day, month, and year
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];

      // Create a new date string in the "yyyy/mm/dd" format
      const newDateString = `${year}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;

      return newDateString;
    } else {
      // If the input date format is invalid, return null
      return null;
    }
  }

  function convertDateFormatyyyymmdd(dateString) {
    // Split the date string into day, month, and year parts
    const [day, month, year] = dateString.split("/");
  
    // Create a new Date object using the parts in yyyy/mm/dd format
    const dateObject = new Date(`${year}-${month}-${day}`);
  
    // Get the year, month, and day from the date object
    const newYear = dateObject.getFullYear();
    const newMonth = String(dateObject.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
    const newDay = String(dateObject.getDate()).padStart(2, "0");
  
    // Return the date in yyyy-mm-dd format
    return `${newYear}-${newMonth}-${newDay}`;
  }

  
    useEffect(() => {

      
      if (nomineepfinfo?.Response === 'No records found') {
        setBasicData((prevState) => ({
          ...prevState,
          employeeName: '',
          dateOfBirth:'',
          accountNo:'' ,
          gender:'' ,
          martialStatus:'' ,
          address:'',
        }));
      
        setNominees((prevState) =>
          prevState.map((nominee, index) => {
            if (index === 0) {
              return {
                ...nominee,
                name: '',
                address: '',
                relationship: '',
                dob: '',
                amount: '',
                guardian: '',
              };
            }
            return nominee;
          })
        );
      
        setFamilyMembers((prevState) =>
          prevState.map((nominee, index) => {
            if (index === 0) {
              return {
                ...nominee,
                nameAddress: '',
                age: '',
                relationship: '',
              };
            }
            return nominee;
          })
        );
      
        setFamilyMembers2((prevState) =>
          prevState.map((nominee, index) => {
            if (index === 0) {
              return {
                ...nominee,
                nameAddress: '',
                dob: '',
                relationship: '',
              };
            }
            return nominee;
          })
        );
      }else{
        if (Object.keys(nomineepfinfo).length > 0) {
        
          setEmployeeSelectedDate(nomineepfinfo?.Table[0]?.EmpDate);
         
          setBasicData((prevState) => ({
            ...prevState,
            employeeName: nomineepfinfo?.Table[0]?.EmpName,
            dateOfBirth:convertDateFormatyyyymmdd(nomineepfinfo?.Table[0]?.DOB),
            accountNo: nomineepfinfo?.Table[0]?.AccountNo,
            gender: nomineepfinfo?.Table[0]?.Gender,
            martialStatus: nomineepfinfo?.Table[0]?.MaritalStatus,
            address: nomineepfinfo?.Table[0]?.Address,
          }));
    
          // Update nominees array
          setNominees((prevState) =>
            prevState.map((nominee, index) => {
              if (index === 0) {
                return {
                  ...nominee,
                  name: nomineepfinfo?.Table1[0]?.NomineeName,
                  address: nomineepfinfo?.Table1[0]?.Address,
                  relationship: nomineepfinfo?.Table1[0]?.RelationshipWithMember,
                  dob: nomineepfinfo?.Table1[0]?.DOB,
                  amount: nomineepfinfo?.Table1[0]?.TotalAmountOrShare,
                  guardian: nomineepfinfo?.Table1[0]?.GuardianDetail,
                };
              }
              return nominee;
            })
          );
    
          setFamilyMembers((prevState) =>
            prevState.map((nominee, index) => {
              if (index === 0) {
                return {
                  ...nominee,
                  nameAddress: nomineepfinfo?.Table2[0]?.FamilyMemberDetails,
                  age: nomineepfinfo?.Table2[0]?.Age,
                  relationship: nomineepfinfo?.Table2[0]?.RelationshipWithMember,
                };
              }
              return nominee;
            })
          );
    
          setFamilyMembers2((prevState) =>
            prevState.map((nominee, index) => {
              if (index === 0) {
                return {
                  ...nominee,
                  nameAddress: nomineepfinfo?.Table3[0]?.NomineeDetails,
                  dob: convertDateFormatyyyymmdd(nomineepfinfo?.Table3[0]?.DOB),
                  relationship: nomineepfinfo?.Table3[0]?.RelationshipWithMember,
                };
              }
              return nominee;
            })
          );
        }
      }
  
    }, [nomineepfinfo]);
  
  
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setBasicData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
const { gender } = basicData;
  const handleEdit = (field) => {
    setEditableBasicData((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleEditEmployeeDate = ()=>{
    setEditableEmployeeDate(true);
  }

  const handleEmployeeDate = (date)=>{
    setEmployeeSelectedDate(date);
  }




  const handleBasicDataChange = (field, value) => {
    setBasicData((prevState) => ({ ...prevState, [field]: value }));
    console.log(basicData.dateOfBirth,"dobbbbbb")
  };
  console.log(basicData.dateOfBirth,"dobbbbbb========dsfsdf")
  const openSignatureModal = (role) => {
    setShowSignatureModal(true);
    // Set the appropriate state variable based on the role
    switch (role) {
      case "employee":
        setSignatureType("employee");
        break;
      case "employer":
        setSignatureType("employer");
        break;
      default:
        break;
    }
  };

  const closeSignatureModal = () => {
    setShowSignatureModal(false);
  };

  const handleSaveSignature = (data) => {
    // Update the appropriate state variable based on the saved signature
    console.log("Signature Data:", data);
    switch (signatureType) {
      case "employee":
        setEmployeeSignatureData(data.data);
        break;
      case "employer":
        setEmployerSignatureData(data.data);
        break;
      default:
        break;
    }
    closeSignatureModal();
  };
  console.log(Candidateinfo[0]?.EmpID,"emp id==============")
  const pdf_api = `https://globalsync.acnhealthcare.com/GetIntegrationAPI/api/NDA/uploadAttachments/${Candidateinfo[0]?.EmpID}`;

  const sendPdfToBackend = (formData) => {
    console.log("========formdata======", formData);

    const nomineePutResponse = {
      ObjPFNomineeForm: {
        EmpID: Candidateinfo[0]?.EmpID,
        EmpName: basicData.employeeName,
        FatherOrHusbandName: "",
        DOB: (basicData.dateOfBirth),
        AccountNo: basicData.accountNo,
        Gender: basicData.gender,
        MaritalStatus: basicData.gender,
        Address: basicData.address, // not required
        EmpDate: convertDateFormatyyyymmdd(employeeSelectedDate), //sets automatically
        EmployerName: "", // not required
        EmployerDate: "", //sets automatically
        EmployerNameAndAddress: employerAddress,
        EmployerPlace: employerPlace,
        EmployerDate1: "", // sets automatically
      },
      NomineeEPF: [
        {
          NomineeName: nominees[0].name,
          NomineeAddress: nominees[0].address,
          NomineeRelationship: nominees[0].relationship,
          NomineeDOB: convertDateFormat(nominees[0].dob),
          NomineeTotalShare: nominees[0].amount,
          NameAndAddrOfGuardian: nominees[0].guardian,
        },
      ],
      NomineeEPS: [
        {
          EPSSNo: "1",
          NameAndAddrOfFamily: familyMembers[0].nameAddress,
          Age: familyMembers[0].age,
          RealtionshipWithMember: familyMembers[0].relationship,
        },
      ],
      NomineeWP: [
        {
          NameAndAddrOfNominee: familyMembers2[0].nameAddress, 
          WpDOB: (familyMembers2[0].dob), 
          WpRealtionshipWithMember: familyMembers2[0].relationship, 
        },
      ],
    };

  //   if(nomineepfinfo?.Response === 'No records found'){
  //     handlePostDetails(nomineePutResponse)      
  // }else{

  //   const param = "PFNomineeForm/UpdatePFNomineeForm/";
  //   dispatch(PUTndaform(param, nomineePutResponse))
  //         .then((res) => {
  //           console.log("res", res);
  //         })
  //         .catch((err) => {
  //           console.log("err", err);
  //         });
  // }
   
  
  dispatch(Attachmentsendtobackend(Candidateinfo[0]?.EmpID, formData))
      .then((res) => {
        console.log("rees", res);
        console.log("PDF sent successfully.");    
        if(res?.payload?.data === 'Files uploaded successfully.')     {
          if(nomineepfinfo?.Response === 'No records found'){
            handlePostDetails(nomineePutResponse)      
        }else{
      
          const param = "PFNomineeForm/UpdatePFNomineeForm/";
          dispatch(PUTndaform(param, nomineePutResponse))
                .then((res) => {
                  console.log("res", res);
                  if(res.payload.data){
                    alert("PDF saved succesfully!!!")
                  }
                })
                .catch((err) => {
                  console.log("err", err);
                });
        }
  
        }     // Update employee information

       

        
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const [highlightedFields, setHighlightedFields] = useState([]);
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

  console.log("date of birth================",basicData.dateOfBirth);
  console.log(familyMembers2[0].dob,'employeeee wpssssssss  dateeeee');

  // const generatePdf = () => {
  //   const isEmpty = Object.values(basicData).some((value) => value === "");
  //   // if (isEmpty) {
  //   //   alert("Please fill in all fields.");
  //   // }
  //   // if (basicData.employeeName === "") {
  //   //   highlightFields(["EmployeeName"]);
  //   //   scrollToRef(employeeNameRef);
  //   //   alert("Please fill the employee name before saving the PDF.");
  //   //   return;
  //   // }
  //   // if (basicData.dateOfBirth === "") {
  //   //   highlightFields(["DateOfBirth"]);
  //   //   scrollToRef(dateOfBirthRef);
  //   //   alert("Please fill the employee dob before saving the PDF.");
  //   //   return;
  //   // }
  //   // if (basicData.accountNo === "") {
  //   //   highlightFields(["AccountNo"]);
  //   //   scrollToRef(accountNoRef);
  //   //   alert("Please fill the employee account number before saving the PDF.");
  //   //   return;
  //   // }
  //   // if (basicData.gender === "") {
  //   //   highlightFields(["Gender"]);
  //   //   scrollToRef(genderRef);
  //   //   alert("Please fill the employee gender before saving the PDF.");
  //   //   return;
  //   // }
  //   // if (basicData.martialStatus === "") {
  //   //   highlightFields(["MartialStatus"]);
  //   //   scrollToRef(martialStatusRef);
  //   //   alert("Please fill the employee martial status before saving the PDF.");
  //   //   return;
  //   // }
  //   // if (basicData.address === "") {
  //   //   highlightFields(["Address"]);
  //   //   scrollToRef(addressRef);
  //   //   alert("Please fill the employee address before saving the PDF.");
  //   //   return;
  //   // }
  //   // if (
  //   //   nominees[0].name === "" ||
  //   //   nominees[0].address === "" ||
  //   //   nominees[0].relationship === "" ||
  //   //   nominees[0].dob === "" ||
  //   //   nominees[0].amount === ""
  //   // ) {
  //   //   alert("Please fill in the nominee's first row before saving the PDF.");
  //   //   return;
  //   // }
  //   // // if (department.trim() === "") {
  //   //   alert("Please enter the department before saving the PDF.");
  //   //   return;
  //   // }
  //   // if (setEmployeeSignatureData.data === "") {
  //   //   alert("Please Sign the Document before saving the PDF.");
  //   //   return;
  //   // }

  //   const input = document.getElementById("pdf-content");
  //   if (!input) {
  //     console.error("Element with id 'pdf-content' not found.");
  //     return;
  //   }
  //   html2pdf()
  //     .from(input)
  //     .set({
  //       // margin: [2, 2],
  //       margin: 10,
  //       filename: "NomineeForm.pdf",
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: "mm", format: "a3", orientation: "portrait" },
  //       pagebreak: { before: ".page-break" },
  //     })

  //     .outputPdf("blob")
  //     .then((blob) => {
  //       const formData = new FormData();
  //       formData.append("file", blob, "NomineeForm.pdf");

  //       const signatureBlob = base64ToBlob(employeeSignatureData, "image/png");
  //       formData.append("signature", signatureBlob, "signature_nominee.png");

  //       // sendPdfToBackend(formData);
  //       console.log("hittingggggggg=============")
  //       dispatch(Attachmentsendtobackend(Candidateinfo[0]?.EmpID, formData))
  //       .then((res) => {
  //         console.log("rees", res);
  //         console.log("PDF sent successfully.");

  //       }).catch((err)=>{
  //          console.log("errr",err)
  //       })
  //     });

  // };

  // const base64ToBlob = (base64, mime) => {
  //   const byteCharacters = atob(base64.split(",")[1]);
  //   const byteNumbers = new Array(byteCharacters.length);
  //   for (let i = 0; i < byteCharacters.length; i++) {
  //     byteNumbers[i] = byteCharacters.charCodeAt(i);
  //   }
  //   const byteArray = new Uint8Array(byteNumbers);
  //   return new Blob([byteArray], { type: mime });
  // };

  const generatePdf = () => {
    const isEmpty = Object.values(basicData).some((value) => value === "");
    // if (isEmpty) {
    //     alert("Please fill in all fields.");
    //     return;
    // }

    if (basicData.employeeName === "") {
      highlightFields(["EmployeeName"]);
      scrollToRef(employeeNameRef);
      alert("Please fill the employee name before saving the PDF.");
      return;
    }
    if (basicData.dateOfBirth === "01/01/1900") {
      highlightFields(["DateOfBirth"]);
      scrollToRef(dateOfBirthRef);
      alert("Please fill the employee dob before saving the PDF.");
      return;
    }
    if (basicData.accountNo === "") {
      highlightFields(["AccountNo"]);
      scrollToRef(accountNoRef);
      alert("Please fill the employee account number before saving the PDF.");
      return;
    }
    if (basicData.gender === "") {
      highlightFields(["Gender"]);
      scrollToRef(genderRef);
      alert("Please fill the employee gender before saving the PDF.");
      return;
    }
    if (basicData.martialStatus === "") {
      highlightFields(["MartialStatus"]);
      scrollToRef(martialStatusRef);
      alert("Please fill the employee martial status before saving the PDF.");
      return;
    }
    if (basicData.address === "") {
      highlightFields(["Address"]);
      scrollToRef(addressRef);
      alert("Please fill the employee address before saving the PDF.");
      return;
    }
    if (
      nominees[0].name === "" ||
      nominees[0].address === "" ||
      nominees[0].relationship === "" ||
      nominees[0].dob === "" ||
      nominees[0].amount === ""
    ) {
      alert("Please fill in the nominee's first row before saving the PDF.");
      return;
    }

    if (employeeSignatureData === null) {
      alert("Please Sign the Document before saving the PDF.");
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
        margin: 10,
        filename: "NomineeForm.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a3", orientation: "portrait" },
        pagebreak: { before: ".page-break" },
      })
      .save()
      .outputPdf("blob")
      .then((blob) => {
        const formData = new FormData();
        formData.append("file", blob, "NomineeForm.pdf");

        const signatureBlob = base64ToBlob(employeeSignatureData, "image/png");
        console.log("Signature Blob:", signatureBlob);

        sendPdfToBackend(formData);
        // if (signatureBlob) {
        //   formData.append("signature", signatureBlob, "signature_nominee.png");

        //   console.log("Form data prepared:", formData);

        //   // Assuming `dispatch` is correctly configured to send the request
        //   console.log("Sending PDF to backend...");
        //   dispatch(Attachmentsendtobackend(Candidateinfo[0]?.EmpID, formData))
        //     .then((res) => {
        //       console.log("Response from backend:", res);
        //       console.log("PDF sent successfully.");
        //     })
        //     .catch((err) => {
        //       console.error("Error sending PDF to backend:", err);
        //     });
        // } else {
        //   console.error("Signature Blob is null. Cannot append to FormData.");
        // }
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  const base64ToBlob = (base64, mime) => {
    if (!base64 || !mime) {
      console.error("Base64 data or MIME type is missing.");
      return null;
    }
    try {
      const byteCharacters = atob(base64.split(",")[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: mime });
    } catch (error) {
      console.error("Error converting base64 to Blob:", error);
      return null;
    }
  };
  console.log(basicData.dateOfBirth,'dobbbbbbbbbbbbb')
  console.log(typeof(familyMembers[0].age),'ageeeeeeee')
  return (
    <>
      <div onClick={closeSignatureModal} className="w-[1149px] m-auto">
        <div onClick={(e) => e.stopPropagation()}>
          <div
            id="pdf-content"
            className=" px-2 py-1   border-black  bg-[#fffff]"
          >
            <div
              className=" sedan-sc-regular border-black  text-left leading-1 tracking-wide py-4 mx-auto w-[100%]  
         gap-4 px-2  rounded"
            >
              <h2 className="px-4 text-end font-semibold">(FORM 2 REVISED) </h2>

              <div className="px-4 border-green-700 py-2">
                <h1 className="text-[17px]  font-bold  text-center">
                  NOMINATION AND DECLARATION FORM FOR UNEXEMPTED/EXEMPTED
                  ESTABLISHMENTS
                </h1>
                <h1 className="text-[15px] py-1 font-normal text-center">
                  Declaration and Nomination Form under the Employees Provident
                  Funds and Employees Pension Schemes
                </h1>
                <h1 className="text-[15px] font-normal text-center">
                  (Paragraph 33 and 61 (1) of the Employees Provident Fund
                  Scheme 1952 and Paragraph 18 of the Employees Pension Scheme
                  1995)
                </h1>
              </div>


              


              <div className="flex" style={{ marginTop: '50px' }}>
                <div className="flex">
                    <div>1. Name (IN BLOCK LETTERS) :</div>
                    <div style={{ width: '265px', textAlign: 'center', paddingRight: '5px' }}>
                        
                            {/* <input type="text" className="border-b-[1px] border-gray-300 w-full"  /> */}
                            {editableBasicData.employeeName ? (
                          <input
                            type="text"
                            value={basicData.employeeName}
                            onChange={(e) =>
                              handleBasicDataChange(
                                "employeeName",
                                e.target.value
                              )
                            }
                            autoFocus
                            className={`border-b-[1px] border-gray-300 w-full`}
                          />
                        ) : (
                          <span
                            className={` ${
                              basicData.employeeName === ""
                                ? "border-b-[1px] border-gray-300 w-full block text-left"
                                : ""
                            }  border-b-[1px] border-gray-300 w-full block text-left`}
                            onClick={() => handleEdit("employeeName")}
                          >
                            {basicData.employeeName || " "}
                          </span>
                        )}
                       
                            Name 
                        
                    </div>
                    <div style={{ width: '265px', textAlign: 'center', paddingRight: '5px' }}>
                        <span>
                            <input type="text" className="border-b-[1px] border-gray-300 w-full" />
                            <br />
                            Father’s / Husband’s Name
                        </span>
                    </div>
                    <div style={{textAlign: 'center', paddingRight: '5px' }}>
                        <span>
                            <input type="text" className="border-b-[1px] border-gray-300 w-full" />
                            <br />
                            Surname
                        </span>
                    </div>
                </div>
            </div>




              <div className="flex" style={{ marginTop: '10px' }}>

                <div className="flex">
                  <div>2. Date of Birth : </div>
                  <div style={{ paddingRight: '15px' }}>
                  {editableBasicData.dateOfBirth ? (
                          <input
                            type="date"
                            value={basicData.dateOfBirth}
                            onChange={(e) =>
                              handleBasicDataChange(
                                "dateOfBirth",
                                e.target.value
                              )
                            }
                            autoFocus
                            className={`border-b-[1px] border-gray-300 w-full ${
                              basicData.dateOfBirth === ""
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                        ) : (
                          <span
                            className={` ${
                              basicData.dateOfBirth === ""
                                ? "border-b-[1px] border-gray-300 w-full"
                                : ""
                            }   border-b-[1px] border-gray-300 w-full`}
                            onClick={() => handleEdit("dateOfBirth")}
                          >
                            {basicData.dateOfBirth}
                          </span>
                        )}
                  </div>
                  <div>3. Account No.</div>
                  <div className="w-[350px]">
                  {editableBasicData.accountNo ? (
                          <input
                            type="text"
                            value={basicData.accountNo}
                            onChange={(e) =>
                              handleBasicDataChange("accountNo", e.target.value)
                            }
                            autoFocus
                            className="border-b-[1px] border-gray-300 w-full"
                          />
                        ) : (
                          <span
                            className={` ${
                              basicData.accountNo === ""
                                ? "border-b-[1px] border-gray-300 w-full"
                                : ""
                            }   border-b-[1px] border-gray-300 w-full`}
                            onClick={() => handleEdit("accountNo")}
                          >
                            {basicData.accountNo || " "}
                          </span>
                        )}
                   
                  </div>
                </div>
              </div>








              <div className="flex" style={{ marginTop: '18px' }}>

                <div className="flex">
                  <div>4. *Sex : MALE/FEMALE:</div>
                  <div style={{ paddingRight: '15px' }}>
                  {editableBasicData.gender ? (
                    <span className="border-b-[1px] border-gray-300 w-full">
                      {basicData.gender}
                    </span>
                  ) : (
                    <InputFieldNominee
                      type="select" 
                      name="gender"
                      value={basicData.gender}
                       onChange={handleInputChange}
                      // error={submitted && errors.EmpGender}
                      options={["Male", "Female", "Other"]}
                      
                    />

             


                  )}
                    
                  </div>
                  <div>5. Marital Status</div>
                  <div>
                   {editableBasicData.martialStatus ? (
                    <span className="border-b-[1px] border-gray-300 w-full">
                      {basicData.martialStatus}
                    </span>
                  ) : (
                    <InputFieldNominee
                      type="select" // Set the input type to select
                      name="martialStatus"
                      value={basicData.martialStatus}
                      onChange={handleInputChange}
                      // error={submitted && errors.EmpGender}
                      options={["Married", "UnMarried", "Single", "Divorcee"]} 
                     // Provide options for the dropdown
                    />
                  )}
                  </div>
                </div>
              </div>


              <div className="flex" style={{ marginTop: '18px' }}>

                <div className="flex">
                  <div>6. Address Permanent / Temporary :</div>
                  <div style={{ width: '700px' }}>

                  {/* <textarea className="border-b-[1px] border-gray-300 w-full"></textarea> */}
                  {editableBasicData.address ? (
                          <textarea
                            type="textarea"
                            value={basicData.address}
                            onChange={(e) =>
                              handleBasicDataChange("address", e.target.value)
                            }
                            autoFocus
                            className="p-2 w-full border-b-[1px] border-gray-300"
                          ></textarea>
                        ) : (
                          <span
                            className={` ${
                              basicData.address === ""
                                ? "px-1 border-b-[1px] border-gray-300 h-[50px]"
                                : ""
                            }   px-2 py-2 w-full inline-block border-b-[1px] border-gray-300`}
                            onClick={() => handleEdit("address")}
                          >
                            {basicData.address || " "}
                          </span>
                        )}
                    
                  </div>
                </div>
              </div>










              

              {/*  */}
              <div className="px-4 border-green-700 py-2">
                <h1 className="text-xl  font-bold mb-6 text-center">
                  PART-A (EPF)
                </h1>
                <h1 className="text-sm  font-normal text-start">
                  hereby nominate the person(s)/cancel the nomination made by me
                  previously and nominate the person(s) mentioned below to
                  receive the amount standing to my credit in the Employees
                  Provident Fund, in the event of my death
                </h1>

                <div className=" px-4 py-2"></div>

                {/*  second point */}

                {/* ====================================  */}
              </div>

              <div className="mx-auto rounded px-2 pb-8 mb-4">
                <table className="clsbordercollapse clstbl">
                  <thead>
                    <tr>
                      <th className="border font-semibold text-xs text-center border-gray-300 p-2">
                        Name of the Nominee(s)
                      </th>
                      <th className="border font-semibold text-xs text-center border-gray-300 p-2">
                        Address
                      </th>
                      <th className="border font-semibold text-xs text-center border-gray-300 p-2">
                        Nominee’s relationship with the member
                      </th>
                      <th className="border font-semibold text-xs text-center border-gray-300 p-2">
                        Date of Birth
                      </th>
                      <th className="border font-semibold text-xs text-center border-gray-300 p-2">
                        Total amount or share of accumulations in Provident
                        Funds to be paid to each nominee
                      </th>
                      <th className="border font-semibold text-xs text-center border-gray-300 p-2">
                        If the nominee is minor, name and address of the
                        guardian who may receive the amount during the minority
                        of the nominee
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                  <tr>
                        <td align="center">1</td>
                        <td align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center">5</td>
                        <td align="center">6</td>
                    </tr>

                    {nominees.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {Object?.keys(row)?.map((col, colIndex) => (
                          <td
                            key={colIndex}
                            className="border text-left border-gray-300 p-1 h-[100px] w-[90px]"
                          >
                            <div
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              name={`${rowIndex}-${colIndex}`} // Unique name for each cell
                              onInput={(e) =>
                                handleNomineeChange(
                                  rowIndex,
                                  col,
                                  e.target.textContent
                                )
                              }
                              maxLength={50}
                              style={{
                                width: "169px",
                                height: "100px",
                                overflowWrap: "break-word",
                                whiteSpace: "pre-wrap",
                                overflow: "hidden",
                                textAlign: "left",
                              }}
                              autoFocus={true}
                              className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 py-2 px-2 "
                            >
                              {row[col]}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* 
{nominees.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.keys(row).map((col, colIndex) => (
              <td
                key={colIndex}
                className="border text-left border-gray-300 p-1 h-[100px] w-[90px]"
              >
                <div
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  name={`${rowIndex}-${colIndex}`} // Unique name for each cell
                  onInput={(e) =>
                    handleNomineeChange(
                      rowIndex,
                      col,
                      e.target.textContent
                    )
                  }
                  maxLength={50}
                  style={{
                    width: "169px",
                    height: "100px",
                    overflowWrap: "break-word",
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    textAlign: "left",
                  }}
                  autoFocus={true}
                  className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 py-2 px-2 "
                >
                  {row[col]}
                </div>
              </td>
            ))}
          </tr>
        ))} */}
                  </tbody>
                </table>
              </div>

              {/* table Nomieee End*/}

              <div className=" px-4 flex  gap-5 border-green-700 py-2">
                <span>1</span>

                <h1 className="text-sm  font-normal text-start">
                  *Certified that I have no family as defined in para 2 (g) of
                  the Employees Provident Fund Scheme 1952 and should I acquire
                  a family hereafter the above nomination should be deemed as
                  cancelled.{" "}
                </h1>
              </div>

              <div className=" px-4 flex  gap-5 border-green-700 py-2">
                <span>2</span>

                <h1 className="text-sm  font-normal text-start">
                  * Certified that my father/mother is/are dependent upon me.{" "}
                </h1>
              </div>

              {/* ====================================  */}
              <div className="px-4 flex justify-between gap-5 border-green-700 py-4">
                <h2>Strike out whichever is not applicable </h2>

                <h2 className="text-sm  text-start">
                  <td
                    onClick={() => openSignatureModal("employee")}
                    className="sign px-2 py-1"
                  >
                    {employeeSignatureData ? (
                      <span>
                        <img
                          src={employeeSignatureData}
                          alt="employeeSignature"
                          style={{ height: "50px", width: "50px" }}
                        />
                        <span className="sign px-2 py-1">
                          Signature/or thumb impression of the subscriber to
                          Sign
                        </span>
                      </span>
                    ) : (
                      <span className="sign px-2 py-1">
                        Signature/or thumb impression of the subscriber to Sign
                      </span>
                    )}
                  </td>
                </h2>
              </div>

              <div className="px-4 border-green-700 py-2">
                <h1 className="text-xl  font-bold mb-6 text-center">
                  PART- (EPS)
                </h1>
                <h1 className="text-sm  font-bold mb-6 text-center">Para 18</h1>

                <h1 className="text-sm  font-semibold text-start">
                  I here by furnish below particulars of the members of my
                  family who would be eligible to receive Widow/Children Pension
                  in the event of my premature death in service.
                </h1>
              </div>

              {/* =========== */}

              {/* table Nomieee End*/}
              <div className="mx-auto rounded px-2 pb-8 mb-4">
                <table className="clsbordercollapse clstbl">
                  <thead>
                    <tr>

                    <th width="100">Sr. No</th>

                      <th className="border font-semibold text-center border-gray-300 p-2">
                        Name & Address of The Family Member
                      </th>
                      <th className="border font-semibold text-center border-gray-300 p-2">
                        Age
                      </th>
                      <th className="border font-semibold text-center border-gray-300 p-2">
                        Relationship with member
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                  <tr>
                        <td align="center">(1)</td>
                        <td align="center">(2)</td>
                        <td align="center">(3)</td>
                        <td align="center">(4)</td>
                    </tr>

                    {familyMembers.map((member, index) => (
                      <tr key={index}>

<td align="center">{index+1}</td>

                        {Object.keys(member).map((col, subIndex) => (
                          <td
                            key={subIndex}
                            className="border text-left border-gray-300 p-1 h-[100px] w-[50px]"
                          >
                            <div
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              name={`${index}-${subIndex}`} // Unique name for each cell
                              onInput={(e) =>
                                handleFamilyMemberChange(
                                  index,
                                  col,
                                  e.target.textContent
                                )
                              }
                              maxLength={50}
                              style={{
                                width: "325px",
                                height: "100px",
                                overflowWrap: "break-word",
                                whiteSpace: "pre-wrap",
                                overflow: "hidden",
                                textAlign: "left",
                              }}
                              autoFocus={true}
                              className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 py-2 px-2 "
                            >
                              {member[col]}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-4 border-green-700 py-2">
                <h1 className="text-sm py-2 font-semibold text-start">
                  Certified that I have no family as defined in para 2 (vii) of
                  the Employees’s Family Pension Scheme 1995 and should I
                  acquire a family hereafter I shall furnish Particulars there
                  on in the above form.
                </h1>

                <h1 className="text-sm py-2 font-semibold text-start">
                  I hereby nominate the following person for receiving the
                  monthly widow pension (admissible under para 16 2 (a) (i) &
                  (ii) in the event of my death without leaving any eligible
                  family member for receiving pension.
                </h1>
              </div>

              <div className="mx-auto rounded px-2 pb-8 mb-4">
                <table className="clsbordercollapse clstbl w-full">
                  <thead>
                    <tr>
                      <th className="border font-semibold text-center border-gray-300 p-2">
                        Name & Address of The Family Member
                      </th>
                      <th className="border font-semibold text-center border-gray-300 p-2">
                        Date of Birth
                      </th>
                      <th className="border font-semibold text-center border-gray-300 p-2">
                        Relationship with member
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {familyMembers2.map((member, index) => (
                      <tr key={index}>
                        {Object.keys(member).map((col, subIndex) => (
                          <td
                            key={subIndex}
                            className="border text-left border-gray-300 p-1 h-[100px] w-[50px]"
                          >
                            <div
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              name={`${index}-${subIndex}`} // Unique name for each cell
                              onInput={(e) =>
                                handleFamilyMemberChange2(
                                  index,
                                  col,
                                  e.target.textContent
                                )
                              }
                              maxLength={50}
                              style={{
                                width: "325px",
                                height: "100px",
                                overflowWrap: "break-word",
                                whiteSpace: "pre-wrap",
                                overflow: "hidden",
                                textAlign: "left",
                              }}
                              autoFocus={true}
                              className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 py-2 px-2 "
                            >
                              {member[col]}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))} */}


{familyMembers2.map((member, index) => (
          <tr key={index}>
            {Object.keys(member).map((col, subIndex) => (
              <td key={subIndex} className="border text-left border-gray-300 p-1">
                {col === "dob" ? (

                  <DatePicker
                    selected={familyMembers2[0]?.dob ? (familyMembers2[0]?.dob) : null}
                    onChange={(date) => {
                      const newDate = date ? format(new Date(date),"yyyy-MM-dd") : "";
                      handleFamilyMemberChange2(index, col, newDate);
                    }}
                    dateFormat="yyyy-MM-dd"
                    className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 py-2 px-2"
                  />

                ) : (
                  <div
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    name={`${index}-${subIndex}`} // Unique name for each cell
                    onInput={(e) =>
                      handleFamilyMemberChange2(index, col, e.target.textContent)
                    }
                    maxLength={50}
                    style={{
                      width: "100%",
                      height: "100px",
                      overflowWrap: "break-word",
                      whiteSpace: "pre-wrap",
                      overflow: "hidden",
                      textAlign: "left",
                    }}
                    autoFocus={true}
                    className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 py-2 px-2"
                  >
                    {member[col]}
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
                  </tbody>
                </table>
              </div>

              {/* Sign  */}

              <div className="px-4 flex justify-between gap-5 border-green-700 py-4">
                <h2>
                  Date:{" "}

                  {editableEmployeeDate ? (
                          <DatePicker
                            selected={
                             employeeSelectedDate
                                ? new Date(employeeSelectedDate)
                                : null
                            }
                            onChange={(date) =>
                              handleEmployeeDate(                               
                                date ? format(new Date(date),"yyyy-MM-dd") : "" // Format the selected date to "yyyy/MM/dd" format
                              )
                            }
                            dateFormat="yyyy/MM/dd" // Set the date format to display in the DatePicker
                            autoFocus
                            className={`p-2 w-full border border-gray-300 rounded h-[60px] ${
                              employeeSelectedDate === ""
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                        ) : (
                          <span
                            className={` ${
                              employeeSelectedDate === ""
                                ? "border-2 px-1 border-gray-100 h-[50px]"
                                : ""
                            }   px-2 py-2 w-full inline-block`}
                            onClick={() => handleEditEmployeeDate()}
                          >
                            {employeeSelectedDate}
                          </span>
                        )}
                
                </h2>

                <h2 className="text-sm  font-semibold text-start">
                  {/* Signature/or thumb impression of the subscriber */}
                </h2>
              </div>

              {/* Sign  */}

              <div className="px-4 flex justify-between gap-5 border-green-700 py-4">
                <h2>{/* Date: ________________  */}</h2>

                <h2 className="text-sm  font-normal text-start">
                  <td
                    onClick={() => openSignatureModal("employee")}
                    className="sign px-2 py-1"
                  >
                    {employeeSignatureData ? (
                      <span>
                        <img
                          src={employeeSignatureData}
                          alt="employeeSignature"
                          style={{ height: "50px", width: "50px" }}
                        />
                        <span className="sign px-2 py-1">
                          Signature/or thumb impression of the subscriber to
                          Sign
                        </span>
                      </span>
                    ) : (
                      <span className="sign px-2 py-1">
                        Signature/or thumb impression of the subscriber to Sign
                      </span>
                    )}
                  </td>
                </h2>
              </div>

              <div className="border px-4 mt-20 border-gray-600" />

              <div className="px-4 border-green-700 py-4">
                <h1 className="text-md  font-semibold mb-6 text-center">
                  CERTIFICATE BY EMPLOYER
                </h1>
                <h1 className="text-sm py-2 font-normal text-center">
                  Certified that the above declaration and nomination has been
                  signed / thumb impressed before me by Shri / Smt./ Miss ___
                  {basicData.employeeName}___ employed in my establishment after
                  he/she has read the entries / the entries have been read over
                  to him/her by me and got confirmed by him/her.
                </h1>
              </div>

              <div className="px-4 flex justify-between gap-5 border-green-700 py-8">
                <h2 className="">Date: </h2>

                <h2 className="text-sm  font-normal text-start">
                  <td className="sign px-2 py-1">
                    <span className="sign px-2 py-1">
                      {" "}
                      Signature of the employer or other authorised officer of
                      the establishment
                    </span>
                  </td>
                </h2>
              </div>

              {/* Sign  */}

              <div className=" flex justify-between px-4 py-8">
                <div>
                  <h2> Name & address of the factory/Established </h2>
                </div>

                <div className="px-4 gap-5 border-green-700 py-2">
                  <h2 className="text-sm text-start">Place : </h2>
                  <h2 className="">Date : </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer flex justify-end items-center px-4 py-2 bg-gray-100 border-t border-gray-200">
            <button
              onClick={() => Setshownominee(false)}
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
        </div>
      </div>

      {showSignatureModal && (
        <SignatureNewModal
          onSave={handleSaveSignature}
          onClose={closeSignatureModal}
        />
      )}
    </>
  );
};

export default EPFNomineeForm;
