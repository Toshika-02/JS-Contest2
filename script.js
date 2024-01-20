let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  
  function PrintDeveloper() {
    const developers = arr.filter(employee => employee.profession === 'developer');
     console.log( 'Developers' , developers);

  }
  
  function addData() {
    const newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
    arr.push(newEmployee);
    console.log('Employee added:', newEmployee);
  }
  
  function removeAdmin() {
    const Remove = arr.filter(employee => employee.profession !== 'admin');
    console.log('removing admins:' , Remove);
   
  }
  
  function concatenateArray() {
    const additional= [
        { id: 5, name: 'Iya', age: 22, profession: 'developer' },
        { id: 6, name: 'Ema', age: 21, profession: 'developer' }
      ];
      arr = arr.concat(additional);
      console.log('Array after concatenation:' , arr);

  }
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
      
  }


PrintDeveloper();
addData();
removeAdmin();
concatenateArray();