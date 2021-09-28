import React from 'react';
import Stats from './Stats';
import styles from './Profile.module.css';
import img from '../images/image-victor.jpg';
import backgroun from '../images/bg-pattern-card.svg';

const Card = () => {
	return (
		<main className={styles.main}>
			<img
				className={styles.background}
				src={backgroun}
				alt="background pattern with blue gradient cyrcles"
			/>
			<section className={styles.info}>
				{' '}
				<img src={img} alt="image of the user" className={styles.img} />
				<h2>
					Victor Crest <span>26</span>{' '}
				</h2>
				<p> London </p>
			</section>
			<Stats />
		</main>
	);
};

export default Card;
