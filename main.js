function getData() {
  let students = localStorage.getItem("students");
  studentsPares = JSON.parse(students);
  return studentsPares || [];
}
function getGender() {
  let checkbox = document.getElementsByName("gender");

  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      return checkbox[i].value;
    }
  }
}

const students = [
  {
    name: "rikkei",
    email: "rikkei@gmail.com",
    phone: "01234567890",
    address: "hà nội",
    gender: getGender(),
  },
  {
    name: "jane",
    email: "jane@gmail.com",
    phone: "01234567890",
    address: "hà nội",
    gender: getGender(),
  },
];
function renderStudents() {
  const renderStudents = document.querySelector(".students-list-infor");
  let renderStudentsList = "";
  students.forEach((element, index) => {
    renderStudentsList += `<tr>
          <td>${index + 1}</td>
          <td>${element.name}</td>
          <td>${element.email}</td>
          <td>${element.phone}</td>
          <td>${element.address}</td>
          <td>${element.gender}</td>
          <td><a href="#" class="edit-btn" onclick="handleEdit(${index})">edit</a><a href="#" onclick="handleDelete(${index})">delete</a></td>
          <td></td>
        </tr>`;
  });
  renderStudents.innerHTML = renderStudentsList;
}
renderStudents();
function handleAdd() {
  let student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    // gender: getGender(),
  };
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
}
// xóa học viên
function handleDelete(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
}
// Update thông tin học viên
function handleEdit() {
  const editElement = document.querySelector(".");
}

// Tìm kiếm thông tin học viên
function handleSearch() {
  let students = getData();
  let studentResults = [];
  let searchResult = document.querySelector(".students-list-infor");
  let inputSearch = document.querySelector(".search");
  let inputSearchValue = inputSearch.value.toLowerCase();
    students.forEach((element) => {
      if (element.name.toLowerCase() == inputSearchValue) {
        studentResults.push(element);
      }
    });
    searchResult.innerHTML = studentResults;
  
}
