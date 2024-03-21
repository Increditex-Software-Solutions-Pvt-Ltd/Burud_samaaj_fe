function submitForm(event) {
	event.preventDefault(); // Prevent form from submitting normally

	// Get form data
	var formData = new FormData(document.getElementById("simpleForm"));

	// Convert formData to JSON object
	var jsonData = {};
	formData.forEach(function (value, key) {
		jsonData[key] = value;
	});

	// You can now use the jsonData object containing form data
	simpleFilter(jsonData)
	console.log(jsonData);


	// Here you can perform further actions, like sending the data to a server via AJAX
}

function submitAdvForm(event) {
	event.preventDefault(); // Prevent form from submitting normally

	// Get form data
	var formData = new FormData(document.getElementById("advanceForm"));

	// Convert formData to JSON object
	var jsonData = {};
	formData.forEach(function (value, key) {
		jsonData[key] = value;
	});

	// You can now use the jsonData object containing form data
	advanceFilter(jsonData)
	console.log(jsonData);


	// Here you can perform further actions, like sending the data to a server via AJAX
}


function simpleFilter(data) {
	const backendData = [{
		id: '01',
		name: "Nishant",
		city: "Nashik",
		occupation: "Software developer",
		education: "BE",
		dob: "8-10-2000",
		profilePic: "www.image.com"
	}, {
		id: "02",
		name: "Rohan",
		city: "Mumbai",
		occupation: "Data Scientist",
		education: "MS",
		dob: "12-05-1995",
		profilePic: "www.image2.com"
	},
	{
		id: "03",
		name: "Priya",
		city: "Pune",
		occupation: "Doctor",
		education: "MBBS",
		dob: "04-08-1988",
		profilePic: "www.image3.com"
	},
	{
		id: "04",
		name: "Amit",
		city: "Delhi",
		occupation: "Lawyer",
		education: "LLB",
		dob: "20-11-1979",
		profilePic: "www.image4.com"
	},
	{
		id: "05",
		name: "suresh",
		city: "kolhapur",
		occupation: "Engineer",
		education: "B.Tech",
		dob: "15-03-1990",
		profilePic: "www.image5.com"
	},
	{
		id: "06",
		name: "Suresh",
		city: "Kolhapur",
		occupation: "Teacher",
		education: "B.Ed",
		dob: "28-07-1985",
		profilePic: "www.image6.com"
	}]

	// const filterCriteria = { name: 'Nishant', city: 'Kolhapur' };

	const filteredData = backendData.filter(item => {
		return item.name.toLowerCase() === data.name.toLowerCase() &&
			item.city.toLowerCase() === data.city.toLowerCase();
	});

	console.log(filteredData);

	const filteredDataDiv = document.getElementById('filteredData');
	const simpleInputForm = document.getElementById("description");
	const filterContainer = document.getElementById("filterContainer")
	simpleInputForm.style.display="none"

	filteredDataDiv.classList = ""
	filterContainer.classList="row m-0 mt-4"
	filterContainer.innerHTML=""

	filteredData.forEach((item, i) => {
		console.log(item.occupation)
		let user = `
		<div class="col-md-4 column nature">
		<div class="image_body">
			<div class="content">
				<img src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2020/04/Indian-Bride-Feature-Image.jpg"
					alt="Lights" style="width:100%" class="img rounded-5">
				<div class="text-center">
					<h4 class=" p-2">${item.name}</h4>
					<p> <button class="btn btn-danger">${item.city}</button>
						<button type="button" class="btn btn-outline-dark" data-bs-toggle="modal"
							data-bs-target="#staticBackdrop${i}">
							See Details
						</button>
					<div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static"
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
										<img src="https://i.pinimg.com/736x/c3/21/b4/c321b403c05ef0a241cb08f331868d87.jpg"
											alt="" style="height: 200px; width: 200px;">
										<div class="mt-2">
											<h6 class="text-center">Personal Information</h6>
											<table class="table">
												<h5 class="bg-danger text-white p-2"><b>${item.id}</b></h5>
												<tr>
													<td>Name:</td>
													<td>${item.name}</td>
												</tr>
												<tr>
													<td>Date Of Birth:</td>
													<td>${item.dob}</td>
												</tr>
												<tr>
													<td>Occupation:</td>
													<td>${item.occupation}</td>
												</tr>
												<tr>
													<td>Education:</td>
													<td>${item.education}</td>
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
	</div>
		`

		filterContainer.innerHTML += user
	});
}

function advanceFilter(data){
	const backendData = [{
		id: '01',
		name: "Nishant",
		city: "Nashik",
		occupation: "Software developer",
		education: "BE",
		dob: "8-10-2000",
		profilePic: "www.image.com"
	}, {
		id: "02",
		name: "Rohan",
		city: "Mumbai",
		occupation: "Data Scientist",
		education: "MS",
		dob: "12-05-1995",
		profilePic: "www.image2.com"
	},
	{
		id: "03",
		name: "Priya",
		city: "Pune",
		occupation: "Doctor",
		education: "MBBS",
		dob: "04-08-1988",
		profilePic: "www.image3.com"
	},
	{
		id: "04",
		name: "Amit",
		city: "Delhi",
		occupation: "Lawyer",
		education: "LLB",
		dob: "20-11-1979",
		profilePic: "www.image4.com"
	},
	{
		id: "05",
		name: "suresh",
		city: "kolhapur",
		occupation: "Engineer",
		education: "B.Tech",
		dob: "15-03-1990",
		profilePic: "www.image5.com"
	},
	{
		id: "06",
		name: "Suresh",
		city: "Kolhapur",
		occupation: "Teacher",
		education: "B.Ed",
		dob: "28-07-1985",
		profilePic: "www.image6.com"
	}]

	// const filterCriteria = { name: 'Nishant', city: 'Kolhapur' };

	console.log(data.occupation,data.id)
	const filteredData = backendData.filter(item => {
		return item.occupation.toLowerCase() === data.occupation.toLowerCase() &&
			item.id === data.id;
	});

	console.log(filteredData); 

	const filteredDataDiv = document.getElementById('filteredData');
	const simpleInputForm = document.getElementById("description");
	const filterContainer = document.getElementById("filterContainer")
	simpleInputForm.style.display="none"

	filteredDataDiv.classList = ""
	filterContainer.classList="row m-0 mt-4"
	filterContainer.innerHTML=""

	filteredData.forEach((item, i) => {
		console.log(item.occupation)
		let user = `
		<div class="col-md-4 column nature">
		<div class="image_body">
			<div class="content">
				<img src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2020/04/Indian-Bride-Feature-Image.jpg"
					alt="Lights" style="width:100%" class="img rounded-5">
				<div class="text-center">
					<h4 class=" p-2">${item.name}</h4>
					<p> <button class="btn btn-danger">${item.city}</button>
						<button type="button" class="btn btn-outline-dark" data-bs-toggle="modal"
							data-bs-target="#staticBackdrop${i}">
							See Details
						</button>
					<div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static"
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
										<img src="https://i.pinimg.com/736x/c3/21/b4/c321b403c05ef0a241cb08f331868d87.jpg"
											alt="" style="height: 200px; width: 200px;">
										<div class="mt-2">
											<h6 class="text-center">Personal Information</h6>
											<table class="table">
												<h5 class="bg-danger text-white p-2"><b>${item.id}</b></h5>
												<tr>
													<td>Name:</td>
													<td>${item.name}</td>
												</tr>
												<tr>
													<td>Date Of Birth:</td>
													<td>${item.dob}</td>
												</tr>
												<tr>
													<td>Occupation:</td>
													<td>${item.occupation}</td>
												</tr>
												<tr>
													<td>Education:</td>
													<td>${item.education}</td>
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
	</div>
		`

		filterContainer.innerHTML += user
	});
}

function backBtn(){
	const filteredDataDiv = document.getElementById('filteredData');
	filteredDataDiv.classList = "row m-0 mt-4 d-none"
	const simpleInputForm = document.getElementById("description");
	simpleInputForm.style.display="block"
	
}
