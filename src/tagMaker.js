export default function tagMaker(htmlTag, className) {
  let tag = document.createElement(htmlTag);
  if(className) {
    tag.classList.add(className);
  } return tag;
};
