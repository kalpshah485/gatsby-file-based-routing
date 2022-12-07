import { PageProps } from "gatsby";
import * as React from "react";
const DynamicCatchAllPage: React.FC<PageProps> = ({ params }) => {
  console.log(params.slug.split("/"));
  return (
    <main>
      <h1>Catch All Routes</h1>
      {params.slug.split("/").map((route, index) => (
        <h1 key={index}>
          {index + 1}: {route}
        </h1>
      ))}
    </main>
  );
};

export default DynamicCatchAllPage;
