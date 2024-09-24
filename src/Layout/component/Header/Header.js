import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import imgs from '~/assets/imgs';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { UploadIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';
import config from '~/config'


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'Language',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

   
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@tai',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}><img src={imgs.logo} alt="tiktok" /></Link>
                </div>
                
                {/* search */}
                <Search />
                {/* actions */}

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button outline rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log In
                            </Button>
                            <Button primary disabled>
                                Register
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/b810d74b8d94d17de51ede393858783d.jpeg?lk3s=a5d48078&nonce=35444&refresh_token=8d860b30760f52d9d9a0f0309e7967f1&x-expires=1727236800&x-signature=djJEg2%2B7%2F59EF6%2FC8QG42CTSERI%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Nguyen Trong Tai"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
