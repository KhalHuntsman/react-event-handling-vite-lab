function SubmitButton() {
  const handleEnter = () => {
    console.log('Mouse Entering'); // Logs when mouse hovers over the button
  };

  const handleLeave = () => {
    console.log('Mouse Exiting'); // Logs when mouse leaves the button
  };

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;
