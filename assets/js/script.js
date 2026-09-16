'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// video modal variables
const videoModalContainer = document.querySelector("[data-video-modal-container]");
const videoOverlay = document.querySelector("[data-video-overlay]");
const videoModalCloseBtn = document.querySelector("[data-video-modal-close-btn]");
const videoModalPlayer = document.querySelector("[data-video-modal-player]");
const projectVideoTriggers = document.querySelectorAll("[data-project-video]");

// open video modal and play the project's video
const openVideoModal = function (videoSrc) {
  videoModalPlayer.src = videoSrc;
  videoModalContainer.classList.add("active");
  videoOverlay.classList.add("active");
  videoModalPlayer.play();
}

// close video modal and stop playback
const closeVideoModal = function () {
  videoModalPlayer.pause();
  videoModalPlayer.removeAttribute("src");
  videoModalContainer.classList.remove("active");
  videoOverlay.classList.remove("active");
}

// add click event to all project cards that have a video attached
for (let i = 0; i < projectVideoTriggers.length; i++) {
  projectVideoTriggers[i].addEventListener("click", function (e) {
    e.preventDefault();
    openVideoModal(this.dataset.projectVideo);
  });
}

if (videoModalCloseBtn) videoModalCloseBtn.addEventListener("click", closeVideoModal);
if (videoOverlay) videoOverlay.addEventListener("click", closeVideoModal);



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}




// ===================================
// project detail page (internal, no external hosting needed)
// ===================================

const projectsData = [
  {
    title: "Scaled Autonomous Vehicle End-to-End Development",
    category: "Mechanical Design",
    img: "./assets/images/Project_01_gokart_dev.jpg",
    video: "./assets/video/gokart-assembly.mp4",
    desc: "Converted a manual go-kart into a 1/3 scale autonomous vehicle with brake-, steer-, and throttle-by-wire systems. Applied VAVE principles to design and fabricate a fully functional physical prototype ready for deployment of autonomy algorithms, conducting trade-off analyses to optimize cost, manufacturability, and performance. Modeled the detailed CAD assembly for a digital twin, produced assembly animations, and generated standard drawings for custom components, enabling recreation for future research.",
    link: null,
    gallery: ["./assets/images/gallery/Project_01_gallery_1.jpg", "./assets/images/gallery/Project_01_gallery_2.jpg", "./assets/images/gallery/Project_01_gallery_3.jpg", "./assets/images/gallery/Project_01_gallery_4.jpg", "./assets/images/gallery/Project_01_gallery_5.jpg"]
  },
  {
    title: "Multibody Simulation of Steering Mechanism",
    category: "Multibody Systems Design and Simulation",
    img: "./assets/images/Project_02_steering_multibody.jpg",
    video: "./assets/video/steering-mechanism-multibody.mp4",
    desc: "Modeled a steering mechanism in CAD and developed a corresponding simulation using MATLAB Simscape Multibody. Analyzed the kinematic relationship between shaft angle and steering angle, then integrated the model into the broader vehicle dynamics simulation.",
    link: null,
    gallery: ["./assets/images/gallery/Project_02_gallery_1.jpg"]
  },
  {
    title: "Steering Mechanism of Scaled Autonomous Vehicle",
    category: "Mechanical Design",
    img: "./assets/images/Project_03_steering_hardware.jpg",
    video: "./assets/video/steering-mechanism-sbw.mp4",
    desc: "Designed and engineered the hardware for a steer-by-wire system, including the steer-by-wire assembly and motor controller mount, using repurposed aluminum profiles, an electric motor and controller from the lab, and off-the-shelf components such as pillow block bearings, U-bolts, rubber stoppers, and a custom-machined shaft.",
    link: null,
    gallery: ["./assets/images/gallery/Project_03_gallery_1.jpg", "./assets/images/gallery/Project_03_gallery_2.jpg"]
  },
  {
    title: "Multibody Simulation of Scaled Autonomous Vehicle",
    category: "Multibody Systems Design and Simulation",
    img: "./assets/images/Project_04_gokart_multibody.jpg",
    desc: "Modeled the complete go-kart assembly in CAD, including chassis, drivetrain, and steering components, then developed a physics-based Simscape Multibody simulation in MATLAB to replicate mechanical interactions and system behavior. Simulated rear axle dynamics, brake-by-wire actuator motion, and steer-by-wire steering mechanism to evaluate system performance and integration.",
    link: null,
    gallery: ["./assets/images/gallery/Project_04_gallery_1.jpg", "./assets/images/gallery/Project_04_gallery_2.jpg"]
  },
  {
    title: "Vehicle Dynamics Simulation of Scaled Autonomous Vehicle",
    category: "Vehicle Dynamics Simulation",
    img: "./assets/images/Project_05_vehicle_dynamics_sim.jpg",
    video: "./assets/video/slalom-sim.mp4",
    video: "./assets/video/slalom-full.mp4",
    desc: "Developed a vehicle dynamics model of the go-kart in MATLAB Simulink as part of a digital twin system. Implemented multiple driving modes, including manual control and constant velocity tracking, and integrated test maneuvers to evaluate system behavior and performance under various conditions.",
    link: null,
    gallery: ["./assets/images/gallery/Project_05_gallery_1.jpg", "./assets/images/gallery/Project_05_gallery_2.jpg", "./assets/images/gallery/Project_05_gallery_3.jpg"]
  },
  {
    title: "AutoDrive Vehicle Dynamics Simulation of (1/10th) Scaled Autonomous Vehicle",
    category: "Vehicle Dynamics Simulation",
    img: "./assets/images/Project_06_autodrive.jpg",
    video: "./assets/video/autodrive-sim.mp4",
    desc: "Simulated vehicle dynamics test maneuvers, including fishhook and slalom maneuvers, using a Simulink-AutoDrive co-simulation environment. Worked with an AutoDrive model of a 1/10th scale autonomous racing vehicle and performed the simulation with real-time pacing for accurate behavior replication.",
    link: null,
    gallery: ["./assets/images/gallery/Project_06_gallery_1.jpg", "./assets/images/gallery/Project_06_gallery_2.jpg", "./assets/images/gallery/Project_06_gallery_3.jpg"]
  },
  {
    title: "Vehicle Dynamics and Stability Analysis of Vehicle-Trailer System",
    category: "Vehicle Dynamics Simulation",
    img: "./assets/images/Project_07_trailer_dynamics.jpg",
    desc: "Modeled and simulated a tractor-trailer system in Simulink to analyze stability and dynamic behavior, implementing a simplified 2-DOF bicycle model with linear and nonlinear tire dynamics. Tested skidpad and fishhook maneuvers under varying CG positions, hitch locations, and weight distributions.",
    link: null,
    gallery: ["./assets/images/gallery/Project_07_gallery_1.jpg", "./assets/images/gallery/Project_07_gallery_2.jpg", "./assets/images/gallery/Project_07_gallery_3.jpg", "./assets/images/gallery/Project_07_gallery_4.jpg", "./assets/images/gallery/Project_07_gallery_5.jpg"]
  },
  {
    title: "Multibody Dynamics Analysis of a 5-Link Serial Chain Robotic Arm",
    category: "Multibody Systems Design and Simulation",
    img: "./assets/images/Project_08_robotic_arm.jpg",
    video: "./assets/video/robotic-arm.mp4",
    desc: "Modeled and simulated a 5-link robotic arm to accurately track desired trajectories by controlling its joints using multibody kinematics and dynamics from first principles. Implemented various closed-loop control strategies with redundancy resolution to compare results for precise motion planning in constrained spaces in a MATLAB-CoppeliaSim connected environment, and designed a MATLAB GUI for parameter tuning. Validated and compared simulation outcomes against analyses conducted in a MATLAB-MSC Adams connected environment to ensure model accuracy and dynamic consistency.",
    link: "https://github.com/SaneelRevankar/Redundancy-resolution-for-5-link-Serial-Chain-Manipulator",
    gallery: ["./assets/images/gallery/Project_08_gallery_1.jpg", "./assets/images/gallery/Project_08_gallery_2.jpg", "./assets/images/gallery/Project_08_gallery_3.jpg"]
  },
  {
    title: "Mobile-Manipulator Kuka YouBot Control",
    category: "Multibody Systems Design and Simulation",
    img: "./assets/images/Project_09_kuka_youbot.jpg",
    video: "./assets/video/kuka-youbot.mp4",
    desc: "Simulated a mobile manipulator robot in a MATLAB-CoppeliaSim environment to perform desired actions of the arm, controlled via MATLAB. Demonstrated the Kuka arm end-effector traveling a semi-circular trajectory at maximum reach, as well as a straight-line pick-and-place motion.",
    link: null,
    gallery: ["./assets/images/gallery/Project_09_gallery_1.jpg", "./assets/images/gallery/Project_09_gallery_2.jpg", "./assets/images/gallery/Project_09_gallery_3.jpg", "./assets/images/gallery/Project_09_gallery_4.jpg", "./assets/images/gallery/Project_09_gallery_5.jpg", "./assets/images/gallery/Project_09_gallery_6.jpg", "./assets/images/gallery/Project_09_gallery_7.jpg", "./assets/images/gallery/Project_09_gallery_8.jpg", "./assets/images/gallery/Project_09_gallery_9.jpg"]
  },
  {
    title: "NVH: Experimental BIW Modal Analysis",
    category: "Vehicle NVH Testing",
    img: "./assets/images/Project_10_biw_experimental.jpg",
    desc: "Gained hands-on experience with FRF data acquisition and modal analysis using Siemens SCADA and Testlab software to identify and analyze rigid body modes, flexible body modes (bending and torsion), and their corresponding natural frequencies for a body-in-white (BIW) structure. Mounted a BMW X3 BIW structure with 10 single-axis accelerometers in free-free conditions using airbag suspension, mimicking unconstrained modal excitation environments and exciting it with shakers. Recorded accelerometer data through Siemens SCADA, post-processed it in Siemens Testlab, and animated mode shapes for better visualization of bending and torsion.",
    link: null,
    gallery: ["./assets/images/gallery/Project_10_gallery_1.jpg", "./assets/images/gallery/Project_10_gallery_2.jpg", "./assets/images/gallery/Project_10_gallery_3.jpg", "./assets/images/gallery/Project_10_gallery_4.jpg", "./assets/images/gallery/Project_10_gallery_5.jpg"]
  },
  {
    title: "NVH: MIMO Modal Analysis of BMW X3 BIW",
    category: "Vehicle NVH Testing",
    img: "./assets/images/Project_11_biw_mimo_modal.jpg",
    video: "./assets/video/biw-mimo-mode-shape-full.mp4",
    desc: "Gained hands-on experience with MIMO modal analysis using Siemens SCADA and Testlab software on a BMW X3 body-in-white structure, using 14 triaxial accelerometers to identify and analyze rigid and flexible body modes and their corresponding natural frequencies. Identified the first torsional (37.1 Hz) and first bending (54.7 Hz) modes via FRF analysis and animated them for visualization, validated modal symmetry through the Driving Point Function, and verified linear system behavior via reciprocity testing.",
    link: null,
    gallery: ["./assets/images/gallery/Project_11_gallery_1.jpg", "./assets/images/gallery/Project_11_gallery_2.jpg", "./assets/images/gallery/Project_11_gallery_3.jpg", "./assets/images/gallery/Project_11_gallery_4.jpg", "./assets/images/gallery/Project_11_gallery_5.jpg"]
  },
  {
    title: "NVH: Modal Analysis of Automotive Splash Shield",
    category: "Vehicle NVH Testing",
    img: "./assets/images/Project_12_splash_shield.jpg",
    desc: "Gained experience performing FEA simulation-based modal analysis using CAE tools like Altair Hypermesh with the OptiStruct solver on a finite element model of an automotive splash shield. Identified the first six natural frequencies and visualized the corresponding mode shapes, including bending at roughly 129.5 Hz and torsion at roughly 149.6 Hz.",
    link: null,
    gallery: ["./assets/images/gallery/Project_12_gallery_1.jpg", "./assets/images/gallery/Project_12_gallery_2.jpg", "./assets/images/gallery/Project_12_gallery_3.jpg", "./assets/images/gallery/Project_12_gallery_4.jpg", "./assets/images/gallery/Project_12_gallery_5.jpg"]
  },
  {
    title: "NVH: Engine Order Analysis",
    category: "Vehicle NVH Testing",
    img: "./assets/images/Project_13_engine_order.jpg",
    desc: "Gained hands-on experience measuring noise and vibration data using order tracking analysis on a BMW 530 with an inline-6 engine operated on a chassis dynamometer, using Siemens Testlab and SCADAS Mobile, an optical tach, accelerometers, and linear/A-weighted microphones. Conducted wide-open-throttle acceleration testing across gears and engine speeds, then processed the data into waterfall plots to identify engine components responsible for noise, such as the alternator, cylinder head, and firing pulses.",
    link: null,
    gallery: ["./assets/images/gallery/Project_13_gallery_1.jpg", "./assets/images/gallery/Project_13_gallery_2.jpg"]
  },
  {
    title: "Engine Performance and Knock Analysis Using MATLAB",
    category: "Powertrain Modeling",
    img: "./assets/images/Project_14_engine_knock.jpg",
    desc: "Performed thermodynamic analysis of 300 engine combustion cycles using MATLAB, instrumenting a virtual engine test setup via .tdms data acquisition using LabView and MATLAB. Computed total work done and cycle efficiency, plotted raw pressure traces to analyze cycle-to-cycle variability and combustion repeatability, and identified an engine knock frequency of approximately 6.42 kHz by applying FFT and noise filtering.",
    link: null,
    gallery: ["./assets/images/gallery/Project_14_gallery_1.jpg", "./assets/images/gallery/Project_14_gallery_2.jpg", "./assets/images/gallery/Project_14_gallery_3.jpg"]
  },
  {
    title: "Series Hybrid Powertrain Model of Ford Fusion 2020",
    category: "Powertrain Modeling",
    img: "./assets/images/Project_15_ford_fusion_hybrid.jpg",
    desc: "Designed and simulated a series-hybrid model of a conventional ICE-driven vehicle using MATLAB Simulink, optimizing the power split between engine and battery based on the efficiency map. Compared performance and fuel usage with a non-hybrid baseline model, achieving 44 MPG for the hybrid versus 25 MPG for the ICE-only version, with a BSFC operating point of 272 g/kWh.",
    link: null,
    gallery: ["./assets/images/gallery/Project_15_gallery_1.jpg", "./assets/images/gallery/Project_15_gallery_2.jpg", "./assets/images/gallery/Project_15_gallery_3.jpg", "./assets/images/gallery/Project_15_gallery_4.jpg"]
  },
  {
    title: "Reference Engine Speed Tracking Using Observer-Based Feedback Plus Integral Controller",
    category: "Powertrain Modeling",
    img: "./assets/images/Project_16_observer_controller.jpg",
    desc: "Developed an observer-based feedback full-state controller and compared it with a traditional PI controller for engine speed tracking, combining integral control with a state observer. The observer logic improved control by utilizing estimated state information to make more informed decisions, especially in complex systems with uncertainties.",
    link: null,
    gallery: ["./assets/images/gallery/Project_16_gallery_1.jpg", "./assets/images/gallery/Project_16_gallery_2.jpg", "./assets/images/gallery/Project_16_gallery_3.jpg"]
  },
  {
    title: "Reference Engine Speed Tracking Using Model Predictive Control",
    category: "Powertrain Modeling",
    img: "./assets/images/Project_17_mpc_controller.jpg",
    desc: "Constructed an MPC controller for reference engine speed tracking and compared it with other controllers, formulating a quadratic cost function to minimize tracking error and control effort. Implemented MPC with a 10-step prediction horizon and constrained ignition angle and throttle inputs, improving transient tracking by predicting future behavior and adjusting control actions proactively.",
    link: null,
    gallery: ["./assets/images/gallery/Project_17_gallery_1.jpg", "./assets/images/gallery/Project_17_gallery_2.jpg", "./assets/images/gallery/Project_17_gallery_3.jpg"]
  },
  {
    title: "A Linear Optimization Approach to Hydrogen Consumption Reduction in Fuel Cell Hybrid Vehicles",
    category: "Powertrain Modeling",
    img: "./assets/images/Project_18_hydrogen_fchev.jpg",
    desc: "Developed and simulated a hydrogen fuel cell hybrid vehicle model using MATLAB, minimizing total hydrogen consumption by applying a linear optimization technique. Achieved hydrogen usage of approximately 6.3 liters, a 14% reduction compared to the original case study, by implementing the UDDS (FTP-75) driving cycle to determine the optimal power split between the fuel cell and battery systems.",
    link: null,
    gallery: ["./assets/images/gallery/Project_18_gallery_1.jpg", "./assets/images/gallery/Project_18_gallery_2.jpg", "./assets/images/gallery/Project_18_gallery_3.jpg", "./assets/images/gallery/Project_18_gallery_4.jpg"]
  },
  {
    title: "Strain Gage Instrumentation and Dynamic Response Analysis of a Cantilever Beam",
    category: "Mechanical Design",
    img: "./assets/images/Project_19_strain_gage_beam.jpg",
    desc: "Analyzed the static and dynamic response of a cantilever beam using data acquisition via an eDAQ system. Mounted and calibrated a strain gauge and accelerometer on an aluminum beam, applied static loads, and excited the beam with an impact hammer. Processed the data in MATLAB to generate a force-vs-strain plot and a frequency spectrum for extracting modal frequencies.",
    link: null,
    gallery: ["./assets/images/gallery/Project_19_gallery_1.jpg", "./assets/images/gallery/Project_19_gallery_2.jpg", "./assets/images/gallery/Project_19_gallery_3.jpg"]
  },
  {
    title: "Initial Body-In-White Design for a Three-Passenger Vehicle",
    category: "Mechanical Design",
    img: "./assets/images/Project_20_biw_design.jpg",
    desc: "Designed a body-in-white layout for a 3-passenger vehicle, targeting performance requirements for bending stiffness, torsion stiffness, crash management, passenger compartment structural integrity, and mass efficiency. Performed strength analysis of the lower B-pillar in Hypermesh and modeled the final BIW in SolidWorks.",
    link: null,
    gallery: ["./assets/images/gallery/Project_20_gallery_1.jpg", "./assets/images/gallery/Project_20_gallery_2.jpg", "./assets/images/gallery/Project_20_gallery_3.jpg", "./assets/images/gallery/Project_20_gallery_4.jpg", "./assets/images/gallery/Project_20_gallery_5.jpg"]
  },
];

const projectDetailPage = document.querySelector('[data-page="project-detail"]');
const portfolioPage = document.querySelector('[data-page="portfolio"]');
const projectDetailBackBtn = document.querySelector("[data-project-back-btn]");
const projectDetailCategory = document.querySelector("[data-project-detail-category]");
const projectDetailTitle = document.querySelector("[data-project-detail-title]");
const projectDetailHero = document.querySelector("[data-project-detail-hero]");
const projectDetailDesc = document.querySelector("[data-project-detail-desc]");
const projectDetailLink = document.querySelector("[data-project-detail-link]");
const projectDetailGallery = document.querySelector("[data-project-detail-gallery]");
const projectCardLinks = document.querySelectorAll("[data-project-id]");

const openProjectDetail = function (id) {
  const project = projectsData[id - 1];
  if (!project || !projectDetailPage) return;

  projectDetailCategory.textContent = project.category;
  projectDetailTitle.textContent = project.title;
  projectDetailDesc.textContent = project.desc;

  // stop and remove any previous video before rebuilding the hero
  const prevVideo = projectDetailHero.querySelector("video");
  if (prevVideo) { prevVideo.pause(); prevVideo.removeAttribute("src"); prevVideo.load(); }
  projectDetailHero.innerHTML = "";

  if (project.video) {
    const video = document.createElement("video");
    video.src = project.video;
    video.poster = project.img;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.controls = true;
    projectDetailHero.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = project.img;
    img.alt = project.title;
    projectDetailHero.appendChild(img);
  }

  if (project.link) {
    projectDetailLink.href = project.link;
    projectDetailLink.style.display = "inline-flex";
  } else {
    projectDetailLink.style.display = "none";
  }

  projectDetailGallery.innerHTML = "";
  project.gallery.forEach(function (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = project.title;
    img.loading = "lazy";
    projectDetailGallery.appendChild(img);
  });

  // hide every page, show project detail
  document.querySelectorAll("[data-page]").forEach(function (page) {
    page.classList.remove("active");
  });
  projectDetailPage.classList.add("active");
  window.scrollTo(0, 0);
};

const backToPortfolio = function () {
  const prevVideo = projectDetailHero.querySelector("video");
  if (prevVideo) { prevVideo.pause(); prevVideo.removeAttribute("src"); prevVideo.load(); }

  document.querySelectorAll("[data-page]").forEach(function (page) {
    page.classList.remove("active");
  });
  if (portfolioPage) portfolioPage.classList.add("active");
  window.scrollTo(0, 0);
};

for (let i = 0; i < projectCardLinks.length; i++) {
  projectCardLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    openProjectDetail(parseInt(this.dataset.projectId, 10));
  });
}

if (projectDetailBackBtn) projectDetailBackBtn.addEventListener("click", backToPortfolio);
