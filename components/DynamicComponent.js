import SbEditable from "storyblok-react";
import Placeholder from "./Placeholder";
import Person from "./Person";
import Project from "./Project";
import TextBlock from "./TextBlock";
import Testimonial from "./Testimonial";
import SlideShow from "./SlideShow";

// resolve Storyblok components to Next.js components
const Components = {
  person: Person,
  project: Project,
  textblock: TextBlock,
  testimonial: Testimonial,
  slideshow: SlideShow,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    // wrap with SbEditable for visual editing
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    );
  }

  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
