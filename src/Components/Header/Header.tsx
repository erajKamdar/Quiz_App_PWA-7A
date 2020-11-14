import React from 'react';
import firebase from '../../firebase';
// Styles
import styles from './Header.module.css';
// Icons
import { IconContext } from 'react-icons';
import { FaBell } from 'react-icons/fa';

// This component will be displayed at the top of the webapp.
const Header = () => {
    const clickHandler = async () => {
        try {
            const messaging = firebase.messaging();
            await messaging.requestPermission();
            const token = await messaging.getToken();
            console.log(`Token: ${token}`);
        }
        catch (err) {
            console.log('Error: '+err);
        }
    }
    return (
        <div className={styles.container}>
            {/* <div className={styles.logoContainer}>
                <h2 className={styles.title}>
                   {'<' + 'Expense Tracker App' + '/>'}
                </h2>
            </div> */}

            <IconContext.Provider value={{ size: "50px" }}>
                <button className={styles.notifiactions} onClick={clickHandler}>
                    <FaBell title="Allow Notifiactions"/>
                </button>
            </IconContext.Provider>
        </div>
    )
};

export default Header;