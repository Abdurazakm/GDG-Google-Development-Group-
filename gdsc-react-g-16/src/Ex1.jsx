function Ex1() {
    const students = [
      "Abdurahman",
      "Abdurazak",
      "Mahyenb",
      "Rakeb",
      "Naod",
      "Robel",
      "Eden",
      "Ayenew",
      "MenaTA",
      "TrueBoy",
    ];
  
    // Use .map() to create a list of student names
    const studentsList = students.map((student, index) => {
      return <div key={index}>{student}</div>; // Add a unique key for each item
    });
  
    return (
      <>
        <div>{studentsList}</div>
      </>
    );
  }
  
  export default Ex1;
  