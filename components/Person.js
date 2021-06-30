import SbEditable from "storyblok-react";

const Person = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white-half w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">
            {blok.name}
          </h1>
          <p>{blok.position}</p>
          <p className="text-gray-500 text-lg max-w-lg">
            {blok.qualifications}
          </p>
          <img className="w-full bg-gray-300 my-16" src={blok.image.filename} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {blok.description}
        </div>
      </div>
    </SbEditable>
  );
};

export default Person;
