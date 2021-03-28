const steps = [
    { stepNumber: 'Step 1', description: 'Come up with an idea that interests you' },
    { stepNumber: 'Step 2', description: 'Gain knowledge, insight, and inspiration to gain traction' },
    { stepNumber: 'Step 3', description: 'Create an approach to accomplish that idea' },
    { stepNumber: 'Step 4', description: 'Think about how your going to take that approach' },
    { stepNumber: 'Step 5', description: 'Create the basics' },
    { stepNumber: 'Step 6', description: 'Dive into complexity' },
    { stepNumber: 'Step 7', description: 'Touch up and conclude' },

];

function createStepsContainers(step) {
    const steps = document.createElement('div');
    steps.className = 'step';
    steps.innerHTML = `<h2>${step.stepNumber}</h2>  <p>${step.description}</p>`;

    return steps;
    
}

const stepContainers = document.getElementsByClassName("steps_Container")[0];
for (i = 0; i < steps.length; i++) {
    
    let step = createStepsContainers(steps[i]);
    stepContainers.appendChild(step);
    
}