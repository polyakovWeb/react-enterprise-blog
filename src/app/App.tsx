import { useTheme } from "@/entities/theme";
import { classNames } from "@/shared/lib/classNames/classnames";
import { AppRouter } from "@/app/providers/router";
import { NavBar } from "@/widgets/NavBar";
import { SideBar } from "@/widgets/SideBar";
import { Suspense } from "react";
import { LoaderWidget } from "@/widgets/LoaderWidget";
import ErrorBoundary from "@/app/providers/ErrorBoundary";

const App = () => {
    const {theme} = useTheme();

    return (
        <div id="app" className={classNames('app', {}, [theme])}>
            {/*i18n suspense*/}
            <Suspense fallback={<LoaderWidget/>}>
                <NavBar/>
                <div className='content-page'>
                    <SideBar/>
                    {/* to simplify, all routes are wrapped with default fallback
                     instead of each component with custom fb */}
                    <ErrorBoundary>
                        <AppRouter/>
                    </ErrorBoundary>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
