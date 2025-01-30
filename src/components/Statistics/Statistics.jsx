import styles from './Statistics.module.css';

export const Statistics = ({ title , stats  }) => {
    return (
<section className={styles.statistics}>
  <h2 className={styles['stat-title']}>{title}</h2>

  <ul className={styles['stat-list']}>
{   stats.map( (item) => {
        return (
        <li key={item.id}
            className={styles['stat-item']}>
            <span className={styles['stat-label']}>{item.label}</span>
            <span className={styles['stat-percentage']}>{item.percentage}%</span>
        </li>
        )
    })
}
  </ul>
</section>
    );
  };
  
