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
    desc: "• Converted a manual go-kart into a 1/3 scale autonomous vehicle.\n• Led hardware/software integration of brake-by-wire, steer-by-wire, and throttle-by-wire systems followed by conducting thorough verification and validation of the prototype.\n• Applied VAVE principles to design and fabricate a fully functional physical prototype of 1/3rd scaled Autonomous Racing vehicle ready for deployment of autonomy algorithms.\n• Designed and fabricated custom components and hardware assemblies entirely by repurposing in-house lab resources. Modeled detailed CAD assembly for Digital Twin, assembly animationsa and generated standard drawings for parts and assemblies used in prototype fabrication to enable recreation for future research. ",
    link: null,
    gallery: [ "./assets/images/gallery/Project_01_gallery_2.jpg", "./assets/images/gallery/Project_01_gallery_4.jpg", "./assets/images/gallery/Project_01_gallery_6.jpg","./assets/images/gallery/Project_01_gallery_8.jpg.jpeg","./assets/video/TBW_encoder.mp4","./assets/images/gallery/Project_01_gallery_9.jpg",]
  },
  {
    title: "Multibody Simulation of Steering Mechanism",
    category: "Multibody Systems Design and Simulation",
    img: "./assets/images/Project_02_steering_multibody.jpg",
    video: "./assets/video/steering-mechanism-multibody.mp4",
    desc: "• Modeled steering mechanism for steer-by-wire hardware of the autonomous go-kart in CAD and exported the assembly in MATLAB for multibody simulation using Simscape Multibody.\n• Analyzed the simulation to derive the kinematic relationship between shaft angle and steering angle.\n• Used it to fit in a data-based mathematical expression between the handwheel angle and steering angle.\n• Integrated it into a subsystem to build the vehicle dynamics model of the go-Kart on MATLAB Simulink (for a digital twin).",
    link: null,
    gallery: ["./assets/images/gallery/Project_02_gallery_1.jpg","./assets/images/gallery/Project_02_gallery_3.jpg","./assets/images/gallery/Project_02_gallery_4.png","./assets/images/gallery/Project_02_gallery_2.jpg"]
  },
  {
    title: "Steering Mechanism of Scaled Autonomous Vehicle",
    category: "Mechanical Design",
    img: "./assets/images/Project_03_steering_hardware.jpg",
    video: "./assets/video/steering-mechanism-sbw.mp4",
    desc: "Designed and engineered the hardware for a steer-by-wire system, including the steer-by-wire assembly and motor controller mount, using repurposed aluminum profiles, an electric motor and controller from the lab, and off-the-shelf components such as pillow block bearings, U-bolts, rubber stoppers, and a custom-machined shaft.",
    link: null,
    gallery: ["./assets/images/gallery/Project_03_gallery_2.jpg", "./assets/images/gallery/Project_03_gallery_4.jpg","./assets/images/gallery/Project_03_gallery_3.jpg","./assets/images/gallery/Project_03_gallery_5.jpg"]
  },
  {
    title: "Multibody Simulation of Scaled Autonomous Vehicle",
    category: "Multibody Systems Design and Simulation",
    video: "./assets/video/Go-Kart Simscape2.mp4",
    desc: "• Modeled the complete go-Kart assembly integrated with by-wire hardwares in CAD, including chassis, drivetrain, brake coupler, steering components and actuator assemblies. \n• Developed a physics-based Simscape Multibody simulation in MATLAB to replicate mechanical interactions during motion and system behavior. \n• Simulated rear axle dynamics, brake-by-wire actuator motion, and steer-by-wire steering mechanism to evaluate the integration.",
    link: null,
    gallery: [ "./assets/images/gallery/Project_04_gallery_1.jpg","./assets/images/gallery/Project_04_gallery_2.jpg", "./assets/video/Throttle.mp4", "./assets/video/Brake.mp4","./assets/video/steering-mechanism-sbw.mp4"]
  },
  {
    title: "Vehicle Dynamics Simulation of Scaled Autonomous Vehicle",
    category: "Vehicle Dynamics Simulation",
    //img: "./assets/images/Project_05_vehicle_dynamics_sim.jpg",
    video: "./assets/video/VD_sample2.mp4",
    desc: "• Developed a vehicle dynamics model of the autonomous go-Kart in MATLAB Simulink as part of a Digital Twin system.\n• The model is capable of manual drive mode, cruise control as well as autonomous trajectory optimization and tracking (this part is still under development).\n• Standard vehicle dynamics test maneuvers can be performed to evaluate system behavior and performance under various conditions and will soon be integrated into a AutoDrive Simulator of its own !",
    link: null,
    gallery: ["./assets/video/Manual_VD.mp4","./assets/video/Fishhook_VD.mp4","./assets/video/Raceline_Optimization.mp4","./assets/video/VD_maneuvers.mp4", "./assets/images/gallery/Project_05_gallery_3.jpg","./assets/images/Project_05_vehicle_dynamics_sim.jpg"]
  },
  {
    title: "AutoDrive Vehicle Dynamics Simulation of (1/10th) Scaled Autonomous Vehicle",
    category: "Vehicle Dynamics Simulation",
    img: "./assets/images/Project_06_autodrive.jpg",
    video: "./assets/video/autodrive-sim.mp4",
    desc: "• Simulated vehicle dynamics test maneuvers for a 1/10th scale autonomous racing vehicle using a Simulink–AutoDrive co-simulation environment.\n• Performed simulation with real-time pacing for accurate behavior replication.\n• This simulation is of a 1/10th scale vechicle, the AutoDrive model of The autonomous go-kart (1/3rd scale vehicle) is still in works and will be out for simulations soon.",
    link: null,
    gallery: ["./assets/images/gallery/Project_06_gallery_2.jpg", "./assets/video/FH_AutoDrive.mp4","./assets/images/gallery/Project_06_gallery_4.jpg", "./assets/video/Slalom_AutoDrive.mp4","./assets/images/gallery/Project_06_gallery_1.jpg"]
  },
  {
    title: "Vehicle Dynamics and Stability Analysis of Vehicle-Trailer System",
    category: "Vehicle Dynamics Simulation",
    img: "./assets/images/Project_07_trailer_dynamics.jpg",
    desc: "• Modeled and simulated a tractor–trailer system in Simulink to analyze stability and dynamic behavior.\n• Implemented a simplified 2-DOF bicycle model for articulated vehicles with nonlinear tire dynamics for better replication of real-world behavior.\n• Tested skidpad and fishhook maneuvers under varying CG positions, hitch locations, and weight distributions.",
    link: null,
    gallery: ["./assets/images/gallery/Project_07_gallery_1.jpg", "./assets/images/gallery/Project_07_gallery_2.jpg", "./assets/images/gallery/Project_07_gallery_3.jpg", "./assets/images/gallery/Project_07_gallery_4.jpg", "./assets/images/gallery/Project_07_gallery_5.jpg"]
  },
  {
    title: "Multibody Dynamics Analysis of a 5-Link Serial Chain Robotic Arm",
    category: "Multibody Systems Design and Simulation",
    img: "./assets/images/Project_08_robotic_arm.jpg",
    video: "./assets/video/robotic-arm.mp4",
    desc: "• Modelled and Simulated a 5-link robotic arm to accurately track desired trajectories by controlling their joints by using multibody kinematics and dynamics first principles.\n• Implemented various closed-loop control strategies with redundancy resolution to compare the results for precise motion planning in constrained spaces using MATLAB.\n• Designed a MATLAB GUI for parameter tuning and analyzing its effect on behavior of the robotic arm. \n • Validated and compared simulation outcomes against the one conducted in software tools like CoppeliaSim (aka V-REP) and MSC Adams (in Co-simulation with MATLAB).",
    link: "https://github.com/SaneelRevankar/Redundancy-resolution-for-5-link-Serial-Chain-Manipulator",
    gallery: ["./assets/images/gallery/Project_08_gallery_1.jpg", "./assets/images/gallery/MSC_Adams.png", "./assets/video/Robotic_Arm_matlab.mp4", "./assets/images/gallery/Project_08_gallery_3.jpg"]
  },
  {
    title: "Mobile-Manipulator Kuka YouBot Control",
    category: "Multibody Systems Design and Simulation",
    img: "./assets/images/Project_09_kuka_youbot.jpg",
    video: "./assets/video/kuka-youbot.mp4",
    desc: "• Simulated a mobile manipulator robot in a MATLAB-CoppeliaSim connected environment to perform desired motion and actions of the arm, controlled via MATLAB.\n• Demonstrated motion of the robot following dersired trajectory on the floor, Kuka arm end-effector traveling in a semi-circle at maximum reach, as well as a straight-line pick-and-place motion.",
    link: null,
    gallery: ["./assets/video/Q1ABC_CoppeliaSim_Kukayoubot.mp4","./assets/images/gallery/Project_09_gallery_1.jpg","./assets/video/Q1E_CoppeliaSim Edu - Kukayoubot .mp4", "./assets/images/gallery/Project_09_gallery_2.jpg", "./assets/video/Q1D_CoppeliaSim Edu - Kukayoubot .mp4","./assets/images/gallery/Project_09_gallery_3.jpg"]
  },
  {
    title: "NVH: Experimental BIW Modal Analysis",
    category: "Vehicle NVH Testing",
    img: "./assets/images/Project_10_biw_experimental.jpg",
    desc: "• Gained hands-on experience with FRF data acquisition and modal analysis using Siemens SCADA and Testlab software to identify and analyze rigid body modes, flexible body modes (bending and torsion), and their corresponding natural frequencies for a body-in-white (BIW) structure.\n• Mounted a BMW X3 BIW structure with 10 single-axis accelerometers in free-free conditions using airbag suspension, mimicking unconstrained modal excitation environments and exciting it with shakers.\n• Recorded accelerometer data through Siemens SCADA, post-processed it in Siemens Testlab, and animated mode shapes for better visualization of bending and torsion.",
    link: null,
    gallery: ["./assets/images/gallery/Project_10_gallery_3.jpg", "./assets/images/gallery/Project_10_gallery_6.jpg", "./assets/images/gallery/Project_10_gallery_5.jpg", "./assets/images/gallery/Project_10_gallery_4.jpg", "./assets/images/gallery/Project_10_gallery_1.jpg", "./assets/images/gallery/Project_10_gallery_2.jpg"]
  },
  {
    title: "NVH: MIMO Modal Analysis of BMW X3 BIW",
    category: "Vehicle NVH Testing",
    img: "./assets/images/Project_11_biw_mimo_modal.jpg",
    video: "./assets/video/biw-mimo-mode-shape-full2.mp4",
    desc: "• Gained hands-on experience with MIMO modal analysis using Siemens SCADA and Testlab software on a BMW X3 body-in-white structure, using 14 triaxial accelerometers to identify and analyze rigid and flexible body modes and their corresponding natural frequencies.\n• Identified the first torsional (37.1 Hz) and first bending (54.7 Hz) modes via FRF analysis and animated them for visualization, validated modal symmetry through the Driving Point Function, and verified linear system behavior via reciprocity testing.",
    link: null,
    gallery: ["./assets/video/3rd_fn_mode.mp4", "./assets/video/2nd_fn_mode.mp4", "./assets/images/gallery/Project_11_gallery_5.jpg", "./assets/images/gallery/Project_11_gallery_1.jpg", "./assets/images/gallery/Project_11_gallery_4.jpg"]
  },
  {
    title: "NVH: Modal Analysis of Automotive Splash Shield",
    category: "Vehicle NVH Testing",
    img: "./assets/images/Project_12_splash_shield.jpg",
    desc: "• Gained experience performing FEA simulation-based modal analysis using CAE tools like Altair Hypermesh with the OptiStruct solver on a finite element model of an automotive splash shield. Identified the first six natural frequencies and visualized the corresponding mode shapes (instances showing bending at roughly 129.5 Hz and torsion at roughly 149.6 Hz.",
    link: null,
    gallery: ["./assets/images/gallery/Project_12_gallery_1.jpg", "./assets/images/gallery/Project_12_gallery_2.jpg", "./assets/images/gallery/Project_12_gallery_5.jpg", "./assets/images/gallery/Project_12_gallery_4.jpg", "./assets/images/gallery/Project_12_gallery_3.jpg"]
  },
  {
    title: "NVH: Engine Order Analysis",
    category: "Vehicle NVH Testing",
    img: "./assets/images/Project_13_engine_order.jpg",
    desc: "• Gained hands-on experience measuring noise and vibration data using order tracking analysis on a BMW 530 with an inline-6 engine operated on a chassis dynamometer, using Siemens Testlab and SCADAS Mobile, an optical tach, accelerometers, and linear/A-weighted microphones.\n• Conducted wide-open-throttle acceleration testing across gears and engine speeds, then processed the data into waterfall plots to identify engine components responsible for noise, such as the alternator, cylinder head, and firing pulses.",
    link: null,
    gallery: ["./assets/images/gallery/Project_13_gallery_1.jpg", "./assets/images/gallery/Project_13_gallery_2.jpg",, "./assets/images/gallery/Project_13_gallery_3.png",, "./assets/images/gallery/Project_13_gallery_4.png"]
  },
  {
    title: "Engine Performance and Knock Analysis Using MATLAB",
    category: "Powertrain Modeling",
    img: "./assets/images/gallery/Project_14_gallery_4.jpg", 
    desc: "• Performed thermodynamic analysis of 300 engine combustion cycles using MATLAB, instrumenting a virtual engine test setup via .tdms data acquisition using LabView and MATLAB.\n• Computed total work done and cycle efficiency, plotted raw pressure traces to analyze cycle-to-cycle variability and combustion repeatability, and identified an engine knock frequency of approximately 6.42 kHz by applying FFT and noise filtering.",
    link: null,
    gallery: ["./assets/images/gallery/Project_14_engine_knock.jpg","./assets/images/gallery/Project_14_gallery_1.jpg","./assets/images/gallery/Project_14_gallery_2.jpg", "./assets/images/gallery/Project_14_gallery_3.jpg"]
  },
  {
    title: "Series Hybrid Powertrain Model of Ford Fusion 2020",
    category: "Powertrain Modeling",
    img: "./assets/images/Project_15_ford_fusion_hybrid.jpg",
    desc: "• Modelled and simulated a series-hybrid model of a conventional ICE-driven vehicle using MATLAB Simulink.\n• Optimized the power split between engine and battery based on the steady state efficiency maps. Developed an ideal gear shift strategy to test a series-parallel variant as well. \n• Compared performance and fuel usage from the simulation results with a non-hybrid baseline model to understand the working and improvements achieveable by implemantation of hybrid technology.",
    link: null,
    gallery: ["./assets/images/gallery/Project_15_gallery_1.jpg", "./assets/images/gallery/Project_15_gallery_2.jpg", "./assets/images/gallery/Project_15_gallery_3.png", "./assets/images/gallery/Project_15_gallery_4.png"]
  },
  
  
  {
    title: "Modelling and Simulation of Four-Bar Mechanism",
    category: "Multibody Systems Design and Simulation",
    img: "./assets/images/gallery/Project_16_gallery_9.jpg",
    video: "./assets/video/4Bar_Matlab_thumb.mp4",
    desc: "• Developed a complete kinematic model of a four-bar mechanism to characterize joint motion and coupler-point trajectories across the operating range.\n• Explored different ways to evaluate mechanism motion using MATLAB for simulation and analysis. First, developed an analytical solution for forward kinematics by writing out circle equations and loop-closure equations. Then, implemented numerical methods (Newton-Raphson and FSOLVE). Finally, validated numerical solutions against analytical results for different configurations (crossed and uncrossed 4 Bar).\n• Modeled and simulated the mechanism on different software tools like MSC Adams, CoppeliaSim and MATLAB Simscape, evaluating joint motion and coupler trajectories for different configurations and link geometries.",
    link: null,
    gallery: ["./assets/images/gallery/Project_16_gallery_9.jpg", "./assets/images/gallery/Project_16_gallery_6.jpg","./assets/video/4Bar_Matlab.mp4","./assets/video/4BarSimscape.mp4", "./assets/video/4Bar_Adams.mp4","./assets/video/4BarCoppeliasim.mp4"]
  },


  {
    title: "Reference Engine Speed Tracking Using Various Control Strategies",
    category: "Powertrain Modeling",
    img: "./assets/images/Project_17_mpc_controller.jpg",
    desc: "• Implemented various control strategies to achieve the objective of designing an idle speed controller that uses the electronic throttle (i.e. air path) to track the desired engine speed. \n• First implemented a PI controller to track the idle speed of the engine around the reference speed and tuned it to reduce settling time when an step change is introduced and to handle Disturbance Rejection i.e maintaining speed regulations in the presence of suppose an alternator load while idling at the reference speed.\n• Then developed an observer-based feedback full-state controller (combining integral control with a state observer) for the same engine speed tracking operation.\n• Compared it with a traditional PI controller to learn how the observer logic improved control by utilizing estimated state information to make more informed decisions, especially in complex systems with uncertainties.\n• Finally constructed an MPC controller for the same operation, by formulating a quadratic cost function to minimize tracking error and control effort, with a 10-step prediction horizon and constrained ignition angle and throttle inputs. \n• Compared it with the precious ones to learn how it helped improving transient tracking by predicting future behavior and adjusting control actions proactively.",
    link: null,
    gallery: ["./assets/images/gallery/Project_16_gallery_4.jpg","./assets/images/gallery/Project_16_gallery_1.jpg","./assets/images/gallery/Project_17_gallery_1.jpg", "./assets/images/gallery/Project_17_gallery_2.jpg", "./assets/images/gallery/Project_17_gallery_4.jpg","./assets/images/gallery/Project_17_gallery_3.jpg"]
  },
  {
    title: "A Linear Optimization Approach to Hydrogen Consumption Reduction in Fuel Cell Hybrid Vehicles",
    category: "Powertrain Modeling",
    img: "./assets/images/Project_18_hydrogen_fchev.jpg",
    desc: "• Developed and simulated a hydrogen fuel cell hybrid vehicle model using MATLAB, to achieve the objective of minimizing total hydrogen consumption. Applied linear optimization technique to compute the optimal power split between fuel cell and battery to fulfill the power demand.\n• Simulation results showed hydrogen usage of approximately 6.3 liters, which was a 14% improvement compared to the original case study (both were run on UDDS driving cycle).",
    link: null,
    gallery: ["./assets/images/gallery/Project_18_gallery_6.jpg","./assets/images/gallery/Project_18_gallery_1.jpg", "./assets/images/gallery/Project_18_gallery_2.jpg", "./assets/images/gallery/Project_18_gallery_5.jpg", "./assets/images/gallery/Project_18_gallery_4.jpg"]
  },
  {
    title: "Dynamic Response Analysis of a Cantilever Beam",
    category: "Mechanical Design",
    img: "./assets/images/Project_19_strain_gage_beam.jpg",
    desc: "• Analyzed the static and dynamic response of a cantilever beam using data acquisition via an eDAQ system.\n• Mounted and calibrated a strain gauge and accelerometer on an aluminum beam, applied static loads, and excited the beam with an impact hammer.\n• Processed the data in MATLAB to generate a force-vs-strain plot and a frequency spectrum for extracting modal frequencies.",
    link: null,
    gallery: ["./assets/images/gallery/Project_19_gallery_3.jpg", "./assets/images/gallery/Project_19_gallery_1.jpg", "./assets/images/gallery/Project_19_gallery_4.jpg", "./assets/images/gallery/Project_19_gallery_2.jpg"]
  },
  {
    title: "Initial Body-In-White Design for a Three-Passenger Vehicle",
    category: "Mechanical Design",
    img: "./assets/images/Project_20_biw_design.jpg",
    desc: "• Designed a body-in-white layout for a 3-passenger vehicle, targeting performance requirements for bending stiffness, torsion stiffness, crash management, passenger compartment structural integrity, and mass efficiency.\n• Performed strength analysis of the lower B-pillar in Hypermesh and modeled the final BIW in SolidWorks.",
    link: null,
    gallery: ["./assets/images/gallery/Project_20_gallery_2.jpg", "./assets/images/gallery/Project_20_gallery_3.jpg", "./assets/images/gallery/Project_20_gallery_5.jpg", "./assets/images/gallery/Project_20_gallery_4.jpg", "./assets/images/gallery/Project_20_gallery_1.jpg"]
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
  if (src.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.muted = true;
    video.playsInline = true;
    projectDetailGallery.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.alt = project.title;
    img.loading = "lazy";
    projectDetailGallery.appendChild(img);
  }
});


  
 // project.gallery.forEach(function (src) {
   // const img = document.createElement("img");
   // img.src = src;
   // img.alt = project.title;
   // img.loading = "lazy";
   // projectDetailGallery.appendChild(img);
 // });

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
