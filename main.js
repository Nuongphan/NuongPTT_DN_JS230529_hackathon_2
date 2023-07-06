// Bài 1: kiểm tra chuồi đối xứng
function bai_1() {
  const inputValue = document.querySelector(".input-1").value;
  let arr = "";
  for (i = inputValue.length - 1; i >= 0; i--) {
    arr += inputValue[i];
  }
  const resultElement = document.querySelector(".result_1");
  resultElement.innerHTML =
    inputValue == arr
      ? `${inputValue}: là chuỗi đối xứng`
      : `${inputValue}: không phải là chuỗi đối xứng`;
}
////////////////////////////////////////////////////////////////
// Bài 2: Nhập vào 1 chuỗi ký tự và in ra chuỗi ký tự đó
function bai_2() {
  const inputValue = document.querySelector(".input-2").value;
  let result = inputValue;
  const words = result.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word[0] === word[0].toUpperCase()) {
      words[i] = word[0].toLowerCase() + word.slice(1);
    } else {
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

  result = words.join(" ");

  const resultElement = document.querySelector(".result_2");
  resultElement.innerHTML = result;
}
////////////////////////////////////////////////////////////////
// Bài 3: Tính lãi suất ngân hàng
function bai_3() {
  const inputMoney = document.querySelector(".input-3");
  const inputMonthValue = Number(document.querySelector(".input-month").value);
  const inputMoneyValue = Number(inputMoney.value);
  let interest;
  if (inputMonthValue <= 0 || inputMoneyValue <= 0) {
    return;
  } else {
    interest =
      inputMonthValue * inputMoneyValue * ((inputMonthValue * 0.07) / 12);
  }
  const resultElement = document.querySelector(".result_3");
  resultElement.innerHTML = `Số tiền lãi nhận được là: ${interest.toLocaleString(
    "de-de"
  )} VND`;
}
////////////////////////////////////////////////////////////////
// Bài 4: Sắp xếp các phần tử là số ở trong mảng theo thứ tự giảm dần
function bai_4() {
     const arr = [1, 4, 10, 9, -12, 20, 15, 75, 3, 100, 2, 0, -1, -90, 1000];
     let arr1 = [];
     let temp;
     for (i = 0; i < arr.length; i++) {
       for (j = i + 1; j < arr.length; j++) {
         if (arr[i] < arr[j]) {
           temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
         }
       }
       arr1.push(arr[i]);
     }
  const resultElement = document.querySelector('.result_4')
  resultElement.innerHTML = arr1
  }


////////////////////////////////////////////////////////////////
// Bài 5:  Quản lý nhân viên CRUD
let employees = ["Nguyễn Thiên Hưng", "Nguyễn Văn Toàn", "Nguyễn Thiên Hoa"];
// render nhân viên
function renderEmployees() {
  const renderEmployeesElement = document.querySelector(".employees-container");
  let renderEmployeesElementContent = "";
  employees.forEach((element, index) => {
    renderEmployeesElementContent += ` 
     <li>${element}<button onclick="handleEdit(${index})">Edit</button> <button onclick="handleDelete(${index})">Delete</button> </li>
        `;
  });
  renderEmployeesElement.innerHTML = renderEmployeesElementContent;
}
renderEmployees();
// xóa nhân viên
function handleDelete(index) {
  employees.splice(index, 1);
  renderEmployees();
}
// thêm nhân viên
function handleAdd() {
  const inputEmployee = document.querySelector(".input-employee");
  const inputEmployeeValue = inputEmployee.value;
  employees.push(inputEmployeeValue);
  inputEmployee.value = "";
  renderEmployees();
}
// Update nhân viên
let index;
function handleEdit(i) {
  index = i;
  const updateEmployees = document.querySelector(".update-employees");
  updateEmployees.value = employees[i];
  updateEmployees.setAttribute("id", i);
}
function handleUpdate(i) {
  const updateEmployees = document.querySelector(".update-employees");
  const updateEmployeesValue = updateEmployees.value;
  let id = Number(updateEmployees.getAttribute("id"));
  // let updateEmployeesContent = updateEmployeesValue
  if (updateEmployees == "") {
    return;
  } else {
    employees.splice(id, 1, updateEmployeesValue);
  }
  renderEmployees();
}
