import { css, keyframes } from 'styled-components';

/**
 * References:
 * css: https://www.styled-components.com/docs/api#css
 * keyframes: https://www.styled-components.com/docs/api#keyframes
 */

export const onActive = css`
  cursor: pointer;
  &:active {
    transform: ${props => (props.disabled ? 'none' : 'translateY(2px)')};
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const shadowBox = css`
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px ${props => props.theme.greyColor};
`;
