import React, { useRef } from 'react';
import { CardInfo } from '.';
import './input.css';

export default { title: 'Components/CardInfo' };

export const CardNumber = () => {
  const ref = useRef(null);
  return (
    <CardInfo
      onValidate={() => true}
      onChange={(value) => {
        // console.log(value);
      }}
      ref={ref}
      title="카드 번호"
      delimeter={'-'}
    >
      <CardInfo.Number maxLength={4} />
      <CardInfo.Number maxLength={4} />
      <CardInfo.Number maxLength={4} hideValue={true} />
      <CardInfo.Number maxLength={4} hideValue={true} />
    </CardInfo>
  );
};

export const CardText = () => {
  const ref = useRef(null);
  return (
    <CardInfo
      onValidate={() => true}
      onChange={(value) => {
        // console.log(value);
      }}
      ref={ref}
      title="카드 소유자 이름(선택)"
      countMaxLength={true}
    >
      <CardInfo.Input
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </CardInfo>
  );
};

export const CardMonthYear = () => {
  const ref = useRef(null);
  return (
    <CardInfo
      onValidate={() => true}
      onChange={(value) => {
        // console.log(value);
      }}
      ref={ref}
      title="만료일"
      delimeter={'/'}
      width="50%"
    >
      <CardInfo.Month maxLength={2} placeholder="MM" />
      <CardInfo.Year maxLength={2} placeholder="YY" />
    </CardInfo>
  );
};

export const CardSecureCode = () => {
  const ref = useRef(null);
  return (
    <CardInfo
      onValidate={() => true}
      onChange={(value) => {
        // console.log(value);
      }}
      ref={ref}
      title="보안 코드(CVC/CVV)"
      width="25%"
    >
      <CardInfo.Number maxLength={3} hideValue={true} />
    </CardInfo>
  );
};

export const CardPassword = () => {
  const ref = useRef(null);
  return (
    <CardInfo
      onValidate={() => true}
      onChange={(value) => {
        // console.log(value);
      }}
      ref={ref}
      title="비밀번호"
      width="60%"
      background={false}
    >
      <CardInfo.Number maxLength={1} hideValue={true} />
      <CardInfo.Number maxLength={1} hideValue={true} />
      <CardInfo.Blocked maxLength={1} />
      <CardInfo.Blocked maxLength={1} />
    </CardInfo>
  );
};

export const CardInfomations = () => (
  <React.Fragment>
    <CardNumber />
    <CardText />
    <CardMonthYear />
    <CardSecureCode />
    <CardPassword />
  </React.Fragment>
);
