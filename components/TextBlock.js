import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

export default function TextBlock({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div>
        {blok.title && <h2>{blok.title}</h2>}
        <div className="space-y-4">{blok.body && render(blok.body)}</div>
      </div>
    </SbEditable>
  );
}
