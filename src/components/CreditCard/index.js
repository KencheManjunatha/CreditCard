// // Write your code here

// // import {useState} from 'react'

// import {
//   MainContainer,
//   CreditCard,
//   CreditCardHeading,
//   HrLine,
//   DetailsImgCard,
//   CardNumber,
//   CardHolderName,
//   PaymentDetailsCard,
//   PaymentMethonCard,
//   PaymentMethodHeading,
//   CardNumberInput,
//   CardNameInput,
// } from './styledComponents'

// const CreditCard = (
//   <MainContainer>
//     <CreditCardContainer>
//       <CreditCardHeading>CREDIT CARD</CreditCardHeading>
//       <HrLine />
//       <DetailsImgCard data-tested="creditCard">
//         <CardNumber>1234</CardNumber>
//         <CardHolderName>xyz</CardHolderName>
//       </DetailsImgCard>
//     </CreditCardContainer>
//     <PaymentDetailsCard>
//       <PaymentMethonCard>
//         <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
//         <>
//           <CardNumberInput type="text" placeholder="Card Number" />
//           <CardNameInput type="text" placeholder="Card Name" />
//         </>
//       </PaymentMethonCard>
//     </PaymentDetailsCard>
//   </MainContainer>
// )

// export default CreditCard

import {useState} from 'react'

import {
  MainContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardholderNameText,
  CardholderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const cardHolderNameInUppercase = cardHolderName.toUpperCase()

  const onChangeCardHolderName = event => {
    setCardHolderName(event.target.value)
  }

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardholderNameText>CARDHOLDER NAME</CardholderNameText>
            <CardholderName>{cardHolderNameInUppercase}</CardholderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardHolderName}
            onChange={onChangeCardHolderName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}
export default CreditCard
