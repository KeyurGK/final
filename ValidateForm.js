export const ValidateForm = (formData) => {
  const newErrors = {};


  if (!formData.monthexp) {
    newErrors.monthexp = "months required.";
  }

 
  if (!formData.Resume) {
    newErrors.Resume = "required.";
  }
  if (!formData.profilepic) {
    newErrors.profilepic = " required.";
  }
  

  if (!formData.Firstname.trim()) {
    newErrors.Firstname = "required.";
  } 

  if (!formData.Lastname.trim()) {
    newErrors.Lastname = "required.";
  }
 
  if (!formData.Gender) {
    newErrors.Gender = "required.";
  }
  if (!formData.DOB.trim()) {
    newErrors.DOB = "required.";
  }
  if (!formData.Emailid.trim()) {
    newErrors.Emailid = "required.";
  } else if (
    !formData.Emailid.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    newErrors.Emailid = "Invalid email format.";
  }


  if (!formData.BloodGroup.trim()) {
    newErrors.BloodGroup = "required.";
  }
  if (!formData.Qualification.trim()) {
    newErrors.Qualification = "required.";
  }


  if (!formData.Contactno1.trim()) {
    newErrors.Contactno1 = "required.";
  } else if (!formData.Contactno1.match(/^[0-9]{10}$/)) {
    newErrors.Contactno1 = "required";
  }

  if (formData.Contactno2.trim()) {
    if (!formData.Contactno2.match(/^[0-9]{10}$/)) {
      newErrors.Contactno2 = "Contact number must be 10 digits.";
    }
  } else {
    delete newErrors.Contactno2; 
  }


  if (!formData.FatherName.trim()) {
    newErrors.FatherName = " required.";
  } 
  if (!formData.EmergencyContactName.trim()) {
    newErrors.EmergencyContactName = "required.";
  } 

  if (!formData.EmergencyContactNo.trim()) {
    newErrors.EmergencyContactNo = " required.";
  } else if (!formData.EmergencyContactNo.match(/^[0-9]{10}$/)) {
    newErrors.EmergencyContactNo =
      "Emergency contact number must be exactly 10 digits.";
  }

  if (!formData.PresentAddress.trim()) {
    newErrors.PresentAddress = "required.";
  }

  if (!formData.PermanentAddress.trim()) {
    newErrors.PermanentAddress = "required.";
  }

  // NameAsPerPAN
  if (!formData.NameAsPerPAN.trim()) {
    newErrors.NameAsPerPAN = "required.";
  }
 
  if (!formData.PANNo.trim()) {
    newErrors.PANNo = "required.";
  } else if (!formData.PANNo.match(/^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/)) {
    newErrors.PANNo = "Invalid PAN number format.";
  }

  if (!formData.Pancardpic) {
    newErrors.Pancardpic = "required.";
  }

  if (!formData.NameAsPerAadhar.trim()) {
    newErrors.NameAsPerAadhar = "required.";
  }

  if (!formData.AadharNo.trim()) {
    newErrors.AadharNo = "required.";
  } else if (!formData.AadharNo.match(/^[0-9]{12}$/)) {
    newErrors.AadharNo = "Aadhar number must be exactly 12 digits.";
  }

  if (!formData.AdhaarPhoto) {
    newErrors.AdhaarPhoto = "required.";
  }



 
 


  if (!formData.NomineeName.trim()) {
    newErrors.NomineeName = "required.";
  }

  if (!formData.RelationshipWithNominee.trim()) {
    newErrors.RelationshipWithNominee = "required.";
  }

  if (formData.BankName.trim()) {
    if (!formData.NameAsPerBank.trim()) {
      newErrors.NameAsPerBank = "required.";
    }

    if (!formData.BankAccountNo.trim()) {
      newErrors.BankAccountNo = "required.";
    }

    if (!formData.IFSCCode.trim()) {
      newErrors.IFSCCode = "required.";
    }
  }

  
  if (!formData.MaritalStatus.trim()) {
    newErrors.MaritalStatus = "required.";
  }


  if (formData.MaritalStatus === "Married") {
    if (!formData.SpouseName.trim()) {
      newErrors.SpouseName = "required.";
    } else if (!formData.SpouseName.match(/^[A-Za-z\s]{3,50}$/)) {
      newErrors.SpouseName = "Spouse name must be 3-50 characters ";
    }

    if (!formData.SpouseDOB.trim()) {
      newErrors.SpouseDOB = "required.";
    }

    if (!formData.SpouseGender.trim()) {
      newErrors.SpouseGender = "required.";
    }

    if (!formData.SpouseOccupation.trim()) {
      newErrors.SpouseOccupation = "required.";
    }
  }

  if (formData.NameOfChild1.trim()) {
    if (!formData.DOBChild1.trim()) {
      newErrors.DOBChild1 = "required.";
    }

    if (!formData.GenderChild1.trim()) {
      newErrors.GenderChild1 = "required.";
    }
  }

  if (formData.NameOfChild2.trim()) {
    if (!formData.DOBChild2.trim()) {
      newErrors.DOBChild2 = "required.";
    }

    if (!formData.GenderChild2.trim()) {
      newErrors.GenderChild2 = "required.";
    }
  }

  //  School Name

  if (formData.S_SchoolName.trim()) {
    if (!formData.S_Location.trim()) {
      newErrors.S_Location = "required.";
    }

    if (!formData.S_YearOfPassing.trim()) {
      newErrors.S_YearOfPassing = "required.";
    }
    if (!formData.S_Class.trim()) {
      newErrors.S_Class = "required.";
    }

    if (!formData.S_MajorSubject.trim()) {
      newErrors.S_MajorSubject = "required.";
    }

    if (!formData.S_OverallPercent.trim()) {
      newErrors.S_OverallPercent = "required.";
    }

    if (!formData.S_pic) {
      newErrors.S_pic = "required.";
    }
  }

  // Collage P
  if (formData.P_CollegeName.trim()) {
    if (!formData.P_Location.trim()) {
      newErrors.P_Location = "required.";
    }

    if (!formData.P_YearOfPassing.trim()) {
      newErrors.P_YearOfPassing = "required.";
    }
    if (!formData.P_Class.trim()) {
      newErrors.P_Class = "required.";
    }

    if (!formData.P_MajorSubject.trim()) {
      newErrors.P_MajorSubject = "required.";
    }

    if (!formData.P_OverallPercent.trim()) {
      newErrors.P_OverallPercent = "required.";
    }

    if (!formData.P_pic) {
      newErrors.P_pic = "required.";
    }
  }

  // Collage G
  if (formData.G_CollegeName.trim()) {
    if (!formData.G_Location.trim()) {
      newErrors.G_Location = "required.";
    }

    if (!formData.G_YearOfPassing.trim()) {
      newErrors.G_YearOfPassing = "required.";
    }
    if (!formData.G_Class.trim()) {
      newErrors.G_Class = "required.";
    }

    if (!formData.G_MajorSubject.trim()) {
      newErrors.G_MajorSubject = "required.";
    }

    if (!formData.G_OverallPercent.trim()) {
      newErrors.G_OverallPercent = "required.";
    }

    if (!formData.G_pic) {
      newErrors.G_pic = "required.";
    }
  }

  // Collage PG
  if (formData.PG_CollegeName.trim()) {
    if (!formData.PG_Location.trim()) {
      newErrors.PG_Location = "required.";
    }

    if (!formData.PG_YearOfPassing.trim()) {
      newErrors.PG_YearOfPassing = "required.";
    }

    if (!formData.PG_Class.trim()) {
      newErrors.PG_Class = "required.";
    }
    if (!formData.PG_MajorSubject.trim()) {
      newErrors.PG_MajorSubject = "required.";
    }

    if (!formData.PG_OverallPercent.trim()) {
      newErrors.PG_OverallPercent = "required.";
    }

    if (!formData.PG_pic) {
      newErrors.PG_pic = "required.";
    }
  }

//   const validateCompanyDetails = (prefix) => {
//     const companyFields = [
//       "CompanyName",
//       "Designation",
//       "DOJ",
//       "DOL",
//       "ReasonForLeaving",
//       "Process",
//       `${prefix}_Salary`,
//       `${prefix}_Salary1`,
//       `${prefix}_Salary2`,
//       `${prefix}_Salary3`,
//       `${prefix}_ExperienceLetter`,
//       `${prefix}_OfferLetter`,
//     ];

//     const isAnyFieldFilled = companyFields.some((field) => {
//       const value = formData[`${prefix}_${field}`];
//       return typeof value === "string" && value.trim().length > 0;
//     });

//     if (isAnyFieldFilled) {
//       companyFields.forEach((field) => {
//         const fieldName = `${prefix}_${field}`;
//         const value = formData[fieldName];
//         // console.log("value validate", value);
//         if (typeof value === "string" && value.trim().length === 0) {
//           newErrors[fieldName] = `required.`;
//         }
//       });

//       companyFields.forEach((field) => {
//         if (field.startsWith(prefix)) {
//           const value = formData[field];
//           if (!value) {
//             newErrors[field] = `required.`;
//           }
//         }
//       });

//       const dojField = `${prefix}_DOJ`;
//       const dolField = `${prefix}_DOL`;
//       const doj = formData[dojField]?.trim();
//       const dol = formData[dolField]?.trim();

//       if (doj && dol) {
//         const dojDate = new Date(doj);
//         const dolDate = new Date(dol);

//         if (dojDate >= dolDate) {
//           newErrors[dojField] = "DOJ must be earlier than Date of Leaving.";
//           newErrors[dolField] = "DOL must be later than Date of Joining.";
//         }
//       }
//     }
//   };

//   validateCompanyDetails("FT");
//   validateCompanyDetails("T");
//   validateCompanyDetails("S");
//   validateCompanyDetails("F");

const validateCompanyDetails = (prefix) => {
  const companyFields = [
    "CompanyName",
    "Designation",
    "DOJ",
    "DOL",
    "ReasonForLeaving",
    "Process",
    `${prefix}_Salary`,
    `${prefix}_ExperienceLetter`,
    `${prefix}_OfferLetter`,
  ];

  if (prefix === "FT") {
    companyFields.push(
      `${prefix}_Salary1`,
      `${prefix}_Salary2`,
      `${prefix}_Salary3`
    );
  }

  const isAnyFieldFilled = companyFields.some((field) => {
    const value = formData[`${prefix}_${field}`];
    return typeof value === "string" && value.trim().length > 0;
  });

  if (isAnyFieldFilled) {
    companyFields.forEach((field) => {
      const fieldName = `${prefix}_${field}`;
      const value = formData[fieldName];
      if (typeof value === "string" && value.trim().length === 0) {
        newErrors[fieldName] = `required.`;
      }
    });

    companyFields.forEach((field) => {
      if (field.startsWith(prefix)) {
        const value = formData[field];
        if (!value) {
          newErrors[field] = `required.`;
        }
      }
    });

    const dojField = `${prefix}_DOJ`;
    const dolField = `${prefix}_DOL`;
    const doj = formData[dojField]?.trim();
    const dol = formData[dolField]?.trim();

    if (doj && dol) {
      const dojDate = new Date(doj);
      const dolDate = new Date(dol);

      if (dojDate >= dolDate) {
        newErrors[dojField] = "DOJ must be earlier than Date of Leaving.";
        newErrors[dolField] = "DOL must be later than Date of Joining.";
      }
    }
  }
};

// Example prefixes to validate
validateCompanyDetails("FT");
validateCompanyDetails("T");
validateCompanyDetails("S");
validateCompanyDetails("F");

return newErrors;


  return newErrors;
};


