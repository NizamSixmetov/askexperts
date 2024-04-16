export default async function handlePhoneClick(phoneNumber, callNumber) {
  window.location.href = `tel:${phoneNumber}`;
  return (
    <button onClick={() => handlePhoneClick(phoneNumber)}>{callNumber}</button>
  );
}
// import React from "react";

// const goPhone = (phoneNumber, callNumber) => {
//   window.location.href = `tel:${phoneNumber}`;
//   return <button>{callNumber}</button>;
// };

// export default goPhone;
