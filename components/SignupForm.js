// import React from "react";
// import classes from "./JoinNow.module.css";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Button from '@mui/material/Button';
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Box from "@mui/material/Box";
// import Checkbox from "@mui/material/Checkbox";
// import TextField from "@mui/material/TextField";
// import { useForm} from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { RegisterFormSchema } from "@/lib/rules";

// function SignupForm() {
//   const {
//     handleSubmit,
//     register,
//     setError,
//     formState: { errors },
//   } = useForm({
//     //connects zod to react hook form
//     resolver: zodResolver(RegisterFormSchema),
//     mode: "all",
//     reValidateMode: "onChange",
//   });


//   //Form Submission Handler
// const onSubmit = async (data) => {
//   const res = await fetch("/api/register", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   const result = await res.json();

//   //throws an error if we dont get the data back
//   if (!result.success) {
//     Object.entries(result.fieldErrors || {}).forEach(([field, messages]) => {
//       setError(field, {
//         type: "server",
//         message: messages[0],
//       });
//     });
//     return;
//   }

//   console.log("User created");
//   };
  
//   const onSubmitEvent = (data) => {
//     console.log("FORM SUBMITTED", data);
//   };

//   return (
//     <div>
//       <div className={classes.mainDiv}>
//         <div className={classes.joinnowForm}>
//           <div className={classes.joinnowFormOutline}>
//             <div className={classes.joinnowFormBorder}>
//               <div className={classes.joinnowLine}>
//                 *indicates required field
//               </div>
//               <div className={classes.joinnowFormInner}>
//                 <Box component="form" onSubmit={handleSubmit(onSubmitEvent)}>
//                   {" "}
//                   <h2 className={classes.joinnowFormInner}>
//                     Personal Information
//                   </h2>
//                   <fieldset className={classes.joinnowFormSectionOne}>
//                     <div className={classes.formTextFieldOutline}>
//                       <Box
//                         sx={{
//                           width: 435,
//                           display: "block",
//                           whiteSpace: "normal",
//                           wordBreak: "normal",
//                           lineHeight: 1.4,
//                           maxWidth: "100%",
//                         }}
//                         onSubmit={handleSubmit(onSubmit)}
//                       >
//                         <TextField
//                           {...register("firstName")}
//                           sx={{ fontWeight: "1200" }}
//                           id="outlined"
//                           fullWidth
//                           label="* First name"
//                           type="firstName"
//                           color="success"
//                           variant="outlined"
//                           error={!!errors.firstName}
//                           helperText={errors.firstName?.message}
//                         />
//                       </Box>
//                     </div>
//                     <div className={classes.formTextFieldOutline}>
//                       <Box
//                         sx={{
//                           width: 435,
//                           display: "block",
//                           whiteSpace: "normal",
//                           wordBreak: "normal",
//                           lineHeight: 1.4,
//                           maxWidth: "100%",
//                         }}
//                         onSubmit={handleSubmit(onSubmit)}
//                       >
//                         <TextField
//                           {...register("lastName")}
//                           id="outlined"
//                           fullWidth
//                           label="* Last name"
//                           type="lastName"
//                           color="success"
//                           variant="outlined"
//                           error={!!errors.lastName}
//                           helperText={errors.lastName?.message}
//                           sx={{
//                             mt: 1,
//                           }}
//                         />
//                       </Box>
//                     </div>
//                   </fieldset>
//                   <h2 className={classes.joinnowFormInner}>Account Security</h2>
//                   <fieldset className={classes.joinnowFormSectionOne}>
//                     <div className={classes.formTextFieldOutline}>
//                       {/* Email Input Field */}
//                       <Box
//                         sx={{
//                           display: "block",
//                           whiteSpace: "normal",
//                           wordBreak: "normal",
//                           lineHeight: 1.4,
//                           maxWidth: "435px",
//                           paddingLeft: 0,
//                           textAlign: "left",
//                         }}
//                       >
//                         <TextField
//                           {...register("email")}
//                           id="outlined"
//                           fullWidth
//                           label="* Email"
//                           color="success"
//                           type="email"
//                           //adds error messages
//                           error={!!errors.email}
//                           helperText={errors.email?.message}
//                           sx={{
//                             mt: 1,
//                           }}
//                         />
//                       </Box>

//                       <div className={classes.formInputHintOne}>
//                         <div className={classes.formInputHintInner}>
//                           <p className={classes.formInputHintInner}>
//                             This will be your username
//                           </p>
//                         </div>
//                       </div>
//                       {/* Password Input Field  */}
//                       <Box
//                         sx={{
//                           display: "block",
//                           whiteSpace: "normal",
//                           wordBreak: "normal",
//                           lineHeight: 1.4,
//                           maxWidth: "435px",
//                           paddingLeft: 0,
//                           textAlign: "left",
//                         }}
//                       >
//                         <TextField
//                           {...register("password")}
//                           id="outlined"
//                           fullWidth
//                           label="* Password"
//                           color="success"
//                           type="password"
//                           //adds error messages
//                           error={!!errors.password}
//                           helperText={errors.password?.message}
//                           sx={{
//                             mt: 1,
//                           }}
//                         />
//                       </Box>
//                     </div>
//                     <div className={classes.formInputHintTwo}>
//                       <div className={classes.formInputHintInner}>
//                         <p className={classes.formInputHintInner}>
//                           Create a password 8 to 25 characters long that
//                           includes at least 1 uppercase and 1 lowercase letter,
//                           1 number and 1 special character like an exclamation
//                           point or asterisk.
//                         </p>
//                       </div>
//                     </div>
//                   </fieldset>
//                   <fieldset className={classes.joinnowFormSectionTwo}>
//                     <Accordion>
//                       <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                         sx={{
//                           width: 435,
//                           maxWidth: "100%",
//                         }}
//                       >
//                         <Typography
//                           color="#006241"
//                           fontSize="16px"
//                           fontFamily="SoDoSans, Helvetica Neue, Helvetica, Arial, sans-serif"
//                           fontWeight="700"
//                           variant="h5"
//                         >
//                           Already have a Starbucks gift card?
//                         </Typography>
//                       </AccordionSummary>
//                       <AccordionDetails>
//                         <Typography
//                           variant="p"
//                           fontSize="16px"
//                           fontWeight="400"
//                           className={classes.formDropdownInnerSection}
//                         >
//                           Add your gift card to earn Stars when you pay and
//                           order ahead.
//                           <Box
//                             sx={{
//                               width: 300,
//                               maxWidth: "100%",
//                             }}
//                             className={classes.formtextfieldSectionSpacing}
//                           >
//                             <TextField
//                               id="standard-basic"
//                               fullWidth
//                               label="Card number (16 digits)"
//                               normal
//                               color="success"
//                             />
//                           </Box>
//                           <div className={classes.formInputHintThree}>
//                             <div className={classes.formInputHintInner}>
//                               <p className={classes.formInputHintInner}>
//                                 No spaces or dashes
//                               </p>
//                             </div>
//                           </div>
//                           <Box
//                             sx={{
//                               width: 300,
//                               maxWidth: "100%",
//                             }}
//                             className={classes.formtextfieldSectionSpacing}
//                           >
//                             <TextField
//                               id="standard-basic"
//                               fullWidth
//                               label="Security code"
//                               normal
//                               color="success"
//                             />
//                           </Box>
//                           <div className={classes.formInputHintThree}>
//                             <div className={classes.formInputHintInner}>
//                               <p className={classes.formInputHintInner}>
//                                 Scratch to reveal 8-digit code
//                               </p>
//                             </div>
//                           </div>
//                         </Typography>
//                       </AccordionDetails>
//                     </Accordion>
//                   </fieldset>
//                   <fieldset className={classes.joinnowFormSectionThree}>
//                     <h2 className={classes.joinnowHeaderTwo}>
//                       Collect more Stars & Earn Rewards
//                     </h2>
//                     <span className={classes.joinnowLineTwo}>
//                       Email is a great way to know about offers and what’s new
//                       from Starbucks.
//                     </span>
//                     <label className={classes.joinnowCheckboxContainer}>
//                       <input className={classes.joinnowCheckboxMargins} />
//                       <div className={classes.joinnowCheckbox}>
//                         <Checkbox
//                           sx={{
//                             "& .MuiSvgIcon-root": { fontSize: 28 },
//                             textAlign: "left",
//                             flexShrink: "0",
//                             marginBottom: "60px",
//                           }}
//                           color="success"
//                         />
//                         <span className={classes.joinnowCheckboxFlexOne}>
//                           <span className={classes.joinnowcheckboxFlexItemOne}>
//                             Yes, I’d like email from Starbucks
//                           </span>
//                           <span
//                             //sx={{ textAlign: "left" }}
//                             className={classes.joinnowcheckboxFlexItemTwo}
//                           >
//                             Know about initiatives, announcements and product
//                             offers.
//                           </span>
//                         </span>
//                       </div>
//                     </label>
//                     <div>
//                       <h2 className={classes.joinnowHeaderThree}>
//                         Terms of Use
//                       </h2>
//                       <div className={classes.joinnowCheckboxFlexTwo}>
//                         <Checkbox
//                           sx={{
//                             "& .MuiSvgIcon-root": { fontSize: 28 },
//                             textAlign: "left",
//                             marginBottom: "60px",
//                           }}
//                           color="success"
//                         />
//                         <span className={classes.joinnowCheckboxLineTwo}>
//                           I agree to the
//                           <a className={classes.joinnowCheckboxLineTwo}>
//                             Starbucks® Rewards Terms
//                             <svg className={classes.joinnowCheckboxLineTwo}>
//                               <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
//                             </svg>
//                           </a>
//                           and the
//                           <a className={classes.joinnowCheckboxLineTwo}>
//                             Starbucks® Card Terms
//                             <svg className={classes.joinnowCheckboxLineTwo}>
//                               <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
//                             </svg>
//                           </a>
//                           and have read the
//                           <a className={classes.joinnowCheckboxLineTwo}>
//                             Starbucks® Privacy Statement
//                             <svg className={classes.joinnowCheckboxLineTwo}>
//                               <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
//                             </svg>
//                           </a>
//                           .
//                         </span>
//                       </div>
//                     </div>
//                     <div className={classes.joinnowButtonSpacing}>
//                       <div className={classes.joinnowOutline}>
//                         <div className={classes.joinnowFlex}>
//                           <div className={classes.joinnowButtonBorder}>
//                             <Button
//                               type="submit"
//                               variant="contained"
//                               sx={{ mt: 3 }}
//                               color="success"
//                               className={classes.starbucksButton}
//                             >
//                               Create Account
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </fieldset>
//                 </Box>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupForm;


import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("FORM SUBMITTED", data);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    // if (!result.success) {
    //   Object.entries(result.fieldErrors || {}).forEach(([field, messages]) => {
    //     setError(field, {
    //       type: "server",
    //       message: messages[0],
    //     });
    //   });
    //   return;
    // }

    console.log("RAW RESPONSE:", result);

  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ maxWidth: 420, mx: "auto", mt: 4 }}
    >
      <fieldset style={{ border: "none", padding: 0 }}>


        {/* Section 1 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="First Name"
            {...register("firstName", { required: "First name is required" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            fullWidth
          />

          <TextField
            label="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            fullWidth
          />
        </Box>

        {/* Section 2 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
          <TextField
            label="Email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />
        </Box>

        {/* Submit */}
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ mt: 4, width: "100%" }}
        >
          Create Account
        </Button>
      </fieldset>
    </Box>
  );
}
