const contactSection = document.querySelector('.contact');
const projectSection = document.querySelector('.project');

for (let i = 0; i < details.length; i++) {
  const textDiv = `
  <div class="col-lg-8 justify-content-center align-self-center">
  <div class="card-body">
    <h3 class="card-title">${details[i].titles}</h3>
    <p class="card-text">${details[i].projectDescription}</p>
    <div class="pt-4 pl-4">
      <button
        onclick="window.open('${details[i].sites}', '_blank')"
        type="button"
        class="btn btn-info mr-3 mb-3"
      >
        <i class="fas fa-laptop pr-1"></i> Visit Site
      </button>
      <button
        onclick="window.open('${details[i].urls}', '_blank')"
        type="button"
        class="btn btn-info mr-3 mb-3"
      >
        <i class="fab fa-github pr-1"></i> GitHub-Repo
      </button>
    </div>
  </div>
</div>`;

  //
  const imageDiv = `
      <div class="col-lg-4 justify-content-center align-self-center img-a">
        <a href="${details[i].sites}" target="_blank">
          <img
            
            src=${details[i].images}
            class="card-img img-fluid"
            alt="${details[i].alts}"
          />
        </a>
      </div>`;

  const newDiv = document.createElement('div');
  if (i % 2 === 0 || projectSection.clientWidth < 910) {
    newDiv.innerHTML = `
    <div class="card mb-3">
      <div class="row">
        ${textDiv}
        ${imageDiv}
      </div>
    </div>
`;
  } else {
    newDiv.innerHTML = `
    <div class="card mb-3">
      <div class="row">
        ${imageDiv}
        ${textDiv}
      </div>
    </div>
`;
  }
  projectSection.appendChild(newDiv);
}

const date = new Date();
copyRight = document.querySelector('.copyRight');
copyRight.innerHTML = ` © Ibsa Ejeta ${date.toString().slice(0, 15)}`;