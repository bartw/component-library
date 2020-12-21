import { Meta } from "@storybook/react/types-6-0";
import { Title } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    level: { control: { type: "select", options: [1, 2, 3, 4, 5, 6] } },
  },
} as Meta;

const Template = ({ level, children }) => {
  return <Title level={level}>{children}</Title>;
};

export const Primary = Template.bind({});
Primary.args = {
  level: 1,
  children: "The Title",
};
