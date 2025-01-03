const data = {
  city: "Kathmandu, Nepal",
  skills: ["CSS", "Javascript", "ReactJS", "wordpress", "Linux Basic"],
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
  social: [
    {
      href: "https://www.linkedin.com/in/sudiplun/",
      src: "../assets/images/social-media/linkedin.svg",
      desc: "linkedin icon",
    },
    {
      href: "https://github.com/sudiplun/",
      src: "../assets/images/social-media/github.svg",
      desc: "github icon",
    },
  ],
};

const edu = document.getElementById("education");

//location
const locationDiv = document.getElementById("city");
//Create the <p> element
const cityP = document.createElement("p");
cityP.textContent = data.city;
locationDiv.appendChild(cityP);

data.Education.forEach((e) => {
  const instituationHead = document.createElement("h3");
  //instituationHead.classList.add("font-bold");
  instituationHead.textContent = e.instituation;

  const degree = document.createElement("p");
  degree.textContent = e.Degree;

  const duration = document.createElement("p");
  duration.textContent = e.duration;

  edu.appendChild(instituationHead);
  edu.appendChild(degree);
  edu.appendChild(duration);
});

// skills on list
document.getElementById("devSkills").innerHTML = data.skills
  .map(
    (skill) => `
      <div class="bg-gray-200 p-1 rounded m-1">
        <span class="text-gray-800">${skill}</span>
      </div>
    `,
  )
  .join("");

const socialLinkContainer = document.getElementById("socialMedia");

socialLinkContainer.innerHTML = data.social
  .map(
    (data) =>
      `<a class="mr-2 mt-2" href="${data.href}" traget="_blank"><img src="${data.src}" alt="${data.desc}"/></a>`,
  )
  .join("");
