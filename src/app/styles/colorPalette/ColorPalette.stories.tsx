import type { Meta, StoryObj } from '@storybook/react-vite';
import cls from './ColorPalette.module.scss';
import { ColorPalette } from "@storybook/addon-docs/blocks";

const surfaceTokens = [
    ['--color-bg-page', 'Фон страницы'],
    ['--color-bg-surface', 'Фон Navbar, Sidebar и компонентов'],
    ['--color-text-primary', 'Основной текст'],
    ['--color-text-secondary', 'Вторичный текст'],
    ['--color-border', 'Границы и разделители'],
    ['--color-text-muted', 'Неактивный и вспомогательный текст'],
] as const;

const accentTokens = [
    ['--color-accent', 'Основной акцент'],
    ['--color-accent-hover', 'Наведение'],
    ['--color-accent-active', 'Активное состояние'],
    ['--color-accent-disabled', 'Отключённое состояние'],
    ['--color-focus', 'Фокус клавиатуры'],
    ['--color-on-accent', 'Текст на акцентном фоне'],
] as const;

const statusTokens = [
    ['--color-info', 'Информационные сообщения', 'Информация'],
    ['--color-danger', 'Ошибки и удаление', 'Ошибка'],
    ['--color-success', 'Успешные действия', 'Успешно'],
    ['--color-warning', 'Предупреждения', 'Предупреждение'],
] as const;

const meta = {
    title: 'Design System/Color Palette',
    component: ColorPalette,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'Справочник цветовых токенов. Переключайте тему через Theme toolbar в верхней панели Storybook.',
            },
        },
    },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

const TokenList = ({tokens,}: {
    tokens: readonly (readonly [string, string])[];
}) => (
    <div className={cls.tokenGrid}>
        {tokens.map(([name, description]) => (
            <div className={cls.token} key={name}>
                <div className={cls.swatch} style={{background: `var(${name})`}}/>
                <div>
                    <code className={cls.tokenName}>{name}</code>
                    <p className={cls.tokenDescription}>{description}</p>
                </div>
            </div>
        ))}
    </div>
);

export const Overview: Story = {
    render: () => (
        <main className={cls.page}>
            <header className={cls.header}>
                <h1 className={cls.title}>Color palette</h1>
                <p className={cls.description}>
                    Семантические цветовые токены приложения. Используйте назначение
                    переменной, а не конкретный HEX-код: так компоненты автоматически
                    поддерживают светлую и тёмную темы.
                </p>
            </header>

            <section className={cls.section}>
                <h2 className={cls.sectionTitle}>Фон и текст</h2>
                <TokenList tokens={surfaceTokens}/>
                <div className={cls.surfaceDemo}>
                    <div className={`${cls.surface} ${cls.pageSurface}`}>
                        <h3 className={cls.sampleTitle}>Страница</h3>
                        <p className={cls.secondaryText}>Вторичный текст на фоне страницы.</p>
                        <p className={cls.mutedText}>Вспомогательная подпись.</p>
                    </div>
                    <div className={`${cls.surface} ${cls.componentSurface}`}>
                        <h3 className={cls.sampleTitle}>Поверхность компонента</h3>
                        <p className={cls.secondaryText}>Navbar, Sidebar, панели и карточки.</p>
                        <a className={cls.linkDemo} href="/?path=/story/design-system-color-palette--overview">
                            Акцентная ссылка
                        </a>
                    </div>
                </div>
            </section>

            <section className={cls.section}>
                <h2 className={cls.sectionTitle}>Акцент и интерактивные состояния</h2>
                <TokenList tokens={accentTokens}/>
                <div className={cls.accentGrid}>
                    <button className={`${cls.accentButton} ${cls.accent}`} type="button">Accent</button>
                    <button className={`${cls.accentButton} ${cls.hover}`} type="button">Hover</button>
                    <button className={`${cls.accentButton} ${cls.active}`} type="button">Active</button>
                    <button className={`${cls.accentButton} ${cls.disabled}`} type="button" disabled>Disabled</button>
                    <button className={`${cls.accentButton} ${cls.accent}`} type="button">Focus me</button>
                </div>
            </section>

            <section className={cls.section}>
                <h2 className={cls.sectionTitle}>Системные состояния</h2>
                <div className={cls.tokenGrid}>
                    {statusTokens.map(([name, description]) => (
                        <div className={cls.token} key={name}>
                            <div className={`${cls.swatch} ${cls[name.slice(8)]}`}
                                 style={{background: `var(${name})`}}/>
                            <div>
                                <code className={cls.tokenName}>{name}</code>
                                <p className={cls.tokenDescription}>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cls.statusGrid}>
                    {statusTokens.map(([name, , title]) => (
                        <div className={`${cls.status} ${cls[name.slice(8)]}`} key={name}>
                            <p className={cls.statusTitle}>{title}</p>
                            <p className={cls.statusText}>Пример сообщения для пользователя.</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    ),
};