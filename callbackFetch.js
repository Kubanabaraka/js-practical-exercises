function fetData(callback){
  
  const success = true;
  setTimeout(function() {
    
    if(success){
      callback(null,{username:'Baraka',status:'Successful',school:'Blessed College'})
    }
    else{
      console.log('Something happened')
    }
  }, 3000);
  
}
fetData((error,user)=>{
  
  if(error){
    console.log('Sorry here is your error',error)
  }
  else{
    console.log('User: ', user)
  }
})