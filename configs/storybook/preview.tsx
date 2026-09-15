// .storybook/preview.tsx
import type { Preview } from '@storybook/react';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/entities/theme';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: 'todo',
        },

        theme: 's'
    },

    globalTypes: {
        theme: {
            description: 'Global theme',
            defaultValue: 'light',
            toolbar: {
                icon: 'mirror',
                title: 'Theme',
                items: [
                    {value: Theme.LIGHT,
                        title: "Light"
                    },
                    {value: Theme.DARK,
                        title: "Dark"
                    },
                ],
            },
        },
    },
    initialGlobals: {
        theme: Theme.LIGHT,
    },

    decorators: [
        StyleDecorator,
        ThemeDecorator,
        RouterDecorator,
    ],
};

export default preview;