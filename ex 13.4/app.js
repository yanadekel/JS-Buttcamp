let posituvN = (N)=>{
  for ( let i=1; i<=N; i++) {
    for (let j=1; j<=i;j++){
      process.stdout.write ('#');
    }
   console.log(); 
  }

};

posituvN(9);