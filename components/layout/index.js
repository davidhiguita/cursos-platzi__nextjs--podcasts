import Head from 'next/head';
import Link from 'next/link';

import styles from './styles';

const Layout = ({
    children,
    headerTitle,
    title
}) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
        </Head>

        <div className="layout">
            <header className="layout__header">
                <Link href="/"><a>{headerTitle}</a></Link>
            </header>
            <div className="layout__content">
                {children}
            </div>
        </div>

        <style jsx>{styles}</style>

        <style jsx global>{`
            body {
                height: 100vh;
                margin: 0;
                padding: 0;
                width: 100vw;
            }
        `}</style>
    </React.Fragment>
);

export default Layout;
