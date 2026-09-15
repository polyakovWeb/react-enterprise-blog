import type { Story } from "storybook/internal/toolsets-docs";
import { type ThemeT } from "@/entities/theme";
import type { StoryContext } from "@storybook/react"
import { ThemeProvider } from "@/app/providers/ThemeProvider";

export const ThemeDecorator = (Story: Story, context: StoryContext) => {
    const theme = context.globals.theme as ThemeT;

    return (
        <ThemeProvider initialTheme={theme}>
            <Story/>
        </ThemeProvider>
    );
};