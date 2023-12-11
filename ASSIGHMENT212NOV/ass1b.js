// Function to determine the grade based on marks
function calculateGrade(marks) {
    if (marks > 90) {
      return 'A';
    } else if (marks >= 70 && marks <= 90) {
      return 'B';
    } else if (marks >= 50 && marks < 70) {
      return 'C';
    } else {
      return 'F';
    }
  }
  let studentMarks = 85;
  // Calculating grade using function
  let studentGrade = calculateGrade(studentMarks);
  //O/P
  console.log(`Student received a grade of: ${studentGrade}`);
  