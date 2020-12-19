(() => {
  const fs = require("fs");
  const path = require("path");

  const COMPONENTS = "components";

  const allComponentsIndex = (componentName, componentFolder) =>
    `export { ${componentName} } from "./${componentFolder}";\n`;

  const componentIndex = (componentName) =>
    `export { ${componentName} } from "./${componentName}";`;

  const story = (componentName) => `
import { Meta } from "@storybook/react/types-6-0";
import { ${componentName} } from "./${componentName}";

export default {
  title: "Components/${componentName}",
  component: ${componentName},
} as Meta;

export const Primary = () => <${componentName}/>;
`;

  const test = (componentName) => `
import { render } from "@testing-library/react";
import { ${componentName} } from "./${componentName}";

describe("${componentName}", () => {
  it("renders", () => {
    render(<${componentName}/>);
  });
});
`;

  const component = (componentName) =>
    `export const ${componentName} = () => <div />;`;

  const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

  const createComponent = (name) => {
    if (!name || !name.length) {
      console.log(`Please provide a name for the component to be created.`);
      return;
    }

    if (!fs.existsSync(COMPONENTS)) {
      console.log(`Could not find the "${COMPONENTS}" folder, check your cwd.`);
      return;
    }

    const componentFolder = path.join(COMPONENTS, name);

    if (fs.existsSync(componentFolder)) {
      console.log(
        `The component "${name}" already exists in the "${COMPONENTS}" folder.`
      );
      return;
    }

    const componentName = name
      .split("-")
      .map((part) => capitalize(part))
      .join("");

    const allComponents = path.join(COMPONENTS, "index.tsx");

    if (fs.existsSync(allComponents)) {
      fs.appendFileSync(allComponents, allComponentsIndex(componentName, name));
    } else {
      fs.writeFileSync(allComponents, allComponentsIndex(componentName, name));
    }

    fs.mkdirSync(componentFolder);

    fs.writeFileSync(
      path.join(componentFolder, `index.tsx`),
      componentIndex(componentName)
    );

    fs.writeFileSync(
      path.join(componentFolder, `${componentName}.stories.tsx`),
      story(componentName)
    );

    fs.writeFileSync(
      path.join(componentFolder, `${componentName}.test.tsx`),
      test(componentName)
    );

    fs.writeFileSync(
      path.join(componentFolder, `${componentName}.tsx`),
      component(componentName)
    );
  };

  createComponent(process.argv[2]);
})();
