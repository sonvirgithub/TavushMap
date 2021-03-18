// import React from "react";

// function MoreInfo({ setprogramId, programsList, setShowResults }) {
//   console.log(programsList, "programsList****************");
//   const closeMore = () => {
//     setShowResults(false);



//   };
//   return (
//     <div className="sideBar">
//       <div onClick={closeMore}>
//         <img
//           //   className="org_icon"
//           style={{ float: "right", padding: "20px", cursor: "pointer" }}
//           src={require("../../img/remove.svg").default}
//         />
//       </div>

//       {programsList.length > 0 ? (
//         programsList.map((programItem, index) => {
//           if (programItem.id == programId) {
//             return (
//               <div style={{ padding: "30px" }} key={programItem.id}>
//                 <div style={{ color: "#05558F", fontSize: "28px" }}>
//                   {programItem.name_arm}
//                 </div>
//                 <div style={{ color: "#808A8A", fontSize: "18px" }}>
//                   {programItem.name_eng}
//                 </div>

//                 <div style={{ margintop: "10px", padding: "5px 0px" }}>
//                   <img
//                     className="org_icon"
//                     src={require("../../img/community.svg").default}
//                   />
//                   {programItem.community_arm}
//                 </div>
//                 <div style={{ padding: "5px 0px" }}>
//                   {" "}
//                   <img
//                     className="org_icon"
//                     src={require("../../img/budget.svg").default}
//                   />
//                   {programItem.budget}
//                 </div>

//                 <div style={{ padding: "5px 0px" }}>
//                   <img
//                     className="org_icon"
//                     src={require("../../img/time.svg").default}
//                   />
//                   {programItem.start_date} - {programItem.end_date}
//                 </div>

//                 <div style={{ padding: "5px 0px" }}>
//                   <img
//                     className="org_icon"
//                     src={require("../../img/organization.svg").default}
//                   />
//                   {programItem.organization_arm}
//                   <p
//                     style={{
//                       color: "#808A8A",
//                       fontSize: "18px",
//                       paddingLeft: "36px",
//                     }}
//                   >
//                     {programItem.organization_eng}
//                   </p>
//                 </div>

//                 <div style={{ padding: "5px 0px" }}>
//                   <img
//                     className="org_icon"
//                     src={require("../../img/contact.svg").default}
//                   />
//                   {programItem.contactPerson_arm}
//                 </div>
//                 <p
//                   style={{
//                     color: "#808A8A",
//                     fontSize: "18px",
//                     paddingLeft: "36px",
//                   }}
//                 >
//                   {programItem.contactPerson_eng}
//                 </p>

//                 <div style={{ padding: "5px 0px" }}>
//                   <img
//                     className="org_icon"
//                     src={require("../../img/sphere.svg").default}
//                   />
//                   {programItem.category_arm}
//                 </div>
//                 <div style={{ padding: "5px 0px" }}>
//                   <img
//                     className="org_icon"
//                     src={require("../../img/description.svg").default}
//                   />
//                   {programItem.description_arm}
//                   <p
//                     style={{
//                       color: "#808A8A",
//                       fontSize: "18px",
//                       paddingLeft: "36px",
//                     }}
//                   >
//                     {programItem.description_eng}
//                   </p>
//                 </div>
//                 <div style={{ padding: "5px 0px" }}>
//                   <img
//                     className="org_icon"
//                     src={require("../../img/ongoing.svg").default}
//                   />
//                   {programItem.status_arm}
//                 </div>
//               </div>
//             );
//           }
//         })
//       ) : (
//         <div>
//           <p colSpan="5">Տվյաներ չկան</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MoreInfo;
