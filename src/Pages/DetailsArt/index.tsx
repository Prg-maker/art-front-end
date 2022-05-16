import { Compass, Link, Package } from "phosphor-react";
import { ArrowLeft } from "phosphor-react";
import { 
  Container,
  Right,
  Title,
  Artist,
  Details,
  Description,
  DetailsPay,
  Price,
  Location,
  Estimed,
  Button,
  Footer,
  Separete
} from "./styles";

export function DetailsArt() {
  return (
    <Container>
      <div>sdsa</div>
      <Right>
        <a href="/">
          <ArrowLeft size={16} weight="bold" />
          Back
        </a>

        <div className="art">
          <Title>Wallowing Breeze</Title>
          <Artist>Hettie Richards</Artist>
          <Details>Oil on canvas, 2008 Gallery wrap canvas 26 in x 23 in</Details>

          <Description>
            Dynamic and elusive abstraction and texture. Plays between the lines
            of chaos and serenity. Perfect fit for modern and contemporary styled
            interiors.
          </Description>
        </div>
          <Separete/>
        <DetailsPay>
          <Price>$620</Price>
          <Location>
            <Compass size={15} weight="bold" style={{
              color: '#65635F'
            }} />
            <strong>Ships from New York, NY, USA</strong>

          </Location>

          <Estimed>
            <Package size={15} weight="bold" style={{
              color: '#65635F'
            }} />
            <strong>Estimated to ship in 3 - 7 days within USA</strong>
          </Estimed>

          <Button>ADD TO CARD</Button>
          <Footer>Taxes and shipping fees will apply upon checkout</Footer>
        </DetailsPay>
       
      </Right>
    </Container>
  );
}
