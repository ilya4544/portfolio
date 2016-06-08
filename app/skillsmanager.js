class SkillsManager {
	constructor() {
		const skillsSelector = document.getElementById("select-skills");
		skillsSelector.addEventListener('change', this.changeCategory, false);
		document.getElementById(skillsSelector.options[skillsSelector.selectedIndex].value).style.display = 'block';
	}

	changeCategory(element) {
		const allCategories = document.getElementsByClassName('skills-list');
		[].forEach.call(allCategories, (item) => {
			item.style.display = 'none';
		});
		document.getElementById(element.currentTarget.value).style.display = 'block';
	}
}

export default SkillsManager