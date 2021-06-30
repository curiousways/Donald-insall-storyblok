import { render } from "storyblok-rich-text-react-renderer";

export default function Testimonial({ blok }) {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-3xl mb-4">Testimonial</h2>
      <blockquote className="mb-4">
        <p className="text-2xl">{blok.text && render(blok.text)}</p>
      </blockquote>
      <span>{blok.by}</span>
    </div>
  );
}
