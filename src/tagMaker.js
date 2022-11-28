export default function tagMaker(htmlTag, className, html) {
  let tag = document.createElement(htmlTag);
  if(className) {
    tag.classList.add(className);
  }
  if(html) {
    tag.innerHTML = html;
  }
  return tag;
};
