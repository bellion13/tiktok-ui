import Header from '~/component/Layout/component/Header';
import Sidebar from './Sidebar';

function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div className="content">
                <Sidebar />
                <div className="container">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
