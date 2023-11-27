import React from 'react'
import styled from 'styled-components'
import MovieTag from '@components/common/MovieArticle/MovieTag'
import MyCommentBox from './MyCommentBox'
import { BoxHeader } from '@styles/common/myPage/ReviewBoxHeader'
interface InMyPageReviewPropsTypes{
  writeComment: boolean;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  isWriteComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyPageReview(props:InMyPageReviewPropsTypes) {
  const {writeComment, comment} = props;

  return (
    <MyPageReviewBox>
      {writeComment&&<MyCommentBox comment={comment}/>}
      <TagBox>
        <BoxHeader>선호하는 태그</BoxHeader>
        <MovieTag tag={['스튜디오 지브리','소셜 원작']} />
      </TagBox>
    </MyPageReviewBox>
  )
}

const MyPageReviewBox = styled.div` 
  padding: 0 0;
`

const TagBox = styled.article`
  gap:1.2rem;
  padding: 4rem 0;
`