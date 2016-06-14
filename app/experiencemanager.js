class ExperienceManager {
	constructor() {
		const nextProjects = document.getElementsByClassName("arrow_next");
		[].forEach.call(nextProjects, (nextProject) => {
			nextProject.addEventListener('click', this.moveProject, false);
		});

		document.getElementsByClassName("see-projects")[0].addEventListener('click', this.seeProjects, false);
	}

	seeProjects(element) {
		window.location.href = 'works.html';
	}

	moveProject(element) {
		const workLine = element.target.parentElement;
		const activeProject = workLine.getElementsByClassName("active")[0];
		const nextId = (parseInt(activeProject.id) + 1 > workLine.attributes['data-length'].value) ? 0 : parseInt(activeProject.id) + 1;
		activeProject.classList.remove('active');
		document.getElementById(nextId+'-'+workLine.firstChild.innerText).classList.add('active');
	}
}

export default ExperienceManager