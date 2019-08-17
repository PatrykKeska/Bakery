import styled from "styled-components";

const ButtonBack = styled.button`
  position: fixed;
  z-index: 4;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.orange};
  font-size: 0.6em;
  width: 50px;
  height: 50px;
  padding: 20px 10px;
  border-radius: 60px;
  border: none;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 100%;
  transform: rotate(90deg);
  background-position: center;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  bottom: 10px;
  left: 45%;
  animation: buttonIncoming 0.2s linear;
  opacity: 0.8;

  @keyframes buttonIncoming {
    0% {
      opacity: 0;
      transform: translateY(100%) rotate(90deg);
    }

    100% {
    }
  }
`;

export default ButtonBack;
