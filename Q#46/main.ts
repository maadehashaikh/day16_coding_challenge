// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.

const laptop = {
  make:'HP',
  model:'XPS 12',
  year:'2022',
  about_laptop:function(){
    console.log(`This laptop is very cool it is made by ${laptop.make} in year ${laptop.year} and it has a model of  ${laptop.model}`);
  }
};
laptop.about_laptop();