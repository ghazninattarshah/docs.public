import React from 'react'
import styled from 'styled-components'
import { media } from './styles/media'

const HeadingWrapper = styled.div`
  margin: 0 0 4em;

  ${media.phone`
    border-bottom: unset;
    margin-bottom: 0;
  `}
`

const HeadingContent = styled.h1`
  font-weight: 600;
  font-size: 2.441em;
  margin: 1em 0;
`

const SubHeadingContainer = styled.div`
  font-size: 1.25em;
  line-height: 1.5em;
  max-width: 69ch;
  padding: 0 0 2em;
  margin: 0;

  ${media.phone`
    padding-bottom: 2em;
  `}
`

const BannerContainer = styled.img`
  width: 100%;
  border-radius: 6px;
`

const CustomHorizontalRule = styled.hr`
  border: 1px solid var(--border-primary);
`

export default function HeadingBlock(props) {
  const { title, subtitle, banner } = props
  return (
    <HeadingWrapper>
      <HeadingContent>{title}</HeadingContent>
      {subtitle && <SubHeadingContainer>{subtitle}</SubHeadingContainer>}
      {banner && <BannerContainer src={banner}></BannerContainer>}
      {subtitle && !banner && <CustomHorizontalRule />}
    </HeadingWrapper>
  )
}