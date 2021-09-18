import '../../style/style.css';

const template = (html) => {
    let template = document.createElement('template');

    template = `
		${html}
	`;
    return template;
};

export default template;
