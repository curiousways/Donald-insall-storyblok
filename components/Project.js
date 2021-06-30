import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";

export default function Project({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <h1 className="text-4xl text-center font-bold font-serif text-primary tracking-wide">
        {blok.Title}
      </h1>
      <p className="text-center">{blok.subtitle}</p>
      <img src={blok.featured_image.filename} alt="featured image" />

      <div className="py-4">
        {blok.content.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </SbEditable>
  );
}
