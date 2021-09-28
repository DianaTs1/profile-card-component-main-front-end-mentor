import React from 'react';
import styles from './Stats.module.css';

const Stats = () => {
	return (
		<section>
			<div className={styles.line} />
			<ul className={styles.stats}>
				<li>
					<h3>80K</h3>
					<p>Followers</p>
				</li>
				<li>
					<h3>803K</h3>
					<p>Likes</p>
				</li>
				<li>
					<h3>1.4K</h3>
					<p>Photos</p>
				</li>
			</ul>
		</section>
	);
};

export default Stats;
