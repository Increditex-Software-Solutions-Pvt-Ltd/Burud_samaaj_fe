
// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("image_body");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }


// Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }


const backendData = [{
  id: '01',
  name: "Nishant",
  city: "Nashik",
  occupation: "Software developer",
  education: "BE",
  dob: "8-10-2000",
  profilePic: "www.image.com",
  groomOrBride: "groom" // Added groomOrBride key
},
{
  id: "02",
  name: "Rohan",
  city: "Mumbai",
  occupation: "Data Scientist",
  education: "MS",
  dob: "12-05-1995",
  profilePic: "www.image2.com",
  groomOrBride: "groom" // Added groomOrBride key
},
{
  id: "03",
  name: "Priya",
  city: "Pune",
  occupation: "Doctor",
  education: "MBBS",
  dob: "04-08-1988",
  profilePic: "www.image3.com",
  groomOrBride: "bride" // Added groomOrBride key
},
{
  id: "04",
  name: "Amit",
  city: "Delhi",
  occupation: "Lawyer",
  education: "LLB",
  dob: "20-11-1979",
  profilePic: "www.image4.com",
  groomOrBride: "bride" // Added groomOrBride key
},
{
  id: "05",
  name: "suresh",
  city: "kolhapur",
  occupation: "Engineer",
  education: "B.Tech",
  dob: "15-03-1990",
  profilePic: "www.image5.com",
  groomOrBride: "bride" // Added groomOrBride key
},
{
  id: "06",
  name: "Suresh",
  city: "Kolhapur",
  occupation: "Teacher",
  education: "B.Ed",
  dob: "28-07-1985",
  profilePic: "www.image6.com",
  groomOrBride: "bride" // Added groomOrBride key
},
{
  id: '07',
  name: "Nishant",
  city: "Nashik",
  occupation: "Software developer",
  education: "BE",
  dob: "8-10-2000",
  profilePic: "www.image.com",
  groomOrBride: "groom" // Added groomOrBride key
},
{
  id: "08",
  name: "Rohan",
  city: "Mumbai",
  occupation: "Data Scientist",
  education: "MS",
  dob: "12-05-1995",
  profilePic: "www.image2.com",
  groomOrBride: "groom" // Added groomOrBride key
},
{
  id: "09",
  name: "Priya",
  city: "Pune",
  occupation: "Doctor",
  education: "MBBS",
  dob: "04-08-1988",
  profilePic: "www.image3.com",
  groomOrBride: "bride" // Added groomOrBride key
},
{
  id: "10",
  name: "Amit",
  city: "Delhi",
  occupation: "Lawyer",
  education: "LLB",
  dob: "20-11-1979",
  profilePic: "www.image4.com",
  groomOrBride: "bride" // Added groomOrBride key
},
{
  id: "11",
  name: "suresh",
  city: "kolhapur",
  occupation: "Engineer",
  education: "B.Tech",
  dob: "15-03-1990",
  profilePic: "www.image5.com",
  groomOrBride: "bride" // Added groomOrBride key
},
{
  id: "12",
  name: "Amey",
  city: "Kolhapur",
  occupation: "Teacher",
  education: "B.Ed",
  dob: "28-07-1985",
  profilePic: "www.image6.com",
  groomOrBride: "bride" // Added groomOrBride key
},
{
  id: "13",
  name: "Amit",
  city: "Delhi",
  occupation: "Lawyer",
  education: "LLB",
  dob: "20-11-1979",
  profilePic: "www.image4.com",
  groomOrBride: "disabled" // Added groomOrBride key
},
{
  id: "14",
  name: "suresh",
  city: "kolhapur",
  occupation: "Engineer",
  education: "B.Tech",
  dob: "15-03-1990",
  profilePic: "www.image5.com",
  groomOrBride: "disabled" // Added groomOrBride key
},
{
  id: "15",
  name: "Amey",
  city: "Kolhapur",
  occupation: "Teacher",
  education: "B.Ed",
  dob: "28-07-1985",
  profilePic: "www.image6.com",
  groomOrBride: "disabled" // Added groomOrBride key
}
];

const pageSize = 6;
let currentPage = 1;
let currentCategory = "all";

function displayProfiles(pageNumber, category) {
  currentPage = pageNumber;
  currentCategory = category;

  // Filter profiles based on category
  let filteredData = backendData;
  if (category !== "all") {
    filteredData = backendData.filter(profile => profile.groomOrBride === category);
  }

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const profiles = filteredData.slice(startIndex, endIndex);

  const profileContainer = document.getElementById('profileContainer');
  profileContainer.innerHTML = '';

  profiles.forEach(profile => {
    let user = `
                <div class="image_body col-md-3 m-auto  ${profile.groomOrBride} show">
                                    <div class="content">
                                        <img src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2020/04/Indian-Bride-Feature-Image.jpg"
                                            alt="Lights" style="width:100%" class="img rounded-5">
                                        <div class="text-center">
                                            <h4 class=" p-2">${profile.name}</h4>
                                            <p> <button class="btn btn-danger">${profile.city}</button>
                                                <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal"
                                                    data-bs-target="#staticBackdrop${profile.id}">
                                                    See Details
                                                </button>
                                            <div class="modal fade" id="staticBackdrop${profile.id}" data-bs-backdrop="static"
                                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                                aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-scrollable">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Profile Details</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div>
                                                                <img src="https://cdn.shopify.com/s/files/1/0683/1800/3511/files/white_saree_bride_480x480.jpg?v=1691565347"
                                                                    alt="" style="height: 200px; width: 200px;" class="rounded-4">
                                                                <div class="mt-2">
                                                                    <h6 class="text-center">Personal Information</h6>
                                                                    <table class="table">
                                                                        <h5 class="bg-danger text-white p-2"><b>${profile.id}</b></h5>
                                                                        <tr>
                                                                            <td>Name:</td>
                                                                            <td>${profile.name}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Date Of Birth:</td>
                                                                            <td>${profile.dob}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Occupation:</td>
                                                                            <td>${profile.occupation}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Education:</td>
                                                                            <td>${profile.education}</td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                
                
                
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-danger">
                                                                <a href="profile_de.html" style="text-decoration: none;"
                                                                    class="text-white">View Profile</a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </p>
                
                                        </div>
                                    </div>
                                </div>
                `;
    profileContainer.innerHTML += user
  });

  displayPagination(pageNumber);
}

// Function to display pagination buttons
function displayPagination() {
  const totalPages = Math.ceil(getFilteredData().length / pageSize);

  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  // Previous Button
  const prevButton = createPaginationButton('Previous');
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      displayProfiles(currentPage - 1, currentCategory);
    }
  });
  paginationContainer.appendChild(prevButton);


  // Page Buttons
  let startPage = currentPage;
  let endPage = currentPage + 4;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - 4;
    if (startPage < 1) {
      startPage = 1;
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    const button = createPaginationButton(i);
    if (i === currentPage) {
      button.classList.add('active');
    }
    button.addEventListener('click', () => {
      displayProfiles(i, currentCategory);
    });
    paginationContainer.appendChild(button);
  }

  // Next Button
  const nextButton = createPaginationButton('Next');
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      displayProfiles(currentPage + 1, currentCategory);
    }
  });
  paginationContainer.appendChild(nextButton);
}

// Helper function to create pagination button
function createPaginationButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add('pagination-btn');
  return button;
}

// Function to get filtered data based on current category
function getFilteredData() {
  if (currentCategory === "all") {
    return backendData;
  } else {
    return backendData.filter(profile => profile.groomOrBride === currentCategory);
  }
}

// Add event listeners to filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayProfiles(1, category);
  });
});

// Initial display
displayProfiles(1, "all");