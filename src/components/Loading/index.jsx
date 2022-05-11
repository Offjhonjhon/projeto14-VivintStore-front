import { ThreeDots } from "react-loader-spinner";
import * as S from "./styles";

export default function Loading() {
  return (
    <S.Span>
      <ThreeDots width={50} height={50} color="white" />
    </S.Span>
  );
}
