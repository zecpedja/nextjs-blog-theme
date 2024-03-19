import styles from './Sidebar.module.css'; // Adjust path as needed

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}>Books</li>
                <li className={styles.sidebarItem}>Movies</li>
            </ul>
        </div>
    );
};

export default Sidebar;
