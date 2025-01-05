import styled from 'styled-components';

export const Button = styled.button<{ $destructive?: boolean; $ghost?: boolean; }>`
  padding: 1rem 1.5rem;
  background-color: ${props => props.$ghost ? 'transparent' : props.$destructive ? "var(--danger)" : "var(--accent)"};
  border-color: ${props => props.$destructive ? "var(--danger)" : "var(--accent)"};
  border-radius: 3px;
  color: ${props => !props.$ghost ? 'white' : props.$destructive ? "var(--danger)" : "var(--accent)"};
  outline: none;
  border-width: 2px;
  border-style: solid;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0;
  background-color: white;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  border-top: 1px solid var(--gray);
  gap: 0.5rem;
`;
