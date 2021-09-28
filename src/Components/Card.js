import classes from './Card.module.css';
import circle2 from '../images/bg-pattern-bottom.svg';
import circle1 from '../images/bg-pattern-top.svg';
import Profile from './Profile';

function Card() {
	return (
		<section className={classes.layout}>
			<img className={classes.circle2} src={circle2} alt="gradient circle for decoration" />
			<img className={classes.circle1} src={circle1} alt="gradient circle for decoration" />
			<Profile />
		</section>
	);
}

export default Card;
