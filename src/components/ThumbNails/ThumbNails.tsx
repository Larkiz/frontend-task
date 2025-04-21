import styled from "styled-components";

type Props = {
  value: number;
  active: boolean;
  onClick: () => void;
};

const Button = styled.button`
  border: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Value = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
`;

export const LikeButton = ({ value, active, onClick }: Props) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>
        <svg
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666656 24.6667H3.33332C4.06666 24.6667 4.66666 24.0667 4.66666 23.3333V11.3333C4.66666 10.6 4.06666 10 3.33332 10H0.666656V24.6667ZM27.1067 15.1733C27.2533 14.84 27.3333 14.48 27.3333 14.1067V12.6667C27.3333 11.2 26.1333 10 24.6667 10H17.3333L18.56 3.8C18.6267 3.50667 18.5867 3.18667 18.4533 2.92001C18.1467 2.32001 17.76 1.77334 17.28 1.29334L16.6667 0.666672L8.11999 9.21334C7.61332 9.72001 7.33332 10.4 7.33332 11.1067V21.56C7.33332 23.2667 8.73332 24.6667 10.4533 24.6667H21.2667C22.2 24.6667 23.08 24.1733 23.56 23.3733L27.1067 15.1733Z"
            fill={active ? "#219653" : "#3A35418A"}
          />
        </svg>
      </Button>
      <Value>{value}</Value>
    </Wrapper>
  );
};

const DislikeSvgButton = styled(Button)`
  padding-top: 15px;
`;

export const DislikeButton = ({ value, active, onClick }: Props) => {
  return (
    <Wrapper>
      <DislikeSvgButton onClick={onClick}>
        <svg
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666645 0.333328H3.33331C4.06665 0.333328 4.66665 0.933328 4.66665 1.66666V13.6667C4.66665 14.4 4.06665 15 3.33331 15H0.666645V0.333328ZM27.1066 9.82666C27.2533 10.16 27.3333 10.52 27.3333 10.8933V12.3333C27.3333 13.8 26.1333 15 24.6666 15H17.3333L18.56 21.2C18.6266 21.4933 18.5866 21.8133 18.4533 22.08C18.1466 22.68 17.76 23.2267 17.28 23.7067L16.6666 24.3333L8.11998 15.7867C7.61331 15.28 7.33331 14.6 7.33331 13.8933V3.45333C7.33331 1.73333 8.73331 0.333328 10.4533 0.333328H21.2533C22.2 0.333328 23.0666 0.826661 23.5466 1.62666L27.1066 9.82666Z"
            fill={active ? "#EB5757" : "#3A35418A"}
          />
        </svg>
      </DislikeSvgButton>
      <Value>{value}</Value>
    </Wrapper>
  );
};
