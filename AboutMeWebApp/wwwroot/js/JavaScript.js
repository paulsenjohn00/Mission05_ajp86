$("#calculate").click(function () {
    // calculate grade based on weights
    var grade =
        $("#assignments").val() * .5376 +
        $("#quizes").val() * .0860 + 
        $("#groupProjects").val() * .0538 +
        $("#intex").val() * .1075 +
        $("#exams").val() * .2151 +
        $("#extraCredit").val() * .0081;

    var letterGrade = "";

    // finds a letter grade based on the overall percentage
    // for some reason all 100's returns 1000. Here is the fix
    if (grade == 1000) {
        grade = 100;
    }
    else if (grade >= 94) {
        letterGrade = "A";
    }
    else if (grade > 90 && grade < 94) {
        letterGrade = "A-";
    }
    else if (grade > 87 && grade < 90) {
        letterGrade = "B+";
    }
    else if (grade > 84 && grade < 87) {
        letterGrade = "B";
    }
    else if (grade > 80 && grade < 84) {
        letterGrade = "B-";
    }
    else if (grade > 77 && grade < 80) {
        letterGrade = "C+";
    }
    else if (grade > 74 && grade < 77) {
        letterGrade = "C";
    }
    else if (grade > 70 && grade < 74) {
        letterGrade = "C-";
    }
    else if (grade > 67 && grade < 70) {
        letterGrade = "D+";
    }
    else if (grade > 64 && grade < 67) {
        letterGrade = "D";
    }
    else if (grade > 60 && grade < 64) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "F";
    };

    // Returns a letter grade and a percentage grade into a paragraph
    $("#txtReturn").text("You have an overall grade of " + letterGrade +
        " with " + parseFloat(grade).toFixed(2) + "%");
});

