//import { Container } from 'react-bootstrap';
import './CardSkeleton.css';

export const CardSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map((item) => (
                <div className='skeleton-card-container'>
                    <div className='image-skeleton'></div>
                    <div className="card-skeleton-title"></div>
                    <div className="card-skeleton-subtitle"></div>
                    <div className="card-skeleton-btn"></div>
                </div>
        ))
    )
}