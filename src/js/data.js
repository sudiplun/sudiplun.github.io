const data = {
  Education: [
    {
      instituation: "Nepal Police School",
      Degree: "+2 Science",
      duration: "jul 2018 - Dec 2020",
    },
    {
      instituation: "Janamaitri campus",
      Degree: "Bachelor Degree",
      duration: "jul 2021- running",
    },
  ],
};

const Education = document.getElementById("education");

data.Education.forEach((e) => {
  //const educationDiv = document.createElement('div');

  const instituationHead = document.createElement("h3");
  //instituationHead.classList.add("font-bold");
  instituationHead.textContent = e.instituation;

  const degree = document.createElement("p");
  degree.textContent = e.Degree;

  const duration = document.createElement("p");
  duration.textContent = e.duration;

  Education.appendChild(instituationHead);
  Education.appendChild(degree);
  Education.appendChild(duration);
});
