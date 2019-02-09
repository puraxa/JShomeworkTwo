const finalGrade = (examGrade,numberOfProjects) => {
  if(examGrade>90 && numberOfProjects>10){
    return 100;
  }
  if(examGrade>75 && numberOfProjects>=5){
    return 90;
  }
  if(examGrade>50 && numberOfProjects>=2){
    return 75;
  }
  return 0;
}
const checkParameters = (checkExamGrade,checkNumberOfProjects) => {
  if(checkExamGrade>=0 && checkExamGrade <=100 && checkNumberOfProjects>=0){
    return true;
  }
  else {
    return false;
  }
}

let grade;
let projects;

grade = 93;
projects = 2;

if(checkParameters(grade,projects)){
  console.log('final grade is ' + finalGrade(grade,projects));
}