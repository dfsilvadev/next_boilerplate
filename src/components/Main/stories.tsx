import { Story, Meta } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";

import Main from ".";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs],
  args: {
    title: "React Avançado",
    description: "TypeScript, React, NextJS e Styled Componets"
  }
} as Meta;

export const Basic: Story = ({ title, description }) => {
  return (
    <Main
      title={text("Title", title)}
      description={text("Description", description)}
    />
  );
};
