import styled from "styled-components";
import searchIcon from "@/assets/icons/ic_search.png";
import { Action } from "@reduxjs/toolkit";
import { useRef } from "react";

const Input = styled.input`
  width: 100%;
  padding: 8px 14px 8px 44px;
  border: 1px solid #919eab52;
  font-size: 14px;
  background: url(${searchIcon}) no-repeat 10px center;
`;

type Props = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => Action;
};

export const SearchInput = ({ placeholder, onChange }: Props) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  return (
    <div>
      <Input
        onChange={(e) => {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            onChange(e);
          }, 500);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};
