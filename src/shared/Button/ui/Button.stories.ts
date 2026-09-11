import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { ButtonTheme } from "@/shared/Button";
import { Story } from "@storybook/addon-docs/blocks";
import { ButtonSize } from "@/shared/Button";
import { ButtonRounded } from "@/shared/Button/config/ButtonRounded.ts";

const meta = {
    component: Button,
    title: 'shared/Button',
    argTypes: {
        theme: {
            options: Object.values(ButtonTheme),
            control: {type: 'select'}
        },
        size: {
            options: Object.values(ButtonSize),
            control: {type: 'select'}
        },
        rounded: {
            options: Object.values(ButtonRounded),
            control: {type: 'select'}
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Primary',
    }
}

export const Secondary: Story = {
    args: {
        theme: ButtonTheme.SECONDARY,
        children: 'Secondary',
    }
}

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear',
    }
}

export const Small: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Small size',
        size: ButtonSize.S
    }
}

export const Medium: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Medium size',
        size: ButtonSize.M
    }
}

export const Large: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Large size',
        size: ButtonSize.L
    }
}

export const XLarge: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'XLarge size',
        size: ButtonSize.XL
    }
}

export const RoundedNone: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'RoundedNone',
        rounded: ButtonRounded.NONE
    }
}

export const RoundedS: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'RoundedS',
        rounded: ButtonRounded.S
    }
}

export const RoundedM: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'RoundedM',
        rounded: ButtonRounded.M
    }
}

export const RoundedL: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'RoundedL',
        rounded: ButtonRounded.L
    }
}

export const Disabled: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Disabled',
        disabled: true
    }
}