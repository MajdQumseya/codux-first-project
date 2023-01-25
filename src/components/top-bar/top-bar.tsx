import styles from './top-bar.module.scss';
import classNames from 'classnames';

export interface TopBarProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-top-bars-and-templates
 */
export const TopBar = ({ className, children = 'TopBar' }: TopBarProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
