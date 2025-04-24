import styled from "styled-components";
import searchIcon from "@/assets/icons/ic_search.png";
import { Action } from "@reduxjs/toolkit";
import { useRef } from "react";

const Input = styled.input`
  width: calc(100% - 58px);
  padding: 8px 14px 8px 44px;
  border: 1px solid #919eab52;
  font-size: 14px;
  background: url(${searchIcon}) no-repeat 10px center;
`;

type Props = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => Action;
  value: string;
};

export const SearchInput = ({ placeholder, onChange, value }: Props) => {
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
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
};
