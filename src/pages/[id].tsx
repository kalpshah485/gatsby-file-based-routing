import { PageProps } from "gatsby";
import * as React from "react";
const DynamicIDPage: React.FC<PageProps> = ({ params }) => {
  console.log(params);
  return (
    <main>
      <h1>Dynamic Id Route</h1>
      <h1>dynamic id : {params.id}</h1>
    </main>
  );
};

export default DynamicIDPage;
