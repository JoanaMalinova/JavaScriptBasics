function hospital(input){
    let days = Number(input[0]);    
    let index = 1;
    let doctors = 7;
    let untreated = 0;
    let treated = 0;
    let totalUntreated = 0;
    let totalTreated = 0;

    for(let i  = 1; i <= days ; i++){
        if(i % 3 === 0){
            if( untreated > treated ){
                doctors ++;
                totalTreated += treated;
                totalUntreated += untreated;
                treated = 0;
                untreated = 0;
            }            
        }
       let patient = Number(input[index]);
       if(patient > doctors){
        untreated += patient - doctors;
        treated += doctors;        
       }else{
       treated += patient;      
       }    
       index++;
             
    }
    totalTreated += treated;
    totalUntreated += untreated;
    console.log(`Treated patients: ${totalTreated}.`)
    console.log(`Untreated patients: ${totalUntreated}.`)
}
hospital([11,
    8,
    9,
    10,
    3,
    7,
    50,
    3,
    1,
    33,
    2,
    10


    
    
    ])