function walking(input) {

    let action = input[0];
    let totalSteps = 0;
    let index = 1;
    let steps = 0;
    let goalReached = false;

    while(action !== "Going home") {
        steps = Number(action);
        totalSteps += steps;
        if(totalSteps >= 10000 ){
            goalReached = true;
            break;
        }
        action = input[index];
        index ++;         

    }
    if(!goalReached){
    totalSteps += Number(input[index]);
        if(totalSteps >= 10000 ){
        goalReached = true;
       
        }
    }
    let diff = Math.abs(10000 - totalSteps);
    if(goalReached){
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`)
    }else {
        console.log(`${diff} more steps to reach goal.`);
    }

}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])



