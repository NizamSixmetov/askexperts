export default async function handlePhoneClick(phoneNumber, callNumber) {
  window.location.href = `tel:${phoneNumber}`;
  return (
    <button onClick={() => handlePhoneClick(phoneNumber)}>{callNumber}</button>
  );
}
