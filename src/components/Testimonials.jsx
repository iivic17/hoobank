import { feedback } from '../constants';
import styles from '../styles';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
	<section
		id='clients'
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
		<div className='absolute z-[0] w-[40%] h-[35%] -right-[50%] top-0 pink__gradient' />
		<div className='absolute z-[1] w-[40%] h-[20%] rounded-full -right-[10%] bottom-40 white__gradient' />
		<div className='absolute z-[0] w-[10%] h-[40%] -right-[10%] bottom-20 blue__gradient' />

		<div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
			<h1 className={`${styles.heading2}`}>
				What people are
				<br className='sm:block hidden' />
				saying about us
			</h1>
			<div className='w-full md:mt-0 mt-6'>
				<p className={`${styles.paragraph} text-left max-w-[450px]`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
		</div>

		<div className='flex md:flex-row flex-col sm:justify-start justify-center w-full feedback-container relative z-[1]'>
			{feedback.map(card => (
				<FeedbackCard key={card.id} {...card} />
			))}
		</div>
	</section>
);

export default Testimonials;
