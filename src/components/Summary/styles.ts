import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme['gray-300']};
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 32px;
  }

  ${({ variant, theme }) =>
    variant === 'green' &&
    css`
      background-color: ${theme['green-700']};
    `}
`
