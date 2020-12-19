import { Meta } from "@storybook/react/types-6-0";
import { Title } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
} as Meta;

export const Primary = () => <Title>A Title</Title>;
