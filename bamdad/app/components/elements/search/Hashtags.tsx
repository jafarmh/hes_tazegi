import React from 'react';

interface HashtagProps {
    text: string
}

export default (props: HashtagProps) => {
    const { text } = props
    return (
        <>
            <div className='bg-[var(--grayHashtag)] p-2 text-[var(--gray)] text-sm rounded-lg'>
                <small># {text}</small>
            </div>
        </>
    )
}
