import Header from '~/component/Layout/component/Header';



function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="container">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
