function add7(num) {
    return num += 7;
}
console.log(add7(5))


function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3))


function capitalize(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase()
}
console.log(capitalize('TEST'))


function lastletter(s) {
    return s.substr(-1)
}

console.log(lastletter('abcd'))

function absoluteDifference(num1, num2) {
    return num1 > num2 ? Math.abs(num2 - num1) : Math.abs(num1 - num2);
}

console.log(absoluteDifference(5, 5))


///////////////
function getSecondsToday() {
    return new Date().getTime() - new Date().getTime()
}

console.log(getSecondsToday())


////

// 2. Create a function that calculates the area of a rectangle.
//    The function should accept the width and height as arguments
//    and return the area of that rectangle.
//    The area of a rectangle is the width * height

function calculateAreaRect(width, height) {
    return width * height;
  }
  
  // 3. Create a function that calculates the volume of a rectangular prism.
  //    The function should accept the width, height and length as arguments
  //    and return the volume of that rectangular prism.
  //    The volume of a rectangular prism is the width * height * length
  
  function calculateVolumePrism(width, height, length) {
    return width * height * length;
  }
  
  // 4. Create a function that calculates the area of a circle.
  //    The function should accept the radius of the circle as an argument
  //    and return the area of that circle.
  //    The area of a circle is the value of π * radius^2
  
  function calculateAreaCircle(radius) { 
    return Math.PI * radius * 2;
  }
  
  // 5. Create a function that calculates the volume of a sphere.
  //    The function should accept the radius of the sphere as an argument
  //    and return the volume.
  //    The volume of a circle is: 4/3 *  π * radius^3
  
  function calculateVolumeSphere(radius) {
      return 4/3 * Math.PI * Math.pow(radius, 3)
  }
  
  // 6. Use console.log to test each function and output to the JavaScript console
  //    Here are the values to test and the expected results
  //    -- Area of rectangle that is 5 wide and 22 tall: 110
  //    -- Volume of a rectangular prism that is 4.5 x 12.5 x 17.4: 978.7499999999999
  //    -- Area of a circle that with a radius of 7.2: 162.8601631620949
  //    -- Volume of a spehere with a radius of 7.2: 1563.4575663561109
  
  console.log(calculateAreaRect(5, 22))
  console.log(calculateVolumePrism(4.5, 12.5, 17.4))
  console.log(calculateAreaCircle(7.2))
  console.log(calculateVolumeSphere(7.2))