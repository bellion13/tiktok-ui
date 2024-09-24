import Header from '~/Layout/component/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="container">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
