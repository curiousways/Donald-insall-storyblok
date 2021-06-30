import Storyblok from "../../lib/storyblok";
import useStoryblok from "../../lib/storyblok-hook";
import Layout from "../../components/Layout";
import DynamicComponent from "../../components/DynamicComponent";

export async function getStaticPaths() {
  // get all stories inside the people folder
  let { data } = await Storyblok.get("cdn/links/", {
    starts_with: "people",
  });

  let paths = [];

  Object.keys(data.links).forEach((linkKey) => {
    // don't generate route for folders or home entry
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;

    // generate page for the slug
    paths.push({ params: { slug: slug } });
  });

  console.log("PATHS----------", paths);
  console.log("Data List", data);

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  let slug = context.params.slug;
  let params = {
    version: "draft", // or 'published'
  };

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/people/${slug}`, params);

  console.log("Data******************", data);

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 10,
  };
}

export default function Person({ story, preview }) {
  const enableBridge = true; // use preview
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  story = useStoryblok(story, enableBridge);

  return (
    <Layout>
      <DynamicComponent blok={story.content} />
    </Layout>
  );
}
