// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(object){
      
    const result=object.find((item,index)=>item.result=="W")
    if(result){
        return result.year
    }else{
        return undefined
    }
  }
  superbowlWin(record)