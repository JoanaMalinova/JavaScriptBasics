function projectCreation(input) {

    let name = input[0];
    let projectCount = input[1];
    let timeToFinish = projectCount*3;
    console.log('The architect '+ name + ' will need '+ timeToFinish + ' hours to complete '+ projectCount +' project/s.' );
}
projectCreation(["George ","4 "]);
