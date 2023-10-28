import styles from "./workspace.module.scss";
const Workspace: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className={styles.workspace}>{children}</div>;
};
export default Workspace;
