let currentRotation = 0;
let currentTargetIndex = 0;

let targetRotation = [225, 180, 90];
let targetHit = [false, false, false];

let currentProgress = 0;


// Function to update the rotation and progress bar
function updateRings() {

  if (currentProgress < 33) {
    document.getElementById("ring1").style.transform = `rotate(${currentRotation}deg)`;
  };

  if (currentProgress < 66) {
    document.getElementById("ring2").style.transform = `rotate(${currentRotation}deg)`;
  };

  if (currentProgress < 99) {
    document.getElementById("ring3").style.transform = `rotate(${currentRotation}deg)`;
  };

  if (currentProgress < 100) {
document.getElementById("progressBar").style.width = `${currentProgress}%`;
  };
}

// Right Arrow Key
// Rotate the ring right by 45 degrees
function handleKeyRight() {
  document.getElementById("Incorrect").style.display = 'none';

  if (currentRotation < 0) {
    currentRotation = 360 + (currentRotation % 360);  // Wrap negative rotations
  }
  
  currentRotation += 45;
  currentRotation = currentRotation % 360;

  updateRings();
  console.log("Current rotation:", currentRotation);
};


// Left Arrow Key
// Rotate the ring left by 45 degrees
function handleKeyLeft() {
  document.getElementById("Incorrect").style.display = 'none';

  currentRotation -= 45;
  if (currentRotation < 0) {
    currentRotation = 360 + currentRotation;  // Wrap to positive degrees
  }
  
  
updateRings();
console.log("Current rotation:", currentRotation);
};


// Enter Key
// Check if the current rotation matches the target rotation
function handleKeyEnter() {
  console.log("Enter key pressed");

  if (currentRotation == targetRotation[currentTargetIndex] && !targetHit[currentTargetIndex]) {
    currentProgress += 33;
    targetHit[currentTargetIndex] = true;
    console.log("correct");
    document.getElementById("progressBar").style.width = `${currentProgress}%`;

    // current progress determines if rings are shown
    if (currentProgress == 33){
      document.getElementById("ring2").style.display = 'block';
      document.getElementById("ring2").style.transform = `rotate(0deg)`;
      currentRotation = 0;
    };
  
    if (currentProgress == 66){
      document.getElementById("ring3").style.display = 'block';
      document.getElementById("ring3").style.transform = `rotate(0deg)`;
      currentRotation = 0;
    };

    
    currentTargetIndex++;

    if (currentTargetIndex >= targetRotation.length) {
      console.log("All targets completed!");
      document.getElementById("button").style.display = 'block';
      currentTargetIndex = 0;
      targetHit = [false, false, false]; 
  } 
}
  else if (currentRotation != targetRotation[currentTargetIndex]) {
    document.getElementById("Incorrect").style.display = 'block';
  }
}

function handleButtonClick() {
  console.log("Button clicked");
  if (currentProgress >= targetRotation.length) {
  GameConnector.onGameFinishClicked();
  document.getElementById("ring1").style.display = 'none';
  document.getElementById("ring2").style.display = 'none';
  document.getElementById("ring3").style.display = 'none';
  document.getElementById("button").style.display = 'none';
  document.getElementById("progress").style.display = 'none';
  document.body.style.backgroundImage = 'none';
  
  document.getElementById("safeOpen").style.display = 'block';
  document.getElementById("h1").style.display = 'block';
  };
};


// Keydown event listener
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    handleKeyRight();
  }

  if (e.key === "ArrowLeft") {
    handleKeyLeft();
  }

  if (e.key === "Enter") {
    handleKeyEnter();
  }
});

document.getElementById("button").addEventListener("click", () => {
  handleButtonClick();
  });
