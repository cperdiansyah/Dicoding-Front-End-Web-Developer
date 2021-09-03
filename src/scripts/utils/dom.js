const template = (html, css = "") => {
  const elem = document.createElement("template");
  elem.innerHTML = `
		<style>
		${css}
		</style>
		${html}
	`;
  return document.importNode(elem.content, true);
};

export default template;
