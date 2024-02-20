
import React, { useState } from 'react'
import {action} from '@storybook/addon-actions'
import { Rating, RatingType } from './Rating'

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyStars = () => {
    return <Rating value={0} onClick={() => {}}/>
}

export const Rating1 = () => {
    return <Rating value={1} onClick={() => {}}/>
}

export const Rating2 = () => {
    return <Rating value={2} onClick={() => {}}/>
}
export const Rating3 = () => {
    return <Rating value={3} onClick={() => {}}/>
}
export const Rating4 = () => {
    return <Rating value={4} onClick={() => {}}/>
}
export const Rating5 = () => {
    return <Rating value={5} onClick={() => {}}/>
}

export const ChangeRating = () => {
    const [rating,setRating] = useState<0 | 1 | 2 | 3 | 4 | 5>(3)
    return <Rating value={rating} onClick={setRating}/>
}
