document.addEventListener('DOMContentLoaded', function () {
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const mainSection = document.getElementById('main-section');
    const appointmentFormSection = document.getElementById('appointment-form-section');
    const appointmentFormLink = document.getElementById('appointment-form-link');
    const cancelAppointmentLink = document.getElementById('cancel-appointment-link');
    const logoutButton = document.getElementById('logout');
    const registerButton = document.getElementById('register-button');
    const cancelAppointmentButton = document.getElementById('cancel-appointment-button');

    // Show register section
    registerButton.addEventListener('click', function () {
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        loginSection.style.display = 'none';
        mainSection.style.display = 'block';
    });

    // Handle register form submission
    document.getElementById('register-form').addEventListener('submit', function (e) {
        e.preventDefault();
        registerSection.style.display = 'none';
        mainSection.style.display = 'block';
    });

    // Show appointment form section
    appointmentFormLink.addEventListener('click', function () {
        appointmentFormSection.style.display = 'block';
        document.getElementById('appointment-details-section').style.display = 'none';
    });

    // Show appointment details section
    cancelAppointmentLink.addEventListener('click', function () {
        document.getElementById('appointment-details-section').style.display = 'block';
        appointmentFormSection.style.display = 'none';
    });

    // Handle cancel appointment
    cancelAppointmentButton.addEventListener('click', function () {
        // Logic to cancel appointment goes here
        alert('Appointment canceled');
        // Optionally, you can add code to hide the appointment details section or perform other actions
        document.getElementById('appointment-details-section').style.display = 'none';
    });

    // Handle logout
    logoutButton.addEventListener('click', function () {
        mainSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Function to update hospitals based on selected area
    function updateHospitals(area) {
        const hospitalSelect = document.getElementById('hospital');
        hospitalSelect.innerHTML = ''; // Clear previous options

        let hospitals;

        switch (area) {
            case 'jubilee-hills':
                hospitals = ['Hospital AA', 'Hospital BB', 'Hospital CC'];
                break;
            case 'gachibowli':
                hospitals = ['Hospital DD', 'Hospital EE', 'Hospital FF'];
                break;
            case 'hitech-city':
                hospitals = ['Hospital GG', 'Hospital HH', 'Hospital II'];
                break;
            case 'manikonda':
                hospitals = ['Hospital JJ', 'Hospital KK', 'Hospital LL'];
                break;
            case 'kondapur':
                hospitals = ['Hospital MM', 'Hospital NN', 'Hospital OO'];
                break;
            case 'kothaguda':
                hospitals = ['Hospital PP', 'Hospital QQ', 'Hospital RR'];
                break;
            case 'abids':
                hospitals = ['Hospital SS', 'Hospital TT', 'Hospital UU'];
                break;
            case 'miyapur':
                hospitals = ['Hospital VV', 'Hospital WW', 'Hospital XX'];
                break;
            case 'madinaguda':
                hospitals = ['Hospital YY', 'Hospital ZZ', 'Hospital AAA'];
                break;
            case 'kukatpally':
                hospitals = ['Hospital BBB', 'Hospital CCC', 'Hospital DDD'];
                break;
            case 'medchal':
                hospitals = ['Hospital EEE', 'Hospital FFF', 'Hospital GGG'];
                break;
            case 'nizampet':
                hospitals = ['Hospital HHH', 'Hospital III', 'Hospital JJJ'];
                break;
            case 'balanagar':
                hospitals = ['Hospital KKK', 'Hospital LLL', 'Hospital MMM'];
                break;
            case 'dilshuknagar':
                hospitals = ['Hospital NNN', 'Hospital OOO', 'Hospital PPP'];
                break;
            case 'ameerpet':
                hospitals = ['Hospital QQQ', 'Hospital RRR', 'Hospital SSS'];
                break;
            case 'other':
                hospitals = ['Other Hospital (Specify)'];
                break;
            default:
                hospitals = ['Select an Area First'];
                break;
        }

        hospitals.forEach(hospital => {
            let option = document.createElement('option');
            option.value = hospital.toLowerCase().replace(/\s+/g, '-');
            option.textContent = hospital;
            hospitalSelect.appendChild(option);
        });

        // Trigger update of doctors based on the first hospital in the list
        updateDoctors(hospitals[0].toLowerCase().replace(/\s+/g, '-'));
    }

    // Function to update doctors based on selected hospital
    function updateDoctors(hospital) {
        const doctorSelect = document.getElementById('doctor');
        doctorSelect.innerHTML = ''; // Clear previous options

        let doctors;

        switch (hospital) {
            case 'hospital-aa':
                doctors = ['Dr. John Smith', 'Dr. Emily Johnson', 'Dr. Michael Brown'];
                break;
            case 'hospital-bb':
                doctors = ['Dr. Emma Wilson', 'Dr. James Jones', 'Dr. Olivia Davis'];
                break;
            case 'hospital-cc':
                doctors = ['Dr. William Wilson', 'Dr. Sophia Garcia', 'Dr. Ethan Hall'];
                break;
            case 'hospital-dd':
                doctors = ['Dr. Mia Phillips', 'Dr. Wyatt Hill', 'Dr. Emily Carter'];
                break;
            case 'hospital-ee':
                doctors = ['Dr. Owen Adams', 'Dr. Leah Torres', 'Dr. Caleb Foster'];
                break;
            case 'hospital-ff':
                doctors = ['Dr. Zoe Hall', 'Dr. Samuel Wright', 'Dr. Bella Martinez'];
                break;
            case 'hospital-gg':
                doctors = ['Dr. Max Carter', 'Dr. Lily Foster', 'Dr. Jacob Hall'];
                break;
            case 'hospital-hh':
                doctors = ['Dr. Maya Phillips', 'Dr. Mason Hill', 'Dr. Olivia Adams'];
                break;
            case 'hospital-ii':
                doctors = ['Dr. Leo Torres', 'Dr. Grace Foster', 'Dr. Ethan Hall'];
                break;
            case 'hospital-jj':
                doctors = ['Dr. Owen Adams', 'Dr. Mia Torres', 'Dr. Jack Foster'];
                break;
            case 'hospital-kk':
                doctors = ['Dr. Ella Hall', 'Dr. Wyatt Wright', 'Dr. Ava Martinez'];
                break;
            case 'hospital-ll':
                doctors = ['Dr. Zoe Carter', 'Dr. Samuel Foster', 'Dr. Bella Hall'];
                break;
            case 'hospital-mm':
                doctors = ['Dr. Max Phillips', 'Dr. Lily Hill', 'Dr. Jacob Adams'];
                break;
            case 'hospital-nn':
                doctors = ['Dr. Maya Torres', 'Dr. Mason Foster', 'Dr. Olivia Hall'];
                break;
            case 'hospital-oo':
                doctors = ['Dr. Leo Adams', 'Dr. Grace Wright', 'Dr. Ethan Martinez'];
                break;
            case 'hospital-pp':
                doctors = ['Dr. John Smith', 'Dr. Emily Johnson', 'Dr. Michael Brown'];
                break;
            case 'hospital-qq':
                doctors = ['Dr. Emma Wilson', 'Dr. James Jones', 'Dr. Olivia Davis'];
                break;
            case 'hospital-rr':
                doctors = ['Dr. William Wilson', 'Dr. Sophia Garcia', 'Dr. Ethan Hall'];
                break;
            case 'hospital-ss':
                doctors = ['Dr. Mia Phillips', 'Dr. Wyatt Hill', 'Dr. Emily Carter'];
                break;
            case 'hospital-tt':
                doctors = ['Dr. Owen Adams', 'Dr. Leah Torres', 'Dr. Caleb Foster'];
                break;
            case 'hospital-uu':
                doctors = ['Dr. Zoe Hall', 'Dr. Samuel Wright', 'Dr. Bella Martinez'];
                break;
            case 'hospital-vv':
                doctors = ['Dr. Max Carter', 'Dr. Lily Foster', 'Dr. Jacob Hall'];
                break;
            case 'hospital-ww':
                doctors = ['Dr. Maya Phillips', 'Dr. Mason Hill', 'Dr. Olivia Adams'];
                break;
            case 'hospital-xx':
                doctors = ['Dr. Leo Torres', 'Dr. Grace Foster', 'Dr. Ethan Hall'];
                break;
            case 'hospital-yy':
                doctors = ['Dr. Owen Adams', 'Dr. Mia Torres', 'Dr. Jack Foster'];
                break;
            case 'hospital-zz':
                doctors = ['Dr. Ella Hall', 'Dr. Wyatt Wright', 'Dr. Ava Martinez'];
                break;
            case 'hospital-aaa':
                doctors = ['Dr. Zoe Carter', 'Dr. Samuel Foster', 'Dr. Bella Hall'];
                break;
            case 'hospital-bbb':
                doctors = ['Dr. Max Phillips', 'Dr. Lily Hill', 'Dr. Jacob Adams'];
                break;
            case 'hospital-ccc':
                doctors = ['Dr. Maya Torres', 'Dr. Mason Foster', 'Dr. Olivia Hall'];
                break;
            case 'hospital-ddd':
                doctors = ['Dr. Leo Adams', 'Dr. Grace Wright', 'Dr. Ethan Martinez'];
                break;
            case 'hospital-eee':
                doctors = ['Dr. John Smith', 'Dr. Emily Johnson', 'Dr. Michael Brown'];
                break;
            case 'hospital-fff':
                doctors = ['Dr. Emma Wilson', 'Dr. James Jones', 'Dr. Olivia Davis'];
                break;
            case 'hospital-ggg':
                doctors = ['Dr. William Wilson', 'Dr. Sophia Garcia', 'Dr. Ethan Hall'];
                break;
            case 'hospital-hhh':
                doctors = ['Dr. Mia Phillips', 'Dr. Wyatt Hill', 'Dr. Emily Carter'];
                break;
            case 'hospital-iii':
                doctors = ['Dr. Owen Adams', 'Dr. Leah Torres', 'Dr. Caleb Foster'];
                break;
            case 'hospital-jjj':
                doctors = ['Dr. Zoe Hall', 'Dr. Samuel Wright', 'Dr. Bella Martinez'];
                break;
            case 'hospital-kkk':
                doctors = ['Dr. Max Carter', 'Dr. Lily Foster', 'Dr. Jacob Hall'];
                break;
            case 'hospital-lll':
                doctors = ['Dr. Maya Phillips', 'Dr. Mason Hill', 'Dr. Olivia Adams'];
                break;
            case 'hospital-mmm':
                doctors = ['Dr. Leo Torres', 'Dr. Grace Foster', 'Dr. Ethan Hall'];
                break;
            case 'hospital-nnn':
                doctors = ['Dr. Owen Adams', 'Dr. Mia Torres', 'Dr. Jack Foster'];
                break;
            case 'hospital-ooo':
                doctors = ['Dr. Ella Hall', 'Dr. Wyatt Wright', 'Dr. Ava Martinez'];
                break;
            case 'hospital-ppp':
                doctors = ['Dr. Zoe Carter', 'Dr. Samuel Foster', 'Dr. Bella Hall'];
                break;
            case 'hospital-qqq':
                doctors = ['Dr. Max Phillips', 'Dr. Lily Hill', 'Dr. Jacob Adams'];
                break;
            case 'hospital-rrr':
                doctors = ['Dr. Maya Torres', 'Dr. Mason Foster', 'Dr. Olivia Hall'];
                break;
            case 'hospital-sss':
                doctors = ['Dr. Leo Adams', 'Dr. Grace Wright', 'Dr. Ethan Martinez'];
                break;
            case 'other-hospital':
                doctors = ['Dr. Specify Doctor Name 1', 'Dr. Specify Doctor Name 2', 'Dr. Specify Doctor Name 3'];
                break;
            default:
                doctors = ['Select a Hospital First'];
                break;
        }

        doctors.forEach(doctor => {
            let option = document.createElement('option');
            option.value = doctor.toLowerCase().replace(/\s+/g, '-');
            option.textContent = doctor;
            doctorSelect.appendChild(option);
        });
    }

    // Update hospitals when area changes
    document.getElementById('area').addEventListener('change', function () {
        updateHospitals(this.value);
    });

    // Update doctors when hospital changes
    document.getElementById('hospital').addEventListener('change', function () {
        updateDoctors(this.value);
    });

    // Handle appointment form submission
    document.getElementById('appointment-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value;
        const area = document.getElementById('area').value;
        const hospital = document.getElementById('hospital').value;
        const problem = document.getElementById('problem').value;
        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        document.getElementById('appointment-name').textContent = name;
        document.getElementById('appointment-age').textContent = age;
        document.getElementById('appointment-gender').textContent = gender;
        document.getElementById('appointment-phone').textContent = phone;
        document.getElementById('appointment-area').textContent = area;
        document.getElementById('appointment-hospital').textContent = hospital;
        document.getElementById('appointment-problem').textContent = problem;
        document.getElementById('appointment-doctor').textContent = doctor;
        document.getElementById('appointment-date').textContent = date;
        document.getElementById('appointment-time').textContent = time;

        appointmentFormSection.style.display = 'none';
        document.getElementById('appointment-details-section').style.display = 'block';
    });
});
