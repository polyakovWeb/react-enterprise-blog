import { MainPage } from "@/pages/MainPage";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StoreProvider } from "@/app/providers/StoreProvider";

const meta = {
    component: MainPage,
    title: 'pages/MainPage',
} satisfies Meta<typeof MainPage>

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Default: Story = {
    render: () => (
        <StoreProvider>
            <MainPage/>
        </StoreProvider>
    )
}