import tagMaker from "./tagMaker";

export default function footer() {

  const p = tagMaker('p', 'copyright', 'Copyright @ 2022, Degrasso Digital. LLC');

  const footer = tagMaker('footer');
  footer.appendChild(p);

  return footer;
}
