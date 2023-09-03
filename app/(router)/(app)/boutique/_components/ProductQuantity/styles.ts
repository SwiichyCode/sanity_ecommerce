import styled from "styled-components";

export const ProductQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 10px;
`;

export const ProductQuantityButton = styled.button`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #ccc;
  }
`;

export const ProductQuantityText = styled.span`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;
